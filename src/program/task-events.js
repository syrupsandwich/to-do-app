import { findTask } from "./to-do.js";
import {
  cloneTemplateLiElement,
  formatDate,
} from "./task-element-generator.js";

let projectTaskContainer = document.getElementById("project-task-container");

let clickEventDelay = 300;
let clickEventStartTimestamp = 0;
let clickCount = 0;
let taskTimestampId;

function exitTaskEditMode() {
  noteOptionsContainer.classList.add("hidden");
  clickCount = 0;
  projectTaskContainer.before(noteOptionsContainer);
  let noteContainer = document.getElementById(
    `task-${taskTimestampId}-note-container`
  );
  let noteElements = Array.from(noteContainer.children);
  noteElements.forEach((element) => {
    element.children[0].toggleAttribute("disabled");
    element.children[1].toggleAttribute("disabled");
  });
  let taskHeader = document.getElementById(`task-${taskTimestampId}-header`);
  let titleElement = taskHeader.children[0];
  titleElement.disabled = true;

  taskEditingInProgress = false;
}

let selectedElements = [];

let selectedTaskCountDisplay = document.getElementById("selected-task-count");

//function updateSelectedElements() {}

let taskEditingInProgress = false;

let selectedTextareaElement;

function resetEachTextareaIndex() {
  let noteContainer = document.getElementById(
    `task-${taskTimestampId}-note-container`
  );
  let noteContainerElements = Array.from(noteContainer.children);
  noteContainerElements.forEach((listItem, index) => {
    let textarea = listItem.children[0];
    textarea.dataset.noteIndex = index;
  });
}

function cloneNoteOptionsContainer() {
  let noteOptionsTemplate = document.getElementById("note-options-template");
  let element = noteOptionsTemplate.cloneNode(true);
  element.id = "note-options-container";
  element.classList.add("hidden");
  return element;
}

let noteOptionsContainer = cloneNoteOptionsContainer();

function writeToTask() {
  let task = findTask(taskTimestampId);
  updateTaskTitle(task, task.getTimestamp());
  updateTaskNotes(task, task.getTimestamp());
}

noteOptionsContainer.addEventListener("click", (e) => {
  if (
    e.target.dataset.name === "close-note-options-container-btn" &&
    taskEditingInProgress
  ) {
    exitTaskEditMode();
    writeToTask();
  }

  let noteIndex = Number(selectedTextareaElement.dataset.noteIndex);
  let task = findTask(taskTimestampId);
  let note = task.notes[noteIndex];
  let noteContainer = document.getElementById(
    `task-${taskTimestampId}-note-container`
  );

  function injectLiElement(textareaIsTitle, element) {
    if (textareaIsTitle) {
      noteContainer.prepend(element);
    } else {
      selectedTextareaElement.parentElement.after(element);
    }
  }

  function moveTaskObjectNote(textareaIsTitle) {
    if (textareaIsTitle) {
      task.moveNote(task.notes.length - 1, { destination: 0 });
    } else {
      task.moveNote(task.notes.length - 1, { destination: noteIndex + 1 });
    }
  }

  if (e.target.dataset.name === "add-note-btn") {
    let titleTest = selectedTextareaElement.hasAttribute("data-title");

    let liClone = cloneTemplateLiElement({
      timestamp: taskTimestampId,
      editMode: true,
      checked: false,
    });

    console.log(liClone.children[1].checked);
    injectLiElement(titleTest, liClone), resetEachTextareaIndex();
    task.makeNote({});

    moveTaskObjectNote(titleTest);

    setCursorOnTextarea(liClone.children[0]);
    selectedTextareaElement = liClone.children[0];
    return;
  }

  function getNextTextarea(textarea) {
    if (textarea.parentElement.nextSibling) {
      let nextTextarea = textarea.parentElement.nextSibling.children[0];
      return nextTextarea;
    } else if (textarea.parentElement.previousSibling) {
      let lastTextarea = textarea.parentElement.previousSibling.children[0];
      return lastTextarea;
    } else {
      let timestamp = textarea.dataset.timestamp;
      let taskHeader = document.getElementById(`task-${timestamp}-header`);
      let titleTextarea = taskHeader.children[0];
      return titleTextarea;
    }
  }

  if (e.target.dataset.name === "remove-note-btn") {
    if (selectedTextareaElement.hasAttribute("data-title")) {
      selectedTextareaElement.parentElement.click();
      setCursorOnTextarea(selectedTextareaElement);
      return;
    }
    let nextTextarea = getNextTextarea(selectedTextareaElement);
    selectedTextareaElement.parentElement.remove();
    task.removeNote(noteIndex);
    resetEachTextareaIndex();
    setCursorOnTextarea(nextTextarea);
    selectedTextareaElement = nextTextarea;
  }

  function makeAlternateLiElement(type) {
    let clone = cloneTemplateLiElement({
      timestamp: selectedTextareaElement.dataset.timestamp,
      text: selectedTextareaElement.value,
      type: type,
      checked: note.checked,
      noteIndex: noteIndex,
      editMode: true,
    });

    return clone;
  }

  if (e.target.dataset.name === "paragraph-btn") {
    let alternateLiElement = makeAlternateLiElement("text");
    selectedTextareaElement.parentElement.replaceWith(alternateLiElement);
    selectedTextareaElement = alternateLiElement.children[0];
    setCursorOnTextarea(alternateLiElement.children[0]);
  }

  if (e.target.dataset.name === "checkbox-btn") {
    let alternateLiElement = makeAlternateLiElement("checkbox");
    selectedTextareaElement.parentElement.replaceWith(alternateLiElement);
    selectedTextareaElement = alternateLiElement.children[0];
    setCursorOnTextarea(alternateLiElement.children[0]);
  }

  if (e.target.dataset.name === "bullet-btn") {
    let alternateLiElement = makeAlternateLiElement("bullet");
    selectedTextareaElement.parentElement.replaceWith(alternateLiElement);
    selectedTextareaElement = alternateLiElement.children[0];
    setCursorOnTextarea(alternateLiElement.children[0]);
  }

  if (e.target.dataset.name === "move-up-btn") {
    if (selectedTextareaElement.dataset.noteIndex === "0") {
      setCursorOnTextarea(selectedTextareaElement);
      return;
    }
    let previousLi = selectedTextareaElement.parentElement.previousSibling;
    previousLi.before(selectedTextareaElement.parentElement);

    resetEachTextareaIndex();
    setCursorOnTextarea(selectedTextareaElement);
  }

  if (e.target.dataset.name === "move-down-btn") {
    let nextLi = selectedTextareaElement.parentElement.nextSibling;
    if (!nextLi) {
      setCursorOnTextarea(selectedTextareaElement);
      return;
    }
    nextLi.after(selectedTextareaElement.parentElement);
    resetEachTextareaIndex();
    setCursorOnTextarea(selectedTextareaElement);
  }
});

