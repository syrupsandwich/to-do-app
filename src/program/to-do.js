import {
  format,
  formatDistanceToNowStrict,
  parseISO,
  isValid,
  add,
  isToday,
  isPast,
} from "date-fns";
import { updateSessionStorageObject } from "./session-storage-updater.js";

const urgentTasks = [];

const addToUrgentTasks = (taskTimestamp) => {
  urgentTasks.push(taskTimestamp);
  sessionStorage.setItem("urgentTasks", urgentTasks);
};

const removeFromUrgentTasks = (taskTimestamp) => {
  let targetIndex = urgentTasks.indexOf(taskTimestamp);
  urgentTasks.splice(targetIndex, 1);
  sessionStorage.setItem("urgentTasks", urgentTasks);
};

const categoryFactory = ({
  title = "",
  projectTimestamps = [],
  timestamp = Date.now(),
}) => {
  const getTitle = () => {
    return title;
  };

  const setTitle = (input) => {
    if (typeof input !== "string") {
      return console.error("The title must be a string.");
    }
    title = input;
    updateSessionStorageObject(exportOwnData());
  };

  const getCategoryTitle = () => {
    return getTitle();
  };

  const projects = [];

  const printProjects = (message) => {
    if (projects.length === 0) {
      return console.error(`${getCategoryTitle()} : empty`);
    }
    if (!message) {
      console.log(`${getCategoryTitle()} - A list of all projects:`);
    } else {
      console.log(`${getCategoryTitle()} - ${message}`);
    }
    projects.forEach((project, index) => {
      console.log("", index, project.exportOwnData());
    });
  };

  const moveProject = (index, { destination }) => {
    if (!projects[index]) {
      return console.error("The specified origin index is out of range.");
    }
    if (!projects[destination]) {
      return console.error("The specified destination index is out of range.");
    }

    let timestamp = projects[index].getTimestamp();

    let timestampIndex = projectTimestamps.indexOf(timestamp);

    if (timestampIndex === -1) {
      console.warn("The timestamp was not found in projectTimestamps.");
    } else if (index !== timestampIndex) {
      console.warn(
        "The project timestamps are not in sync with the project tasks."
      );
    } else {
      let timestamp = projectTimestamps.splice(timestampIndex, 1)[0];
      projectTimestamps.splice(destination, 0, timestamp);
    }

    let objectA = projects.splice(index, 1)[0];
    projects.splice(destination, 0, objectA);
    printProjects("The projects have been reordered.");
  };

  const removeProject = (index) => {
    if (!projects[index]) {
      return console.error("The specified index is out of range.");
    }

    let timestamp = projects[index].getTimestamp();

    let timestampIndex = projectTimestamps.indexOf(timestamp);

    if (timestampIndex === -1) {
      console.warn(
        "The project's timestamp was not found in projectTimestamps."
      );
    } else {
      projectTimestamps.splice(timestampIndex, 1);
    }

    sessionStorage.removeItem(`project${timestamp}`);

    updateSessionStorageObject(exportOwnData());

    let title = projects[index].title;
    projects.splice(index, 1);
    printProjects(`Project "${title}" has been removed.`);
  };

  const taskFactory = ({
    title = "",
    dueDate = "none",
    dueTime = "00:00",
    pinned = false,
    taskStatus = false,
    timesRepeated = 0,
    timeExtension = {},
    timestamp = Date.now(),
    notes = [],
  }) => {
    const getTitle = () => {
      return title;
    };

    const setTitle = (input) => {
      title = input;
      updateSessionStorageObject(exportOwnData());
    };

    const getPriority = () => {
      if (dueDate && pinned === true) {
        return "2";
      } else if (dueDate) {
        return "1";
      } else {
        return "0";
      }
    };

    const getDeadline = () => {
      return add(parseISO(dueDate), {
        hours: dueTime.slice(0, 2),
        minutes: dueTime.slice(3, 5),
        seconds: dueTime.slice(6),
      });
    };

    const checkCompletionStatus = () => {
      return taskStatus;
    };

    const changeCompletionStatus = () => {
      taskStatus = taskStatus ? false : true;
    };

    const getDueDate = () => {
      return dueDate;
    };

    const setDueDate = (input) => {
      if (!isValid(parseISO(input)) && input !== "none") {
        return console.error("The specified date is not valid.");
      }
      dueDate = input;
      updateSessionStorageObject(exportOwnData());
    };

    const getTimeLeft = () => {
      if (dueDate === "") {
        return console.error("The due date has not been set.");
      }
      if (isPast(parseISO(dueDate))) {
        return `${formatDistanceToNowStrict(getDeadline())} ago.`;
      }
      return formatDistanceToNowStrict(getDeadline());
    };

    const getDueTime = () => {
      return dueTime;
    };

    const setDueTime = (input) => {
      dueTime = input;
      updateSessionStorageObject(exportOwnData());
    };

    const isDueToday = () => {
      return isToday(getDeadline());
    };

    const getTimeExtension = () => {
      return timeExtension;
    };

    const pin = () => {
      pinned = true;
      updateSessionStorageObject(exportOwnData());
      addToUrgentTasks(getTimestamp());
    };

    const unpin = () => {
      pinned = false;
      updateSessionStorageObject(exportOwnData());
      removeFromUrgentTasks;
    };

    const setTimeExtension = (time = {}) => {
      if (typeof time !== "object" || Array.isArray(time) || time === null) {
        return console.error(
          "The specified time parameter should at least be an empty object."
        );
      }
      timeExtension = time;
      updateSessionStorageObject(exportOwnData());
    };

    const getTimestamp = () => {
      return timestamp;
    };

    const getTimesRepeated = () => {
      return timesRepeated;
    };

    const extendDeadline = () => {
      if (taskStatus) {
        return console.error("The task has already been completed.");
      }
      if (!timeExtension) {
        return console.warn("The repeat time has not been set.");
      }
      let currentDayAndTime = new Date();
      let nextDueDate = add(currentDayAndTime, timeExtension);
      dueDate = format(nextDueDate, "yyyy-MM-dd");
      let dateWithPreviousTime = getDeadline();
      let nextDeadline = add(dateWithPreviousTime, timeExtension);
      dueTime = format(nextDeadline, "HH:mm:ss");
      timesRepeated++;
      return;
    };

    const makeNote = ({ type = "text", text = "", checked = false }) => {
      if (type !== "text" && type !== "checkbox" && type !== "bullet") {
        return console.error(
          'The note type must be either "text", "checkbox", or "bullet".'
        );
      }
      notes.push({ type, text, checked });
      updateSessionStorageObject(exportOwnData());
    };

    const removeNote = (index) => {
      if (!notes[index]) {
        return console.error("The specified note index is out of range.");
      }
      notes.splice(index, 1);
      updateSessionStorageObject(exportOwnData());
    };

    const moveNote = (originIndex, { destination }) => {
      let note = notes.splice(originIndex, 1)[0];
      notes.splice(destination, 0, note);
      updateSessionStorageObject(exportOwnData());
    };

    const changeNoteType = (index, type) => {
      if (type !== "text" && type !== "checkbox" && type !== "bullet") {
        return console.error(
          'The note type must be either "text", "checkbox", or "bullet".'
        );
      }
      notes[index].type = type;
      updateSessionStorageObject(exportOwnData());
    };

    const changeNoteText = (index, text) => {
      if (typeof text !== "string") {
        return console.error("The input must be a string.");
      }
      notes[index].text = text;
      updateSessionStorageObject(exportOwnData());
    };

    const checkNote = (index, value) => {
      notes[index].checked = value;
      updateSessionStorageObject(exportOwnData());
    };

    const updateNote = (index, { type, text, checked }) => {
      if (!notes[index]) {
        return console.error("The specified note index is out of range.");
      }
      if (type) {
        changeNoteType(index, type);
      }
      if (text) {
        changeNoteText(index, text);
      }
      if (checked || !checked) {
        checkNote(index, checked);
      }
    };

    const exportOwnData = () => {
      let data = {
        title: getTitle(),
        dueDate: getDueDate(),
        pinned,
        dueTime: getDueTime(),
        taskStatus: checkCompletionStatus(),
        timesRepeated: getTimesRepeated(),
        timeExtension: getTimeExtension(),
        timestamp: getTimestamp(),
        notes: notes,
      };

      return data;
    };

    return {
      getTitle,
      setTitle,
      getDueDate,
      setDueDate,
      getDueTime,
      setDueTime,
      pin,
      unpin,
      getTimeLeft,
      getPriority,
      checkCompletionStatus,
      changeCompletionStatus,
      isDueToday,
      setTimeExtension,
      getTimesRepeated,
      getTimestamp,
      extendDeadline,
      makeNote,
      removeNote,
      moveNote,
      updateNote,
      exportOwnData,
      notes,
    };
  };

  const projectFactory = ({
    title = "",
    description = "",
    taskTimestamps = [],
    timestamp = Date.now(),
  }) => {
    const getTitle = () => {
      return title;
    };

    const setTitle = (input) => {
      title = input;
      updateSessionStorageObject(exportOwnData());
    };

    const getDescription = () => {
      return description;
    };

    const setDescription = (input) => {
      description = input;
      updateSessionStorageObject(exportOwnData());
    };

    const getProjectTitle = () => {
      return getTitle();
    };

    const tasks = [];

    const printTasks = (message = `A list of all tasks:`) => {
      if (tasks.length === 0) {
        return Error(`There are no tasks in "${getProjectTitle()}".`);
      }
      console.log(`${getCategoryTitle()} / ${getProjectTitle()} - ${message}`);
      tasks.forEach((task, index) => {
        console.log(" ", index, task.exportOwnData());
      });
    };

    const makeTask = (task = {}) => {
      let newTask = taskFactory(task);
      tasks.push(newTask);

      let preexistingTaskTimestampIndex = taskTimestamps.indexOf(
        newTask.getTimestamp()
      );
      if (preexistingTaskTimestampIndex === -1) {
        taskTimestamps.push(newTask.getTimestamp());
      }

      updateSessionStorageObject(newTask.exportOwnData());
      updateSessionStorageObject(exportOwnData());

      printTasks(`A new task has been added to "${getProjectTitle()}".`);
    };

    const removeTask = (index) => {
      if (!tasks[index]) {
        return console.error("The specified task index is out of range.");
      }

      let timestamp = tasks[index].getTimestamp();

      let timestampIndex = taskTimestamps.indexOf(timestamp);

      if (timestampIndex === -1) {
        console.warn("The task's timestamp was not found in taskTimestamps.");
      } else {
        taskTimestamps.splice(timestampIndex, 1);
      }

      sessionStorage.removeItem(`task${tasks[index].getTimestamp()}`);

      updateSessionStorageObject(exportOwnData());

      let title = tasks[index].title;
      tasks.splice(index, 1);
      printTasks(`The task "${title}" has been removed.`);
    };

    const transferTaskData = (taskIndex, { destinationProject }) => {
      if (!tasks[taskIndex]) {
        return console.error("The specified task index is out of range.");
      }
      if (!projects[destinationProject]) {
        return console.log(
          Error("The specified destination index is out of range.")
        );
      }
      let taskExport = tasks[taskIndex].exportOwnData();
      removeTask(taskIndex);
      projects[destinationProject].makeTask(taskExport);
      projects[destinationProject].printTasks(
        `Task "${taskExport.title}" has been transferred.`
      );
    };

    const moveTask = (index, { destination }) => {
      if (!tasks[index]) {
        return console.log(
          Error("The first specified task index is out of range.")
        );
      }
      if (!tasks[destination]) {
        return console.log(
          Error("The second specified task index is out of range.")
        );
      }

      let timestamp = tasks[index].getTimestamp();

      let timestampIndex = taskTimestamps.indexOf(timestamp);

      if (timestampIndex === -1) {
        console.warn("The timestamp was not found in taskTimestamps.");
      } else if (index !== timestampIndex) {
        console.warn(
          "The task timestamps are not in sync with the project tasks."
        );
      } else {
        let timestamp = taskTimestamps.splice(timestampIndex, 1)[0];
        taskTimestamps.splice(destination, 0, timestamp);
      }

      let task = tasks.splice(index, 1)[0];
      tasks.splice(destination, 0, task);
      printTasks("The task list has been reordered.");

      updateSessionStorageObject(exportOwnData());
    };

    const getTaskTimestamps = () => {
      return taskTimestamps;
    };

    const getTimestamp = () => {
      return timestamp;
    };

    const exportOwnData = () => {
      let data = {
        title: getTitle(),
        description: getDescription(),
        taskTimestamps: getTaskTimestamps(),
        timestamp: getTimestamp(),
      };

      return data;
    };

    return {
      getTitle,
      setTitle,
      getDescription,
      setDescription,
      tasks,
      printTasks,
      makeTask,
      removeTask,
      transferTaskData,
      moveTask,
      getTimestamp,
      exportOwnData,
    };
  };

  const makeProject = (project = {}) => {
    let newProject = projectFactory(project);
    projects.push(newProject);

    let preexistingProjectTimestampIndex = projectTimestamps.indexOf(
      newProject.getTimestamp()
    );
    if (preexistingProjectTimestampIndex === -1) {
      projectTimestamps.push(newProject.getTimestamp());
    }

    updateSessionStorageObject(newProject.exportOwnData());
    updateSessionStorageObject(exportOwnData());

    printProjects("A new project has been made.");
  };

  const transferProject = (projectIndex, { destinationCategory }) => {
    if (!categories[destinationCategory]) {
      return console.log(
        Error("The specified destination index is out of range.")
      );
    }
    let projectExport = projects[projectIndex].exportOwnData();
    removeProject(projectIndex);
    categories[destinationCategory].makeProject(projectExport);
    categories[destinationCategory].printProjects(
      `The project "${projectExport.title()}" has been transferred.`
    );
  };

  const transferTaskData = (
    taskIndex,
    { originProjectIndex, destinationCategoryIndex, destinationProjectIndex }
  ) => {
    if (!projects[originProjectIndex]) {
      return console.log("The specified origin project index is out of range.");
    }
    if (!projects[originProjectIndex].tasks[taskIndex]) {
      return console.error("The specified task index is out of range.");
    }
    if (!categories[destinationCategoryIndex]) {
      return console.log(
        "The specified destination category index is out of range."
      );
    }
    if (
      !categories[destinationCategoryIndex].projects[destinationProjectIndex]
    ) {
      return console.log(
        "The specified destination project index is out of range."
      );
    }
    let taskExport =
      projects[originProjectIndex].tasks[taskIndex].exportOwnData();
    projects[originProjectIndex].removeTask(taskIndex);
    categories[destinationCategoryIndex].projects[
      destinationProjectIndex
    ].makeTask(taskExport);
  };

  const getProjectTimestamps = () => {
    return projectTimestamps;
  };

  const getTimestamp = () => {
    return timestamp;
  };

  const exportOwnData = () => {
    let data = {
      title: getTitle(),
      projectTimestamps: getProjectTimestamps(),
      timestamp: getTimestamp(),
    };

    return data;
  };

  return {
    getTitle,
    setTitle,
    projects,
    printProjects,
    moveProject,
    removeProject,
    makeProject,
    transferProject,
    transferTaskData,
    getTimestamp,
    exportOwnData,
  };
};

