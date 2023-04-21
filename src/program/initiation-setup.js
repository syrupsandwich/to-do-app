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
    title: "Look around",
    description: "Get to know the app.",
    timestamp: taskCount++,
    timeExtension: { minutes: 5 },
    notes: [
      {
        type: "assignment",
        text: "press some buttons",
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
    description: "",
    timestamp: taskCount++,
    notes: [
      {
        type: "assignment",
        text: "A pair of dumbbells",
      },
      {
        type: "assignment",
        text: "4 x 2.5lb weight plates",
      },
      {
        type: "assignment",
        text: "4 x 5lb weight plates",
      },
      {
        type: "assignment",
        text: "4 x 10lb weight plates",
      },
    ],
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
    notes: [
      {
        type: "informative",
        text: "It seems to only happen after previously logging in as a guest.",
      },
    ],
  });

  finance.projects[0].makeTask({
    title: "Reply to the HR email",
    description: "A survey about your wellbeing and working conditions.",
    timeExtension: { days: 2 },
    timestamp: taskCount++,
  });

  finance.projects[0].makeTask({
    title: "Negotiate with the boss",
    description: "Get the boss to raise your salary for being extra.",
    timestamp: taskCount++,
    notes: [
      {
        type: "informative",
        text: "People come to me to solve all the hardest problems.",
      },
      {
        type: "informative",
        text: "I've accomplished many feats while working here.",
      },
      {
        type: "informative",
        text: "I take initiative finding issues and fixing them.",
      },
      {
        type: "informative",
        text: "I get everything done sooner than the deadline.",
      },
    ],
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
    notes: [
      {
        type: "informative",
        text: "Examine the research again if you need to.",
      },
    ],
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
    notes: [
      {
        type: "assignment",
        text: "check sales page review section",
      },
      {
        type: "assignment",
        text: "check gmail for author profile",
      },
      {
        type: "assignment",
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
    description: "Draw 5 boxes on a page every day until 50 pages are done.",
    timeExtension: { days: 1 },
    timestamp: taskCount++,
    notes: [
      {
        type: "assignment",
        text: "check each box for convergences",
      },
    ],
  });

  otherInterests.projects[0].makeTask({
    title: "50% rule",
    description:
      "Draw whatever you want for the same amount of time spent practicing.",
    timestamp: taskCount++,
  });
};

export { initiateSetup };
