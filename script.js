const getNewNote = () => {
  let textInput = document.getElementById("textArea");
  let text = "";
  let inputValue = textInput.value.split("\n");
  for (line of inputValue) {
    text += line + "<br>";
  }
  textInput.value = null;
  return text;
};

const setRandomColor = () => {
  const h = Math.random() * 360;
  return `hsl(${h}deg,100%,70%)`;
};

const addNote = () => {
  let note = document.createElement("div");
  note.innerHTML = getNewNote();
  note.className = "note-container";
  note.style.background = setRandomColor();

  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.innerHTML = "x";
  removeButton.title = "Remove";
  removeButton.addEventListener("click", () => {
    document.getElementById("sticky-notes").removeChild(note);
  });

  note.append(removeButton);
  document.getElementById("sticky-notes").append(note);
};
