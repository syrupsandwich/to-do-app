//text in textarea element is not wrapped when the html is preloaded with text
//this is due to the method used to size the textarea automatically.

let loremSampleTexts = [
  "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident",
];

function setTemplateNoteTexts(...texts) {
  let templateNoteContainer = document.getElementById(
    "task-template-note-container"
  );
  let templateNoteElements = Array.from(templateNoteContainer.children);
  let notesLength = templateNoteElements.length;
  let useLoremText = true;
  if (texts.length > 0 && !texts.length >= notesLength) {
    console.warn(
      "Please provide text for each template note. Lorem text will be used instead."
    );
  } else if (texts.length >= notesLength) {
    useLoremText = false;
  }

  templateNoteElements.forEach((element) => {
    let listElements = Array.from(element.children);
    let textareaElement = listElements.find((element) => {
      return element.nodeName === "TEXTAREA";
    });
    if (useLoremText) {
      textareaElement.value = loremSampleTexts.shift();
    } else {
      textareaElement.value = texts.shift();
    }
    textareaElement.parentElement.dataset.replicatedValue =
      textareaElement.value;
  });
}

function setTemplateTitle(title) {
  if (!title) {
    title = "Lorem ipsum dolor sit amet sed ut perspiciatis";
  }

  let templateHeader = document.getElementById("task-template-header");
  templateHeader.dataset.replicatedValue = title;
  templateHeader.children[0].value = title;
}

export { setTemplateTitle, setTemplateNoteTexts };
