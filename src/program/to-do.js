import {
  formatDistanceToNowStrict,
  parseISO,
  isValid,
  add,
  isToday,
} from "date-fns";

const categoryFactory = (category) => {
  const renameCategory = (input) => {
    if (typeof input !== "string") {
      return console.error("The specified title is not a string.");
    } else {
      category = input;
    }
  };

  let getTitle = () => {
    return category;
  };

  const projects = [];

  const printProjects = (message) => {
    if (projects.length === 0) {
      return console.error(`${category} : empty`);
    }
    if (!message) {
      console.log(`${category} - A list of all projects:`);
    } else {
      console.log(`${category} - ${message}`);
    }
    projects.forEach((project, index) => {
      console.log(" ", index, JSON.parse(JSON.stringify(project)));
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
    let taskStatus = false;
    const getDeadLine = () => {
      return add(parseISO(dueDate), {
        hours: dueTime.slice(0, 2),
        minutes: dueTime.slice(3, 5),
        seconds: dueTime.slice(6),
      });
    };
    const checkCompletionStatus = () => {
      if (taskStatus) {
        console.log(`Task "${title}" has been completed. :D`);
      }
      if (!taskStatus) {
        console.log(`Task "${title}" has not been completed. :/`);
      }
      return taskStatus;
    };
    const changeCompletionStatus = () => {
      taskStatus = taskStatus ? false : true;
    };
    const getDueDate = () => {
      return dueDate;
    };
    const setDueDate = (date) => {
      if (!isValid(parseISO(date))) {
        return console.error("The specified date is not valid.");
      }
      dueDate = date;
    };
    const getTimeLeft = () => {
      if (dueDate === "") {
        return console.error("The due date has not been set.");
      }
      if (isPast(parseISO(dueDate))) {
        return `${formatDistanceToNowStrict(getDeadLine())} ago.`;
      }
      return formatDistanceToNowStrict(getDeadLine());
    };
    const getDueTime = () => {
      if (dueTime === "") {
        return console.error("The due time has not been set.");
      }
      return dueTime;
    };
    const setDueTime = (time) => {
      dueTime = time;
    };
    const isDueToday = () => {
      return isToday(getDeadLine());
    };

    return {
      title,
      description,
      getDueDate,
      setDueDate,
      getDueTime,
      setDueTime,
      getTimeLeft,
      priority,
      checkCompletionStatus,
      changeCompletionStatus,
      isDueToday,
    };
  };

  const projectFactory = ({ title = "", description = "" }) => {
    const tasks = [];
    const printTasks = (message = `A list of all tasks:`) => {
      if (tasks.length === 0) {
        return Error(`There are no tasks in "${title}".`);
      }
      console.log(`${category} / ${title} - ${message}`);
      tasks.forEach((task, index) => {
        console.log(" ", index, task);
      });
    };
    const makeTask = (task = {}) => {
      tasks.push(taskFactory(task));
      printTasks(`A new task has been added to "${title}".`);
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

    return {
      title,
      description,
      tasks,
      printTasks,
      makeTask,
      removeTask,
      transferTask,
      moveTask,
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
      `The project "${project.title}" has been transfered.`
    );
  };

  return {
    renameCategory,
    getTitle,
    projects,
    printProjects,
    moveProject,
    removeProject,
    makeProject,
    transferProject,
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
    console.log("message");
  }
  categories.forEach((category, index) => {
    console.log(
      " ",
      `${index}:`,
      category.getTitle(),
      `(${category.projects.length} projects)`
    );
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

export { categories, makeCategory, printCategories, getTasksForToday };
