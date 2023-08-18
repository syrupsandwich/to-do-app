import { format, parseISO } from "date-fns";
let taskTemplateElement = document.getElementById("task-template");

function makeTaskElement(taskObject) {
  let templateClone = cloneTemplateContainer({
    timestamp: taskObject.getTimestamp(),
  });

  let headerClone = cloneTemplateHeader({
    timestamp: taskObject.getTimestamp(),
    title: taskObject.getTitle(),
  });
  templateClone.append(headerClone);

  let noteContainerClone = cloneTemplateNoteContainer({
    timestamp: taskObject.getTimestamp(),
  });
  templateClone.append(noteContainerClone);

  taskObject.notes.forEach((note, index) => {
    let listItemClone = cloneTemplateLiElement({
      timestamp: taskObject.getTimestamp(),
      text: note.text,
      type: note.type,
      checked: note.checked,
      noteIndex: index,
    });
    noteContainerClone.append(listItemClone);
  });

  let controlsContainerClone = cloneTemplateControlsContainer({
    timestamp: taskObject.getTimestamp(),
    dueDate: taskObject.getDueDate(),
    dueTime: taskObject.getDueTime(),
  });
  templateClone.append(controlsContainerClone);

  templateClone.classList.add("sortable");

  return templateClone;
}

function cloneTemplateNoteContainer({ timestamp }) {
  let element = taskTemplateElement.children[1].cloneNode(false);
  element.id = `task-${timestamp}-note-container`;
  return element;
}

function cloneTemplateLiElement({
  timestamp,
  text = "",
  type = "text",
  checked = false,
  noteIndex = 0,
  editMode = false,
}) {
  let textTypeElement = taskTemplateElement.children[1].children[0];
  let bulletTypeElement = taskTemplateElement.children[1].children[1];
  let checkboxTypeElement = taskTemplateElement.children[1].children[2];
  let element;
  if (type === "text") {
    element = textTypeElement.cloneNode(true);
  }
  if (type === "bullet") {
    element = bulletTypeElement.cloneNode(true);
  }
  if (type === "checkbox") {
    element = checkboxTypeElement.cloneNode(true);
  }
  element.dataset.replicatedValue = text;
  element.setAttribute("data-timestamp", timestamp);
  element.setAttribute("data-note-index", noteIndex);
  let liTextareaElement = element.children[0];
  let liInputElement = element.children[1];
  if (checked) {
    liInputElement.checked = true;
  } else {
    liInputElement.checked = false;
  }
  if (editMode) {
    liTextareaElement.removeAttribute("disabled");
    liInputElement.disabled = true;
  }
  liTextareaElement.value = text;
  liTextareaElement.dataset.timestamp = timestamp;
  liTextareaElement.dataset.noteIndex = noteIndex;

  liTextareaElement.id = `task-${timestamp}-textarea-${noteIndex}`;
  liInputElement.id = `task-${timestamp}-note-${noteIndex}`;
  return element;
}

function cloneTemplateHeader({ timestamp, title }) {
  let element = taskTemplateElement.children[0].cloneNode(true);
  element.id = `task-${timestamp}-header`;
  element.dataset.replicatedValue = title;
  element.children[0].value = title;
  element.children[0].id = `task-${timestamp}-title`;
  element.children[0].dataset.timestamp = timestamp;
  return element;
}

function cloneTemplateContainer({ timestamp }) {
  let element = taskTemplateElement.cloneNode(false);
  element.dataset.timestamp = timestamp;
  element.id = `task-${timestamp}`;
  return element;
}

function getDateLabelText(date) {
  if (date === "none" || !date) {
    return "Click to set date and time.";
  } else {
    return `Due on ${format(parseISO(date), "EEEE, MMM d")}`;
  }
}

function cloneTemplateControlsContainer({ timestamp, dueDate, dueTime }) {
  let element = taskTemplateElement.children[2].cloneNode(true);
  let dateInput = element.children[0].children[0];
  dateInput.parentElement.id = `task-${timestamp}-date-setting-element`;
  dateInput.id = `task-${timestamp}-due-date`;
  dateInput.dataset.dateSettingId = timestamp;
  let dateInputLabel = element.children[0].children[1];
  dateInputLabel.htmlFor = `task-${timestamp}-due-date`;
  dateInputLabel.textContent = getDateLabelText(dueDate);
  dateInput.value = dueDate;

  let timeInput = element.children[1].children[0];
  timeInput.parentElement.id = `task-${timestamp}-time-setting-element`;
  timeInput.dataset.timeSettingId = timestamp;
  timeInput.id = `task-${timestamp}-due-time`;
  let timeInputLabel = element.children[1].children[1];
  timeInputLabel.htmlFor = `task-${timestamp}-due-time`;

  if (dueDate === "none") {
    timeInput.value = "00:00";
    timeInput.parentElement.classList.add("hidden");
  } else {
    timeInput.value = dueTime;
  }

  let taskSelector = element.children[2].children[0];
  taskSelector.id = `task-${timestamp}-selector`;
  taskSelector.dataset.taskSelection = timestamp;

  let taskGripper = element.children[2].children[1];
  taskGripper.id = `task-${timestamp}-grip`;
  taskGripper.setAttribute("data-timestamp", timestamp);

  return element;
}

function appendTaskElements(container, category) {
  category.tasks.forEach((task) => {
    container.append(makeTaskElement(task));
  });
}

export {
  getDateLabelText,
  cloneTemplateLiElement,
  appendTaskElements,
  makeTaskElement,
};
