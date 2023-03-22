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
  description: "A place store all your tasks.",
  tasks: [],
};

const projects = [
  { project: emptyProject },
  { project: demoProject1 },
  { project: demoProject2 },
  { project: demoProject3 },
];

const printProjects = () => {
  console.log("Project List");
  let index = 0;
  projects.forEach((object) => {
    console.log(index, object.project);
    index++;
  });
};

printProjects();

const moveProject = (positionA, positionB) => {
  let objectA = projects.splice(positionA, 1)[0];
  projects.splice(positionB, 0, objectA);
  printProjects();
};

moveProject(3, 0);
