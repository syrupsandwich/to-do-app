import { findTask } from "./to-do.js";
import {
  makeTaskElement,
  cloneTemplateLiElement,
  getDateLabelText,
} from "./task-element-generator.js";
import { currentProject } from "./main.js";

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

let taskOptionsContainer = document.getElementById("task-options-container");

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

projectTaskContainer.addEventListener("dragstart", (e) => {
  exitTaskEditMode();
  writeToTask();
  hideTaskOptionsContainer();

  taskTimestampId = e.target.dataset.timestamp;

  selectedElements.forEach((element) => {
    let allTaskElements = Array.from(projectTaskContainer.children);
    let origin = allTaskElements.indexOf(element);
    currentProject.moveTask(origin, {
      destination: currentProject.tasks.length - 1,
    });
  });

  let dragImage = document.getElementById(`selected-task-count`).parentElement;

  let xOffset = dragImage.getBoundingClientRect().width;
  let yOffset = dragImage.getBoundingClientRect().height;
  e.dataTransfer.setDragImage(dragImage, xOffset, yOffset);
});

const insertionPositionIndicator = document.createElement("div");
insertionPositionIndicator.classList.add(
  "w-full",
  "border-4",
  "border-red-700",
  "mb-1",
  "-mt-1",
  "rounded"
);

projectTaskContainer.addEventListener("dragover", (e) => {
  selectedElements.forEach((element) => {
    element.classList.add("hidden");
  });

  e.preventDefault();
  let nextElement = getNextElement(projectTaskContainer, e.clientY);

  if (nextElement === undefined) {
    projectTaskContainer.appendChild(insertionPositionIndicator);
  } else {
    projectTaskContainer.insertBefore(insertionPositionIndicator, nextElement);
  }
});

projectTaskContainer.addEventListener("dragend", () => {
  showTaskOptionsContainer();
  selectedElements.forEach(() => {
    let allElements = Array.from(projectTaskContainer.children).filter(
      (element) => !element.classList.contains("hidden")
    );
    let insertionPositionIndicatorIndex = allElements.indexOf(
      insertionPositionIndicator
    );
    currentProject.moveTask(currentProject.tasks.length - 1, {
      destination: insertionPositionIndicatorIndex,
    });
  });

  let hiddenTaskElements = Array.from(projectTaskContainer.children).filter(
    (element) => element.classList.contains("hidden")
  );

  hiddenTaskElements.forEach((element) => {
    element.classList.remove("hidden");
    insertionPositionIndicator.before(element);
  });

  insertionPositionIndicator.remove();
});

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

  if (e.target.hasAttribute("data-date-setting-id")) {
    taskTimestampId = e.target.dataset.dateSettingId;
    let taskElementSelector = document.getElementById(
      `task-${taskTimestampId}-selector`
    );

    if (taskElementSelector.checked && selectedElements.length > 1) {
      e.target.addEventListener("change", updateSelectedTaskDates);
      e.target.addEventListener(
        "focusout",
        () => {
          e.target.removeEventListener("change", updateSelectedTaskDates);
        },
        { once: true }
      );
      return;
    }
    e.target.addEventListener(
      "focusout",
      () => {
        e.target.removeEventListener("change", updateTaskDate);
      },
      { once: true }
    );
    e.target.addEventListener("change", updateTaskDate);

    return;
  }

  if (e.target.hasAttribute("data-time-setting-id")) {
    taskTimestampId = e.target.dataset.timeSettingId;

    let taskElementSelector = document.getElementById(
      `task-${taskTimestampId}-selector`
    );

    if (taskElementSelector.checked && selectedElements.length > 1) {
      e.target.addEventListener("change", updateSelectedTaskTimes);
      e.target.addEventListener(
        "focusout",
        () => {
          e.target.removeEventListener("change", updateSelectedTaskTimes);
        },
        { once: true }
      );
      return;
    } else {
      e.target.addEventListener("change", updateTaskTime);
      e.target.addEventListener(
        "focusout",
        () => {
          e.target.removeEventListener("change", updateTaskTime);
        },
        { once: true }
      );
      return;
    }
  }

  if (e.target.hasAttribute("data-task-selection")) {
    taskTimestampId = e.target.dataset.taskSelection;
    let taskElement = document.getElementById(`task-${taskTimestampId}`);
    let taskGrip = document.getElementById(`task-${taskTimestampId}-grip`);
    if (e.target.checked) {
      selectedElements.push(taskElement);
      selectedTaskCountDisplay.textContent = selectedElements.length;

      taskGrip.draggable = true;
    } else {
      let taskIndex = selectedElements.indexOf(taskElement);
      selectedElements.splice(taskIndex, 1);
      selectedTaskCountDisplay.textContent = selectedElements.length;

      taskGrip.draggable = false;
    }
    if (selectedElements.length > 0) {
      showTaskOptionsContainer();
    } else {
      hideTaskOptionsContainer();
    }

    return;
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

    clickEventStartTimestamp = 0;
  }, clickEventDelay);
});

