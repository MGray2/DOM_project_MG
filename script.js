var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  // implement creates an element "li"
  var li = document.createElement("li");
  // implement makes text from input field the li text
  li.appendChild(document.createTextNode(input.value));
  // implement adds li to ul
  ul.appendChild(li);
  // implement Reset text input field
  input.value = "";

  //START STRIKETHROUGH
  // because it's in the function, it only adds it for new items
  function crossOut() {
    this.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);

  //END STRIKETHROUGH
  function deleteListItem() {
    this.parentElement.remove();
  }
  // START ADD DELETE BUTTON
  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("X"));
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", deleteListItem);
  //Use the implemented function from below here

  // END ADD DELETE BUTTON

  //ADD CLASS DELETE (DISPLAY: NONE)

  //END ADD CLASS DELETE
}

function addListAfterClick() {
  //makes sure that an empty input field doesn't create a li
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
    //this now looks to see if you hit "enter"/"return"
    //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
  }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
