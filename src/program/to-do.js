import "../style/default.css";

const emptyProject = {
  title: "",
  description: "",
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

const demoProject3 = {
  title: "To-do app",
  description: "A place to store all of your tasks.",
  tasks: [],
};

const projects = [emptyProject, demoProject1, demoProject2, demoProject3];

const printProjects = () => {
  console.log("Project List");
  let index = 0;
  projects.forEach((project) => {
    console.log(index, project);
    index++;
  });
};

printProjects();

const moveProject = (positionA, positionB) => {
  let objectA = projects.splice(positionA, 1)[0];
  projects.splice(positionB, 0, objectA);
  printProjects();
};

projects[0].title = "Other Tasks";
moveProject(3, 0);

const removeProject = (index) => {
  projects.splice(index, 1);
  printProjects();
};

removeProject(1);

const makeProject = ({ title = "", description = "" }) => {
  projects.push({ title, description, tasks: [] });
  printProjects();
};

const taskFactory = ({
  title = "",
  description = "",
  dueDate = "",
  priority,
}) => {
  let taskStatus = false;
  const checkCompletionStatus = () => {
    if (taskStatus) {
      console.log(`Task "${title}" has been completed. :D`);
    }
    if (!taskStatus) {
      console.log(`Task "${title}" hast not been completed. :/`);
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

const addTask = (projectIndex, task = {}) => {
  if (projectIndex > projects.length - 1 || projectIndex < 0) {
    return console.log(Error("No project was specified."));
  }
  projects[projectIndex].tasks.push(taskFactory(task));
  printProjects();
};

addTask(0);

addTask(0, {
  title: "climb the stairs",
  description: "Get those glutes working!",
});

projects[0].tasks[1].checkCompletionStatus();
projects[0].tasks[1].changeCompletionStatus();
projects[0].tasks[1].checkCompletionStatus();

const updateProject = (index, { title, description }) => {
  if (title) {
    projects[index].title = title;
  }
  if (description) {
    projects[index].description = description;
  }
  printProjects();
};

const printTasks = (projectIndex) => {
  let index = 0;
  console.log(`Tasks in "${projects[projectIndex].title}"`);
  projects[projectIndex].tasks.forEach((task) => {
    console.log(index, task);
  });
};

printTasks(0);