function updateSelectedTaskDates() {
  let initialElement = document.getElementById(`task-${taskTimestampId}`);

  let date = document.getElementById(`task-${taskTimestampId}-due-date`).value;

  selectedElements.forEach((taskElement) => {
    taskTimestampId = taskElement.dataset.timestamp;
    let dateInputElement = document.getElementById(
      `task-${taskTimestampId}-due-date`
    );

    dateInputElement.value = date;
    updateTaskDate();
  });

  initialElement.removeEventListener("change", updateSelectedTaskDates);
}

function updateSelectedTaskTimes() {
  let initialElement = document.getElementById(`task-${taskTimestampId}`);

  let time = document.getElementById(`task-${taskTimestampId}-due-time`).value;

  selectedElements.forEach((taskElement) => {
    taskTimestampId = taskElement.dataset.timestamp;
    let timeInputElement = document.getElementById(
      `task-${taskTimestampId}-due-time`
    );

    timeInputElement.value = time;
    updateTaskTime();
  });

  initialElement.removeEventListener("change", updateSelectedTaskTimes);
}

function updateTaskDate() {
  let dateInputElement = document.getElementById(
    `task-${taskTimestampId}-due-date`
  );

  let task = findTask(dateInputElement.dataset.dateSettingId);

  let timeInputElement = document.getElementById(
    `task-${taskTimestampId}-due-time`
  );

  dateInputElement.removeEventListener("change", updateTaskDate);

  if (task.getDueDate() === dateInputElement.value) {
    return;
  }

  if (!dateInputElement.value) {
    task.setDueDate("none");
    task.setDueTime("00:00");
    timeInputElement.value = "00:00";
    timeInputElement.parentElement.classList.add("hidden");
    dateInputElement.labels[0].textContent = getDateLabelText();
    return;
  } else if (timeInputElement.parentElement.classList.contains("hidden")) {
    timeInputElement.parentElement.classList.remove("hidden");
  }

  task.setDueDate(dateInputElement.value);
  dateInputElement.labels[0].textContent = getDateLabelText(
    dateInputElement.value
  );

  return;
}

function updateTaskTime() {
  let timeInputElement = document.getElementById(
    `task-${taskTimestampId}-due-time`
  );
  let task = findTask(timeInputElement.dataset.timeSettingId);

  if (!timeInputElement.value) {
    timeInputElement.value = "00:00";
  }

  if (task.getDueTime() !== timeInputElement.value) {
    task.setDueTime(timeInputElement.value);
  }

  timeInputElement.removeEventListener("change", updateTaskTime);

  return;
}

projectTaskContainer.addEventListener("touchstart", (e) => {
  if (
    !(
      e.target.hasAttribute("data-note-index") ||
      e.target.hasAttribute("data-title")
    )
  ) {
    return;
  }

  //e.target.click();
  let startTime = Date.now();

  let intervalId;

  document.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    },
    { once: true }
  );

  e.target.addEventListener(
    "touchend",
    () => {
      clearInterval(intervalId);
    },
    { once: true }
  );

  e.target.addEventListener(
    "touchmove",
    () => {
      clearInterval(intervalId);
    },
    { once: true, passive: true }
  );

  function startInterval(textarea, send) {
    intervalId = setInterval(() => {
      //console.log("shots fired by interval");
      let currentTime = Date.now();

      if (currentTime - startTime > 500) {
        selectAllBtn.checked = false;
        send(textarea);
        clearInterval(intervalId);
      }
    }, 20);
  }

  function editOtherTask(textarea) {
    exitTaskEditMode();
    writeToTask();
    clickCount = 2;
    enterTaskEditMode(textarea);
  }

  function editTask(textarea) {
    clickCount = 2;
    enterTaskEditMode(textarea);
  }

  if (taskEditingInProgress && e.target.dataset.timestamp !== taskTimestampId) {
    startInterval(e.target, editOtherTask);
  } else if (!taskEditingInProgress) {
    startInterval(e.target, editTask);
  }
});

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
    enterTaskEditMode(e.target);
    return;
  } else {
    clickCount = 0;
    return;
  }
});

