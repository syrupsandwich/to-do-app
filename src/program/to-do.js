import "../style/default.css";

const welcomeProject = {
  title: "To-do app",
  description: "A place to store all of your tasks",
  tasks: [],
};

const demoProject1 = {
  title: "Exercise solutions.",
  description:
    "Figure out an optimal exercise setup for each major muscle group.",
  tasks: [],
};

const demoProject2 = {
  title: "250 box challenge",
  description: '"draw a box - then do it again another 249 times."',
  tasks: [],
};

const projects = [welcomeProject, demoProject1, demoProject2];

const printProjects = () => {
  console.log("Project List");
  let index = 0;
  projects.forEach((project) => {
    console.log(index, JSON.parse(JSON.stringify(project)));
    index++;
  });
};

const moveProject = (positionA, positionB) => {
  let objectA = projects.splice(positionA, 1)[0];
  projects.splice(positionB, 0, objectA);
  console.log("The projects have been reordered.");
  printProjects();
};

const removeProject = (index) => {
  let title = projects[index].title;
  projects.splice(index, 1);
  console.log(`Project "${title}" has been removed.`);
  printProjects();
};

const makeProject = ({ title = "", description = "" }) => {
  projects.push({ title, description, tasks: [] });
  console.log("A new project has been made.");
  printProjects();
};

const taskFactory = ({
  title = "",
  description = "",
  dueDate = "",
  priority = "",
}) => {
  let taskStatus = false;
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
  return {
    title,
    description,
    dueDate,
    priority,
    checkCompletionStatus,
    changeCompletionStatus,
  };
};

const printTasks = (projectIndex) => {
  let index = 0;
  let projectTitle = projects[projectIndex].title;
  let length = projects[projectIndex].tasks.length;
  console.log(`Tasks in "${projectTitle}": ${length}`);
  projects[projectIndex].tasks.forEach((task) => {
    console.log(index, task);
    index++;
  });
};

const addTask = (projectIndex, task = {}) => {
  if (projectIndex > projects.length - 1 || projectIndex < 0) {
    return console.log(Error("No project was specified."));
  }
  projects[projectIndex].tasks.push(taskFactory(task));
  console.log("A task has been added to the list");
  printTasks(projectIndex);
};

const updateProject = (index, { title, description }) => {
  if (title) {
    projects[index].title = title;
  }
  if (description) {
    projects[index].description = description;
  }
  console.log(`The project at ${index} has been updated.`);
  printProjects();
};

const updateTask = (
  projectIndex,
  taskIndex,
  { title, description, dueDate, priority }
) => {
  let task = projects[projectIndex].tasks[taskIndex];
  if (title) {
    task.title = title;
  }
  if (description) {
    task.description = description;
  }
  if (dueDate) {
    task.dueDate = dueDate;
  }
  if (priority) {
    task.priority = priority;
  }
  console.log(`The task at ${taskIndex} has been updated.`);
  printTasks(projectIndex);
};

const removeTask = (projectIndex, taskIndex) => {
  let title = projects[projectIndex].tasks[taskIndex].title;
  projects[projectIndex].tasks.splice(taskIndex, 1);
  console.log(`The task "${title}" has been removed.`);
  printTasks(projectIndex);
};

const transferTask = (projectIndexA, projectIndexB, taskIndex) => {
  let task = projects[projectIndexA].tasks.splice(taskIndex, 1)[0];
  addTask(projectIndexB, { task });
  console.log(`Task ${task.title} has been transfered.`);
  printTasks(projectIndexB);
};

const moveTask = (projectIndex, positionA, positionB) => {
  let task = projects[projectIndex].tasks.splice(positionA, 1)[0];
  projects[projectIndex].tasks.splice(positionB, 0, task);
  printTasks(projectIndex);
};

printProjects();
