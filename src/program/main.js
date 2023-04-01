import "../style/default.css";
import { makeCategory, printCategories, transferProject } from "./to-do.js";

const demo1 = makeCategory("Demo");

demo1.makeProject({
  title: "To-do app",
  description: "A place to store all of your tasks",
  tasks: [],
});

demo1.projects[0].makeTask({
  title: "Look around",
  description: "Get to know the app.",
});

demo1.makeProject({
  title: "Exercise solutions",
  description: "Figure out an optimal setup for each major muscle group.",
  tasks: [],
});

demo1.projects[1].makeTask({
  title: "Buy pulleys",
  description: "For exercises that require an upward dirction of resistance.",
});

demo1.projects[1].makeTask({
  title: "Get weight plates",
  description: "A minimalistic set that allows increments of 5lb.",
});

demo1.projects[1].makeTask({
  title: "Find supplies",
  description: "Things like rope, webbing, caribiners, chains, foam... ",
});

demo1.projects[1].makeTask({
  title: "Make some equipment",
  description: "Ask mom to sew together my inventions",
});

demo1.makeProject({
  title: "250 box challenge",
  description: '"...draw a box - then do it again another 249 times."',
  tasks: [],
});

demo1.projects[2].makeTask({
  title: "Find drawing supplies",
  description: "a large stack of priter paper and a .5 pen.",
});

demo1.projects[2].makeTask({
  title: "draw 5 boxes on a page",
  description: "5 leaves enough room to check the convergences",
});

demo1.projects[2].makeTask({
  title: "50% rule",
  description:
    "Draw whatever you want for the same amount of time spent practicing.",
});

demo1.printProjects();

const work = makeCategory("Work");

work.makeProject({
  title: "Block World",
  description: "an original sandbox game where everything is blocky",
});

printCategories();

transferProject(0, 1, 0);
printCategories();

demo1.projects[0].printTasks();
demo1.printProjects();
demo1.transferTask(0, 1, 0);

demo1.projects[1].title = "Institutionalized";
demo1.printProjects();

demo1.projects[0].tasks[0].title = "chill";
demo1.projects[0].tasks[0].description = "space out to some bops";
demo1.projects[0].tasks[0].priority = "important";
demo1.projects[0].printTasks();

demo1.projects[0].removeTask(0);