function enterTaskEditMode(textarea) {
  deselectAllTasks();
  hideTaskOptionsContainer();

  taskTimestampId = textarea.dataset.timestamp;
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

  selectedTextareaElement = textarea;
  showTextVisualSelection(textarea);
  setCursorOnTextarea(textarea);
}

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

let selectAllBtn = document.getElementById("select-all");

function showTaskOptionsContainer() {
  let taskOptionBtns = Array.from(taskOptionsContainer.children);

  taskOptionBtns.forEach((button) => {
    button.classList.remove("opacity-0");
    button.classList.remove("max-h-0");
    button.classList.add("max-h-10");
    button.classList.add("border-t-4");
  });
}

function hideTaskOptionsContainer() {
  let taskOptionBtns = Array.from(taskOptionsContainer.children);

  taskOptionBtns.forEach((button) => {
    button.classList.add("opacity-0");
    button.classList.add("max-h-0");
    button.classList.remove("max-h-10");
    button.classList.remove("border-t-4");
  });
}

function selectAllTasks() {
  let allTaskElements = Array.from(projectTaskContainer.children);

  allTaskElements.forEach((element) => {
    let timestamp = element.dataset.timestamp;
    let taskSelector = document.getElementById(`task-${timestamp}-selector`);

    taskSelector.checked = true;
    selectedElements.push(element);
  });
}

function deselectAllTasks() {
  selectAllBtn.checked = false;
  let allTaskElements = Array.from(projectTaskContainer.children);

  allTaskElements.forEach((element) => {
    let timestamp = element.dataset.timestamp;
    let taskSelector = document.getElementById(`task-${timestamp}-selector`);

    taskSelector.checked = false;
  });
}

selectAllBtn.addEventListener("click", () => {
  if (taskEditingInProgress) {
    exitTaskEditMode();
  }

  selectedElements = [];

  if (selectAllBtn.checked) {
    selectAllTasks();
    showTaskOptionsContainer();
  } else {
    deselectAllTasks();
    hideTaskOptionsContainer();
  }

  selectedTaskCountDisplay.textContent = selectedElements.length;
});

//let projectOptionsContainer = document.getElementById(
//  "project-options-container"
//);

//projectOptionsContainer.addEventListener("click", (e) => {
//    if(e.target.id === 'delete-project-btn'){}
//});

taskOptionsContainer.addEventListener("click", (e) => {
  if (e.target.id === "remove-task-btn") {
    selectedElements.forEach((element) => {
      let timestamp = element.dataset.timestamp;
      let task = findTask(timestamp);
      let taskIndex = currentProject.tasks.indexOf(task);
      currentProject.removeTask(taskIndex);
      element.remove();
    });

    selectedElements = [];
    hideTaskOptionsContainer();
    selectedTaskCountDisplay.textContent = selectedElements.length;
    selectAllBtn.checked = false;
  }

  //    if(e.target.id === 'transfer-task-btn'){}
  //    if(e.target.id === 'pin-task-btn'){}
});

let makeTaskBtn = document.getElementById("make-task-btn");

makeTaskBtn.addEventListener("click", () => {
  currentProject.makeTask({
    title: "Task title",
  });
  let taskIndex = currentProject.tasks.length - 1;
  let task = currentProject.tasks[taskIndex];
  let taskElement = makeTaskElement(task);
  projectTaskContainer.append(taskElement);
});

const categoriesContainer = document.getElementById("categories-container");
const categoryDraggables = Array.from(categoriesContainer.children);

categoryDraggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
    draggable.classList.add("opacity-50", "bg-blue-400");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
    draggable.classList.remove("opacity-50", "bg-blue-400");
  });
});

categoriesContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
  let nextElement = getNextElement(categoriesContainer, e.clientY);
  const dragElement = document.querySelector(".dragging");

  if (nextElement === undefined) {
    categoriesContainer.appendChild(dragElement);
  } else {
    categoriesContainer.insertBefore(dragElement, nextElement);
  }
});

const getNextElement = (container, y) => {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = box.top - y + box.height / 2;
      if (offset > 0 && offset < closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.POSITIVE_INFINITY }
  ).element;
};
