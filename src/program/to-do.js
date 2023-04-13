import {
  format,
  formatDistanceToNowStrict,
  parseISO,
  isValid,
  add,
  isToday,
  isPast,
} from "date-fns";

const categoryFactory = (title) => {
  const getTitle = () => {
    return title;
  };

  const setTitle = (input) => {
    if (typeof input !== "string") {
      return console.error("The title must be a string.");
    }
    title = input;
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
    let objectA = projects.splice(index, 1)[0];
    projects.splice(destination, 0, objectA);
    printProjects("The projects have been reordered.");
  };

  const removeProject = (index) => {
    if (!projects[index]) {
      return console.error("The specified index is out of range.");
    }
    let title = projects[index].title;
    projects.splice(index, 1);
    printProjects(`Project "${title}" has been removed.`);
  };

  const taskFactory = ({
    title = "",
    description = "",
    dueDate = "",
    dueTime = "",
    priority = "",
  }) => {
    const getTitle = () => {
      return title;
    };

    const setTitle = (input) => {
      title = input;
    };

    const getDescription = () => {
      return description;
    };

    const setDescription = (input) => {
      description = input;
    };

    const getPriority = () => {
      return priority;
    };

    const setPriority = (input) => {
      priority = input;
    };

    const getDeadline = () => {
      return add(parseISO(dueDate), {
        hours: dueTime.slice(0, 2),
        minutes: dueTime.slice(3, 5),
        seconds: dueTime.slice(6),
      });
    };

    let taskStatus = false;

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
      if (!isValid(parseISO(input))) {
        return console.error("The specified date is not valid.");
      }
      dueDate = input;
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
    };

    const isDueToday = () => {
      return isToday(getDeadline());
    };

    let timeExtension = {};

    const getTimeExtension = () => {
      return timeExtension;
    };

    const setTimeExtension = (time = {}) => {
      if (typeof time !== "object" || Array.isArray(time) || time === null) {
        return console.error(
          "The specified time parameter should at least be an empty object."
        );
      }
      timeExtension = time;
    };

    let timesRepeated = 0;

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

    const exportOwnData = () => {
      let data = {
        title: getTitle(),
        description: getDescription(),
        priority: getPriority(),
        dueDate: getDueDate(),
        dueTime: getDueTime(),
        completionStatus: checkCompletionStatus(),
        timesRepeated: getTimesRepeated(),
        timeExtension: getTimeExtension(),
      };

      return data;
    };

    return {
      getTitle,
      setTitle,
      getDescription,
      setDescription,
      getDueDate,
      setDueDate,
      getDueTime,
      setDueTime,
      getTimeLeft,
      getPriority,
      setPriority,
      checkCompletionStatus,
      changeCompletionStatus,
      isDueToday,
      setTimeExtension,
      getTimesRepeated,
      extendDeadline,
      exportOwnData,
    };
  };

  const projectFactory = ({ title = "", description = "" }) => {
    const getTitle = () => {
      return title;
    };

    const setTitle = (input) => {
      title = input;
    };

    const getDescription = () => {
      return description;
    };

    const setDescription = (input) => {
      description = input;
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
        //console.log(" ", index, task);
        console.log(" ", index, task.exportOwnData());
      });
    };

    const makeTask = (task = {}) => {
      tasks.push(taskFactory(task));
      printTasks(`A new task has been added to "${getProjectTitle()}".`);
    };

    const removeTask = (index) => {
      if (!tasks[index]) {
        return console.error("The specified task index is out of range.");
      }
      let title = tasks[index].title;
      tasks.splice(index, 1);
      printTasks(`The task "${title}" has been removed.`);
    };

    const transferTask = (taskIndex, { destinationProject }) => {
      if (!tasks[taskIndex]) {
        return console.error("The specified task index is out of range.");
      }
      if (!projects[destinationProject]) {
        return console.log(
          Error("The specified destination index is out of range.")
        );
      }
      let task = tasks.splice(taskIndex, 1)[0];
      projects[destinationProject].tasks.push(task);
      projects[destinationProject].printTasks(
        `Task "${task.title}" has been transferred.`
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
      let task = tasks.splice(index, 1)[0];
      tasks.splice(destination, 0, task);
      printTasks("The task list has been reordered.");
    };

    const exportOwnData = () => {
      let data = {
        title: getTitle(),
        description: getDescription(),
        tasks: tasks.length,
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
      transferTask,
      moveTask,
      exportOwnData,
    };
  };

  const makeProject = ({ title, description }) => {
    projects.push(projectFactory({ title, description }));
    printProjects("A new project has been made.");
  };

  const transferProject = (projectIndex, { destinationCategory }) => {
    if (!categories[destinationCategory]) {
      return console.log(
        Error("The specified destination index is out of range.")
      );
    }
    let project = projects.splice(projectIndex, 1)[0];
    categories[destinationCategory].projects.push(project);
    categories[destinationCategory].printProjects(
      `The project "${project.getTitle()}" has been transferred.`
    );
  };

  const transferTask = (
    taskIndex,
    { originProjectIndex, destinationCategoryIndex, destinationProjectIndex }
  ) => {
    let tempTask = projects[originProjectIndex].tasks.splice(taskIndex, 1)[0];
    categories[destinationCategoryIndex].projects[
      destinationProjectIndex
    ].tasks.push(tempTask);
  };

  const exportOwnData = () => {
    let data = {
      title: getTitle(),
      projects: projects.length,
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
    transferTask,
    exportOwnData,
  };
};

const categories = [];

const makeCategory = (title) => {
  let project = categoryFactory(title);
  categories.push(project);
  return categories[categories.length - 1];
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

let printingContainer = document.createElement("div");
printingContainer.id = "printing-output";

let printingContainerTitle = document.createElement("h3");
printingContainerTitle.textContent = `Displaying all tasks:`;

let dataContainer = document.createElement("div");

printingContainer.appendChild(printingContainerTitle);
printingContainer.appendChild(dataContainer);
document.body.appendChild(printingContainer);

const printTasks = () => {
  let categoryListElement = document.createElement("ol");
  categoryListElement.start = "0";
  categoryListElement.id = "category-list";
  dataContainer.appendChild(categoryListElement);

  categories.forEach((category) => {
    let categoryTitleElement = document.createElement("li");
    let categoryListTitle = document.createElement("span");
    categoryListTitle.id = "category-title";
    categoryListTitle.textContent = category.getTitle();
    categoryTitleElement.appendChild(categoryListTitle);

    categoryListElement.appendChild(categoryTitleElement);

    let projectListElement = document.createElement("ol");
    projectListElement.start = "0";
    projectListElement.id = "project-list";

    categoryTitleElement.appendChild(projectListElement);

    category.projects.forEach((project) => {
      let projectTitleElement = document.createElement("li");
      let projectListTitle = document.createElement("span");
      projectListTitle.id = "project-title";
      projectListTitle.textContent = project.getTitle();
      projectTitleElement.appendChild(projectListTitle);

      projectListElement.appendChild(projectTitleElement);

      let taskListElement = document.createElement("ol");
      taskListElement.stars = "0";
      taskListElement.start = "0";
      taskListElement.id = "task-list";

      projectTitleElement.appendChild(taskListElement);

      project.tasks.forEach((task) => {
        let taskDataElement = document.createElement("li");
        taskDataElement.id = "task-data";

        taskDataElement.appendChild(document.createTextNode("{"));

        let taskExport = task.exportOwnData();

        Object.entries(taskExport).forEach(([key, value], index) => {
          if (index !== 0) {
            taskDataElement.appendChild(document.createTextNode(", "));
          }
          let text = document.createTextNode(`${key}: `);
          taskDataElement.appendChild(text);

          let propertySpanElement = document.createElement("span");

          if (typeof value === "object") {
            propertySpanElement.textContent = JSON.stringify(value);
            propertySpanElement.textContent.replaceAll('"', "");
          } else {
            propertySpanElement.textContent = `"${value}"`;
          }

          taskDataElement.appendChild(propertySpanElement);
        });

        taskDataElement.appendChild(document.createTextNode("}"));

        taskListElement.appendChild(taskDataElement);
      });
    });
  });
};

export {
  printTasks,
  categories,
  makeCategory,
  printCategories,
  getTasksForToday,
  moveCategory,
};
