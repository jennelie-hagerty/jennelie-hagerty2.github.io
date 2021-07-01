const input = document.querySelector("#favchap");
/*Fill in the blank with the id of the input box element.
Remember to use the # symbol because it is an id that we are selecting in this case.*/

const button = document.querySelector("button");
/*  Remember that querySelector will find the first instance 
of the argument and return it. In our case, the HTML given has only one instance of button.*/

const list = document.querySelector(".list");
/*Follow the pattern and use your research skills to figure out the syntax to get a class.
Think and discuss with your team or class the implications of using class.*/
button.addEventListener("click", function () {
  // all of our code will go here
  if (input.value.length != 0) {
  let newBook = document.createElement("li");
  //Fill in the blank with the element name you want to create.
  let deleteButton = document.createElement("button");
  const bookList = document.createElement("span");

  let book = input.value;
  input.value = " ";

newBook.appendChild(bookList);
bookList.textContent = book;
newBook.appendChild(deleteButton);
deleteButton.textContent = "\u274C";
list.appendChild(newBook);

deleteButton.addEventListener("click", function (e) {
  list.removeChild(newBook);
});
input.focus();
  }
});

