import { categories } from "./to-do.js";

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
          if (key === "notes") {
            return;
          }
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

        if (taskExport.notes.length > 0) {
          let noteList = document.createElement("ol");
          noteList.id = "note-list";
          noteList.start = "0";

          let notesLabel = document.createElement("p");
          notesLabel.classList.add("notes-label");
          notesLabel.textContent = "notes:";
          noteList.appendChild(notesLabel);

          taskExport.notes.forEach((note) => {
            let noteListItem = document.createElement("li");

            noteListItem.appendChild(document.createTextNode("{"));

            Object.entries(note).forEach(([key, value], index) => {
              if (index !== 0) {
                noteListItem.appendChild(document.createTextNode(", "));
              }
              let text = document.createTextNode(`${key}: `);
              noteListItem.appendChild(text);

              let span = document.createElement("span");
              span.textContent = `"${value}"`;
              noteListItem.appendChild(span);
            });

            noteListItem.appendChild(document.createTextNode("}"));

            noteList.appendChild(noteListItem);
          });

          taskDataElement.appendChild(noteList);
        }

        taskListElement.appendChild(taskDataElement);
      });
    });
  });
};

export { displayEverything };