let selectedNoteBorderColor = "gray-400";

function showTextVisualSelection(textarea) {
  if (taskEditingInProgress) {
    let ListItem = textarea.parentElement;
    ListItem.classList.remove("border-transparent");
    ListItem.classList.add(`border-${selectedNoteBorderColor}`);
    ListItem.addEventListener(
      "focusout",
      () => {
        ListItem.classList.remove(`border-${selectedNoteBorderColor}`);
        ListItem.classList.add("border-transparent");
      },
      { once: true }
    );
  }
}

function selectInput(e) {
  //open date or time input picker manually to prevent
  //a gap caused by hiding the note options menu.
  e.preventDefault();
  e.target.click();
  e.target.focus();
  e.target.showPicker();
}

projectTaskContainer.addEventListener("click", (e) => {
  clickEventStartTimestamp = Date.now();

  if (
    (e.target.hasAttribute("data-task-selection") ||
      e.target.hasAttribute("data-date-setting-id") ||
      e.target.hasAttribute("data-time-setting-id")) &&
    taskEditingInProgress
  ) {
    exitTaskEditMode();
    writeToTask();
    selectInput(e);
  }

  if (
    (e.target.hasAttribute("data-note-index") ||
      e.target.hasAttribute("data-title")) &&
    taskEditingInProgress &&
    e.target.dataset.timestamp === taskTimestampId
  ) {
    showTextVisualSelection(e.target);
    selectedTextareaElement = e.target;
  }

  if (e.target.classList.contains("group-[.list-checkbox]:block")) {
    e.preventDefault();
  }

  if (clickCount === 2) {
    return;
  }

  setTimeout(() => {
    if (clickCount === 2) {
      return;
    }

    function updateNoteCheckStatus(liElement) {
      let noteIndex = liElement.dataset.noteIndex;
      let timestamp = liElement.dataset.timestamp;
      let checkboxInput = document.getElementById(
        `task-${timestamp}-note-${noteIndex}`
      );
      let task = findTask(timestamp);
      if (checkboxInput.checked) {
        checkboxInput.checked = false;
        task.updateNote(noteIndex, { checked: false });
      } else {
        checkboxInput.checked = true;
        task.updateNote(noteIndex, { checked: true });
      }
      return;
    }

    if (
      e.target.parentElement.nodeName === "LI" &&
      e.target.parentElement.hasAttribute("data-note-index") &&
      e.target.parentElement.classList.contains("list-checkbox")
    ) {
      updateNoteCheckStatus(e.target.parentElement);
    }

    if (e.target.hasAttribute("data-task-selection")) {
      taskTimestampId = e.target.dataset.taskSelection;
      let taskElement = document.getElementById(`task-${taskTimestampId}`);
      if (e.target.checked) {
        selectedElements.push(taskElement);
        selectedTaskCountDisplay.textContent = selectedElements.length;
      } else {
        let taskIndex = selectedElements.indexOf(taskElement);
        selectedElements.splice(taskIndex, 1);
        selectedTaskCountDisplay.textContent = selectedElements.length;
      }

      return;
    }

    if (
      e.target.hasAttribute("data-date-setting-id") &&
      !e.target.hasAttribute("data-change-event-listener")
    ) {
      taskTimestampId = e.target.dataset.dateSettingId;
      e.target.setAttribute("data-change-event-listener", "true");
      e.target.addEventListener("change", updateTaskDate);

      return;
    }

    if (
      e.target.hasAttribute("data-time-setting-id") &&
      !e.target.hasAttribute("data-change-event-listener")
    ) {
      taskTimestampId = e.target.dataset.timeSettingId;
      e.target.setAttribute("data-change-event-listener", "true");
      e.target.addEventListener("change", updateTaskTime);
      return;
    }

    clickEventStartTimestamp = 0;
  }, clickEventDelay);
});

