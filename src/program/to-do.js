export const projects = [];

export const printProjects = (message = "A list of all Projects:") => {
  if (projects.length === 0) {
    return console.log(Error("There are no projects."));
  }
  console.log(`${message}`);
  let index = 0;
  projects.forEach((project) => {
    console.log(index, JSON.parse(JSON.stringify(project)));
    index++;
  });
};

export const moveProject = (positionA, positionB) => {
  if (!projects[positionA]) {
    return console.log(Error("The project does not exist."));
  }
  if (!projects[positionB]) {
    return console.log(Error("The destination out of range."));
  }
  let objectA = projects.splice(positionA, 1)[0];
  projects.splice(positionB, 0, objectA);
  printProjects("The projects have been reordered");
};

export const removeProject = (index) => {
  if (!projects[index]) {
    return console.log(Error("The specified index is out of range."));
  }
  let title = projects[index].title;
  projects.splice(index, 1);
  printProjects(`Project "${title}" has been removed.`);
};

export const makeProject = ({ title = "", description = "" }) => {
  projects.push({ title, description, tasks: [] });
  printProjects("A new project has been made.");
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

export const printTasks = (projectIndex, message) => {
  if (!projects[projectIndex]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!message) {
    console.log(`Tasks in ${projects[projectIndex].title}.`);
  } else {
    console.log(message);
  }
  let index = 0;
  projects[projectIndex].tasks.forEach((task) => {
    console.log(index, task);
    index++;
  });
};

export const addTask = (projectIndex, task = {}) => {
  if (!projects[projectIndex]) {
    return console.log(Error("The specified index is out of range."));
  }
  projects[projectIndex].tasks.push(taskFactory(task));
  printTasks(
    projectIndex,
    `A task has been added to project "${projects[projectIndex].title}".`
  );
};

export const updateProject = (index, { title, description }) => {
  if (!projects[index]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (title) {
    projects[index].title = title;
  }
  if (description) {
    projects[index].description = description;
  }
  printProjects(`The project at ${index} has been updated.`);
};

export const updateTask = (
  projectIndex,
  taskIndex,
  { title, description, dueDate, priority }
) => {
  if (!projects[projectIndex]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!projects[projectIndex].tasks[taskIndex]) {
    return console.log(Error("The specified task index is out of range."));
  }
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
  printTasks(projectIndex, `The task at ${taskIndex} has been updated.`);
};

export const removeTask = (projectIndex, taskIndex) => {
  if (!projects[projectIndex]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!projects[projectIndex].tasks[taskIndex]) {
    return console.log(Error("The specified task index is out of range."));
  }
  let title = projects[projectIndex].tasks[taskIndex].title;
  projects[projectIndex].tasks.splice(taskIndex, 1);
  printTasks(projectIndex, `The task "${title}" has been removed.`);
};

export const transferTask = (projectIndexA, projectIndexB, taskIndex) => {
  if (!projects[projectIndexA]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!projects[projectIndexB]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!projects[projectIndexA].tasks[taskIndex]) {
    return console.log(Error("The specified task index is out of range."));
  }
  let task = projects[projectIndexA].tasks.splice(taskIndex, 1)[0];
  projects[projectIndexB].tasks.push(taskFactory(task));
  printTasks(projectIndexB, `Task ${task.title} has been transfered.`);
};

export const moveTask = (projectIndex, positionA, positionB) => {
  if (!projects[projectIndex]) {
    return console.log(Error("The specified project index is out of range."));
  }
  if (!projects[projectIndex].tasks[positionA]) {
    return console.log(Error("The specified task index is out of range."));
  }
  if (!projects[projectIndex].tasks[positionB]) {
    return console.log(Error("The specified task index is out of range."));
  }
  let task = projects[projectIndex].tasks.splice(positionA, 1)[0];
  projects[projectIndex].tasks.splice(positionB, 0, task);
  printTasks(projectIndex, "The task list has been reordered");
};
