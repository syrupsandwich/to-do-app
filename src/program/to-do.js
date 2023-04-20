import {
  format,
  formatDistanceToNowStrict,
  parseISO,
  isValid,
  add,
  isToday,
  isPast,
} from "date-fns";

let updateSessionStorage = true;

const updateSessionStorageObject = (dataExportObject) => {
  if (!updateSessionStorage) {
    return;
  } else if (Object.hasOwn(dataExportObject, "categoryTimestamps")) {
    sessionStorage.setItem(
      `categoryTimestampsObject`,
      JSON.stringify(dataExportObject)
    );
  } else if (Object.hasOwn(dataExportObject, "projectTimestamps")) {
    sessionStorage.setItem(
      `category${dataExportObject.timestamp}`,
      JSON.stringify(dataExportObject)
    );
  } else if (Object.hasOwn(dataExportObject, "taskTimestamps")) {
    sessionStorage.setItem(
      `project${dataExportObject.timestamp}`,
      JSON.stringify(dataExportObject)
    );
  } else if (Object.hasOwn(dataExportObject, "taskStatus")) {
    sessionStorage.setItem(
      `task${dataExportObject.timestamp}`,
      JSON.stringify(dataExportObject)
    );
  }
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
    description = "",
    dueDate = "",
    dueTime = "",
    priority = "",
    taskStatus = false,
    timesRepeated = 0,
    timeExtension = {},
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

    const getPriority = () => {
      return priority;
    };

    const setPriority = (input) => {
      priority = input;
      updateSessionStorageObject(exportOwnData());
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
      if (!isValid(parseISO(input))) {
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

    const exportOwnData = () => {
      let data = {
        title: getTitle(),
        description: getDescription(),
        priority: getPriority(),
        dueDate: getDueDate(),
        dueTime: getDueTime(),
        taskStatus: checkCompletionStatus(),
        timesRepeated: getTimesRepeated(),
        timeExtension: getTimeExtension(),
        timestamp: getTimestamp(),
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
      getTimestamp,
      extendDeadline,
      exportOwnData,
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

let printingContainer = document.createElement("div");
printingContainer.id = "printing-output";

let printingContainerTitle = document.createElement("h3");
printingContainerTitle.textContent = `Displaying everything:`;

let dataContainer = document.createElement("div");

printingContainer.appendChild(printingContainerTitle);
printingContainer.appendChild(dataContainer);
document.body.appendChild(printingContainer);

const displayEverything = () => {
  let categoryListElement = document.createElement("ol");
  categoryListElement.start = "0";
  categoryListElement.id = "category-list";
  dataContainer.appendChild(categoryListElement);

  categories.forEach((category) => {
    let categoryListItem = document.createElement("li");
    let categoryParagraph = document.createElement("p");
    categoryParagraph.classList.add("category-data");

    let categoryExport = category.exportOwnData();

    Object.entries(categoryExport).forEach(([key, value], index) => {
      if (index !== 0) {
        categoryParagraph.appendChild(document.createTextNode(", "));
        let text = document.createTextNode(`${key}: `);
        categoryParagraph.appendChild(text);
      }

      let span = document.createElement("span");

      if (index === 0) {
        span.textContent = value;
        span.id = "category-title";
      } else if (typeof value === "object") {
        let valueString = JSON.stringify(value);
        span.textContent = valueString.replaceAll('"', "");
      } else {
        span.textContent = `"${value}"`;
      }

      categoryParagraph.appendChild(span);
    });

    categoryListItem.appendChild(categoryParagraph);

    categoryListElement.appendChild(categoryListItem);

    let projectListElement = document.createElement("ol");
    projectListElement.start = "0";
    projectListElement.id = "project-list";

    categoryListItem.appendChild(projectListElement);

    category.projects.forEach((project) => {
      let projectListItem = document.createElement("li");
      let projectParagraph = document.createElement("p");
      projectParagraph.classList.add("project-data");

      let projectExport = project.exportOwnData();

      Object.entries(projectExport).forEach(([key, value], index) => {
        if (index !== 0) {
          projectParagraph.appendChild(document.createTextNode(", "));
          let text = document.createTextNode(`${key}: `);
          projectParagraph.appendChild(text);
        }

        let span = document.createElement("span");

        if (index === 0) {
          span.textContent = value;
          span.id = "project-title";
        } else if (typeof value === "object") {
          let valueString = JSON.stringify(value);
          span.textContent = valueString.replaceAll('"', "");
        } else {
          span.textContent = `"${value}"`;
        }

        projectParagraph.appendChild(span);
      });

      projectListItem.appendChild(projectParagraph);

      projectListElement.appendChild(projectListItem);

      let taskListElement = document.createElement("ol");
      taskListElement.start = "0";
      taskListElement.id = "task-list";

      projectListItem.appendChild(taskListElement);

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
            let valueString = JSON.stringify(value);
            propertySpanElement.textContent = valueString.replaceAll('"', "");
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

const loadDemo = () => {
  let categoryCount = 0;
  let projectCount = 0;
  let taskCount = 0;

  makeCategory({
    title: "Welcome",
    timestamp: categoryCount++,
  });

  let welcome = categories[categories.length - 1];

  welcome.makeProject({
    title: "To-do app",
    description: "A place to store all of your tasks",
    timestamp: projectCount++,
  });

  welcome.projects[0].makeTask({
    title: "Look around",
    description: "Get to know the app.",
    timestamp: taskCount++,
    timeExtension: { minutes: 5 },
  });

  makeCategory({
    title: "Fitness",
    timestamp: categoryCount++,
  });

  let fitness = categories[categories.length - 1];

  fitness.makeProject({
    title: "Exercise solutions",
    description: "Figure out a setup for each major muscle group.",
    timestamp: projectCount++,
  });

  fitness.projects[0].makeTask({
    title: "Buy equipment from Big 5",
    description: "",
    timestamp: taskCount++,
  });

  fitness.projects[0].makeTask({
    title: "Buy supplies from Home Depo",
    description: "",
    timestamp: taskCount++,
  });

  fitness.makeProject({
    title: "Health education",
    description:
      "Learning about health: mentally, physically, and spiritually.",
    timestamp: projectCount++,
  });

  fitness.projects[1].makeTask({
    title: "Read The Physics of Resistance Exercise",
    description:
      "Learn how to exercise muscles in accordance to biomechanical principles.",
    taskStatus: "true",
    timestamp: taskCount++,
  });

  fitness.projects[1].makeTask({
    title: "Read The Way of Men",
    description: "Learn what it has meant to be a man.",
    taskStatus: "true",
    timestamp: taskCount++,
  });

  fitness.projects[1].makeTask({
    title: "Read Nutrition and Physical Degeneration",
    description:
      "Learn about the effects nutrition has on your body's development.",
    timestamp: taskCount++,
  });

  makeCategory({
    title: "Finance",
    timestamp: categoryCount++,
  });

  let finance = categories[categories.length - 1];

  finance.makeProject({
    title: "Web developement",
    description: "The main source of income",
    timestamp: projectCount++,
  });

  finance.projects[0].makeTask({
    title: "Work on the minor login issue",
    description:
      "The site runs into problems when logging in with internet explorer.",
    timestamp: taskCount++,
  });

  finance.projects[0].makeTask({
    title: "Reply to the HR email",
    description: "A survey about your wellbeing and working conditions.",
    timeExtension: { days: 2 },
    timestamp: taskCount++,
  });

  finance.projects[0].makeTask({
    title: "Negotiate with the boss",
    description:
      "Get the boss to raise your salary for solving all the hardest problems.",
    timestamp: taskCount++,
  });

  finance.makeProject({
    title: "Digital book",
    description: "The other source of income",
    timestamp: projectCount++,
  });

  finance.projects[1].makeTask({
    title: "Check product analitics",
    description: "How is the campain holding up?",
    timestamp: taskCount++,
  });

  finance.projects[1].makeTask({
    title: "Write 1000 words",
    description: "This is the daily quota for the current draft.",
    timeExtension: { days: 1 },
    timestamp: taskCount++,
  });

  finance.projects[1].makeTask({
    title: "Post about the new book.",
    description: "Advertize the new book using template 16.",
    timeExtension: { weeks: 1 },
    timestamp: taskCount++,
  });

  finance.projects[1].makeTask({
    title: "Review feedback",
    description: "Address customer issues and collect positive reviews.",
    timeExtension: { days: 3 },
    timestamp: taskCount++,
  });

  makeCategory({
    title: "Other Interests",
    timestamp: categoryCount++,
  });

  let otherInterests = categories[categories.length - 1];

  otherInterests.makeProject({
    title: "Drawing",
    description: "",
    tasks: [],
    timestamp: projectCount++,
  });

  otherInterests.projects[0].makeTask({
    title: "250 box practice",
    description: "Draw 5 boxes on a page every day until 50 pages are done.",
    timeExtension: { days: 1 },
    timestamp: taskCount++,
  });

  otherInterests.projects[0].makeTask({
    title: "50% rule",
    description:
      "Draw whatever you want for the same amount of time spent practicing.",
    timestamp: taskCount++,
  });
};

if (sessionStorage.categoryTimestampsObject) {
  let initiationObject = JSON.parse(
    sessionStorage.getItem("categoryTimestampsObject")
  );
  initiationObject.categoryTimestamps.forEach((timestamp) => {
    let categoryDataImport = JSON.parse(
      sessionStorage.getItem(`category${timestamp}`)
    );
    makeCategory(categoryDataImport);

    categoryDataImport.projectTimestamps.forEach((timestamp) => {
      let projectDataImport = JSON.parse(
        sessionStorage.getItem(`project${timestamp}`)
      );

      let category = categories[categories.length - 1];
      category.makeProject(projectDataImport);

      console.log("projectDataImport", projectDataImport);
      projectDataImport.taskTimestamps.forEach((timestamp) => {
        let taskDataImport = JSON.parse(
          sessionStorage.getItem(`task${timestamp}`)
        );

        console.log(taskDataImport);

        let project = category.projects[category.projects.length - 1];
        project.makeTask(taskDataImport);
      });
    });
  });

  displayEverything();
} else {
  loadDemo();
  displayEverything();
}

export {
  displayEverything,
  categories,
  makeCategory,
  printCategories,
  getTasksForToday,
  moveCategory,
  removeCategory,
};