const categories = [];

let categoryTimestamps = [];

const makeCategory = (category = {}) => {
  let newCategory = categoryFactory(category);
  categories.push(newCategory);

  updateSessionStorageObject(newCategory.exportOwnData());

  categoryTimestamps.push(newCategory.getTimestamp());
  updateSessionStorageObject({ categoryTimestamps });

  printCategories("A new category has been made.");
};

const removeCategory = (index) => {
  categories.splice(index, 1);

  let timestampIndex = categories.indexOf(categories[index].getTimestamp());

  if (timestampIndex === -1) {
    console.warn(
      "The category's timestamp was not found in category timestamps."
    );
  } else {
    categoryTimestamps.splice(index, 0);
  }
  updateSessionStorageObject({ categoryTimestamps });
};

const printCategories = (message) => {
  if (!message) {
    console.log("A list of all categories:");
  } else {
    console.log(message);
  }
  categories.forEach((category, index) => {
    console.log(" ", `${index}:`, category.exportOwnData());
  });
};

const getTasksForToday = () => {
  let tasksForToday = [];
  categories.forEach((category) => {
    category.projects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (task.isDueToday()) {
          tasksForToday.push(task);
        }
      });
    });
  });
  return tasksForToday;
};

const moveCategory = (origin, destination) => {
  let tempObj = categories.splice(origin, 1)[0];
  categories.splice(destination, 0, tempObj);
  printCategories("The categories have been reordered.");
};

function findTask(timestamp) {
  let tempTasks = [];

  categories.forEach((category) => {
    category.projects.forEach((project) => {
      project.tasks.forEach((task) => {
        tempTasks.push(task);
      });
    });
  });

  let foundTask = tempTasks.find((task) => {
    return task.getTimestamp() === Number(timestamp);
  });

  return foundTask;
}

export {
  categories,
  makeCategory,
  printCategories,
  getTasksForToday,
  moveCategory,
  removeCategory,
  findTask,
};
