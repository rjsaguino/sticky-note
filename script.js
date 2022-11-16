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
  let textArea = document.createElement("div");
  textArea.innerHTML = getNewNote();
  textArea.classList = "noteContainer";
  textArea.style.background = setRandomColor();
  document.querySelector("div.stickyNotes").appendChild(textArea);
};
