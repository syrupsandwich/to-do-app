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

const projects = [
  { project: emptyProject },
  { project: demoProject1 },
  { project: demoProject2 },
];

console.log(projects);
console.log(projects[0]);
console.log(projects[1]);
console.log(projects[2]);