function updateTaskDate() {
  let dateInputElement = document.getElementById(
    `task-${taskTimestampId}-due-date`
  );

  let task = findTask(dateInputElement.dataset.dateSettingId);

  if (task.getDueDate() !== dateInputElement.value) {
    dateInputElement.removeAttribute("data-change-event-listener");
    dateInputElement.removeEventListener("change", updateTaskDate);

    let dateInputLabel = dateInputElement.labels[0];

    let timeInputElement = document.getElementById(
      `task-${taskTimestampId}-due-time`
    );

    if (!dateInputElement.value) {
      task.setDueDate("none");
      task.setDueTime("00:00");
      updateTaskTime();
      timeInputElement.parentElement.classList.add("hidden");
    } else {
      task.setDueDate(dateInputElement.value);

      if (timeInputElement.parentElement.classList.contains("hidden")) {
        timeInputElement.parentElement.classList.remove("hidden");
      }
    }

    dateInputLabel.textContent = formatDate(dateInputElement.value);
    return;
  }
  return;
}

function updateTaskTime() {
  let timeInputElement = document.getElementById(
    `task-${taskTimestampId}-due-time`
  );
  let task = findTask(timeInputElement.dataset.timeSettingId);
  if (task.getDueTime() !== timeInputElement.value) {
    task.setDueTime(timeInputElement.value);

    if (timeInputElement.hasAttribute("datachange-event-listener")) {
      timeInputElement.removeAttribute("data-change-event-listener");
      timeInputElement.removeEventListener("change", updateTaskTime);
    }
    return;
  }
  return;
}

projectTaskContainer.addEventListener("dblclick", (e) => {
  if (!noteOptionsContainer.classList.contains("hidden")) {
    return;
  }

  if (Date.now() - clickEventStartTimestamp >= 300) {
    return;
  }

  clickCount = 2;

  if (
    e.target.hasAttribute("data-note-index") ||
    e.target.hasAttribute("data-title")
  ) {
    taskTimestampId = e.target.dataset.timestamp;
    let taskElement = document.getElementById(`task-${taskTimestampId}`);
    taskElement.before(noteOptionsContainer);
    noteOptionsContainer.classList.remove("hidden");
    let noteContainer = document.getElementById(
      `task-${taskTimestampId}-note-container`
    );
    let noteElements = Array.from(noteContainer.children);
    noteElements.forEach((element) => {
      element.children[0].toggleAttribute("disabled");
      element.children[1].toggleAttribute("disabled");
    });

    let taskHeader = document.getElementById(`task-${taskTimestampId}-header`);
    let titleElement = taskHeader.children[0];
    titleElement.disabled = false;

    taskEditingInProgress = true;

    selectedTextareaElement = e.target;
    showTextVisualSelection(e.target);
    setCursorOnTextarea(e.target);
    return;
  } else {
    clickCount = 0;
    return;
  }
});

function setCursorOnTextarea(textarea) {
  textarea.click();
  textarea.focus();
  textarea.setSelectionRange(textarea.value.length, textarea.value.length);
}

function updateTaskTitle(task, timestamp) {
  let updatedTitle = document.getElementById(`task-${timestamp}-header`)
    .children[0].value;
  task.setTitle(updatedTitle);
}

function updateTaskNotes(task, timestamp) {
  let noteContainer = document.getElementById(
    `task-${timestamp}-note-container`
  );
  let noteElements = Array.from(noteContainer.children);
  noteElements.forEach((listItem, index) => {
    let updatedNote = listItem.children[0].value;
    let checked = listItem.children[1].checked;

    if (listItem.classList.contains("list-none")) {
      task.updateNote(index, { type: "text", text: updatedNote, checked });
    }
    if (listItem.classList.contains("list-disc")) {
      task.updateNote(index, { type: "bullet", text: updatedNote, checked });
    }
    if (listItem.classList.contains("list-checkbox")) {
      task.updateNote(index, { type: "checkbox", text: updatedNote, checked });
    }
  });
}
