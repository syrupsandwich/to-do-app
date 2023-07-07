import { categories, makeCategory } from "./to-do.js";

const initiateSetup = () => {
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

        projectDataImport.taskTimestamps.forEach((timestamp) => {
          let taskDataImport = JSON.parse(
            sessionStorage.getItem(`task${timestamp}`)
          );

          let project = category.projects[category.projects.length - 1];
          project.makeTask(taskDataImport);
        });
      });
    });
  } else {
    loadDemo();
  }
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
    title: "Check out this task card :v",
    timestamp: taskCount++,
    timeExtension: { minutes: 5 },
    notes: [
      {
        type: "text",
        text: "Double click the text and the note options menu will open, allowing you to add, remove, convert, or reorder these notes",
      },
      {
        type: "checkbox",
        text: "This is what a checkbox note looks like",
      },
      {
        type: "bullet",
        text: "And this is what a bullet note looks like",
      },
      {
        type: "text",
        text: "Pressing close on the note options menu will exit the edit mode and save the changes. Clicking on an input such as the date setting or the checkbox will do the same thing.",
      },
    ],
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
    timestamp: taskCount++,
    dueDate: "2023-09-03",
    dueTime: "12:00",
    notes: [
      {
        type: "text",
        text: "The following equipment should be the standard size",
      },
      {
        type: "checkbox",
        text: "A pair of dumbbells",
      },
      {
        type: "checkbox",
        text: "4 x 2.5lb weight plates",
      },
      {
        type: "checkbox",
        text: "4 x 5lb weight plates",
      },
      {
        type: "checkbox",
        text: "4 x 10lb weight plates",
      },
      {
        type: "bullet",
        text: "color preference: black",
      },
    ],
  });

  fitness.projects[0].makeTask({
    title: "Buy supplies from Home Depo",
    timestamp: taskCount++,
    dueDate: "2023-09-08",
    dueTime: "14:00",
    notes: [
      {
        type: "text",
        text: 'These are to be attached to the "tower" for a rear deltoid exercise.',
      },
      {
        type: "checkbox",
        text: "two pulleys",
      },
      {
        type: "checkbox",
        text: "1/8 paracord",
      },
      {
        type: "checkbox",
        text: "15ft of chain",
      },
      {
        type: "checkbox",
        text: "2 wirerope clamps",
      },
    ],
  });

  fitness.makeProject({
    title: "Fitness knowledge",
    description: "books im going to read next.",
    timestamp: projectCount++,
  });

  fitness.projects[1].makeTask({
    title: "Read The Physics of Resistance Exercise",
    taskStatus: "true",
    timestamp: taskCount++,
    notes: [
      {
        type: "text",
        text: "Learn how to exercise muscles in accordance to biomechanical principles",
      },
    ],
  });

  fitness.projects[1].makeTask({
    title: "Read Nutrition and Physical Degeneration",
    timestamp: taskCount++,
    notes: [
      {
        type: "text",
        text: "Learn about the effects nutrition has on your body's development.",
      },
    ],
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
    timestamp: taskCount++,
    notes: [
      {
        type: "text",
        text: "The site runs into problems when logging in with internet explorer",
      },
      {
        type: "text",
        text: "It seems to only happen after previously logging in as a guest.",
      },
    ],
  });

  finance.projects[0].makeTask({
    title: "Reply to the HR email",
    timeExtension: { days: 2 },
    timestamp: taskCount++,
    notes: [
      {
        type: "text",
        text: "A survey about your wellbeing and the working conditions.",
      },
    ],
  });

  finance.projects[0].makeTask({
    title: "Negotiate with the boss",
    timestamp: taskCount++,
    notes: [
      {
        type: "text",
        text: "Get the boss to raise your salary for being extra.",
      },
      {
        type: "bullet",
        text: "People come to me to solve all the hardest problems.",
      },
      {
        type: "bullet",
        text: "I've accomplished many feats while working here.",
      },
      {
        type: "bullet",
        text: "I take initiative finding issues and fixing them.",
      },
      {
        type: "bullet",
        text: "I get everything done before the deadline.",
      },
    ],
  });

  finance.makeProject({
    title: "Digital book",
    description: "The other source of income",
    timestamp: projectCount++,
  });

  finance.projects[1].makeTask({
    title: "Check product analytics",
    timestamp: taskCount++,
  });

  finance.projects[1].makeTask({
    title: "Write 1000 words",
    timeExtension: { days: 1 },
    timestamp: taskCount++,
    notes: [
      {
        type: "text",
        text: "This is the daily quota for the current draft.",
      },
      {
        type: "bullet",
        text: "Provide links to the research.",
      },
    ],
  });

  finance.projects[1].makeTask({
    title: "Post about the new book.",
    timeExtension: { weeks: 1 },
    timestamp: taskCount++,
    notes: [
      {
        type: "text",
        text: "Use advertizing template #16.",
      },
    ],
  });

  finance.projects[1].makeTask({
    title: "Review feedback",
    timeExtension: { days: 3 },
    timestamp: taskCount++,
    notes: [
      {
        type: "text",
        text: "Address customer issues and collect positive reviews.",
      },
      {
        type: "checkbox",
        text: "check sales page review section",
      },
      {
        type: "checkbox",
        text: "check emails for author profile",
      },
      {
        type: "checkbox",
        text: "check twitter",
      },
    ],
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
    timeExtension: { days: 1 },
    timestamp: taskCount++,
    notes: [
      {
        type: "text",
        text: "Draw 5 boxes on a page every day until 50 pages are done.",
      },
      {
        type: "checkbox",
        text: "check each box for convergences",
      },
    ],
  });

  otherInterests.projects[0].makeTask({
    title: "50% rule",
    timestamp: taskCount++,
    notes: [
      {
        type: "text",
        text: "Draw whatever you want for the same amount of time spent practicing.",
      },
    ],
  });
};

export { initiateSetup };
