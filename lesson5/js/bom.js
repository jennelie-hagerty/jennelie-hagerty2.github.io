const input = document.querySelector("#favchap");
/*Fill in the blank with the id of the input box element.
Remember to use the # symbol because it is an id that we are selecting in this case.*/

const button = document.querySelector("button");
/*  Remember that querySelector will find the first instance 
of the argument and return it. In our case, the HTML given has only one instance of button.*/

const output = document.querySelector(".listcontainer");
/*Follow the pattern and use your research skills to figure out the syntax to get a class.
Think and discuss with your team or class the implications of using class.*/

button.addEventListener("click", () => {
  // all of our code will go here
  const li = document.createElement("li");
  //Fill in the blank with the element name you want to create.

  const dbutton = document.createElement("button");
  const listText = document.createElement('span');

  let book = input.value;
  input.value = "";
  
  li.appendChild(listText);
  listText.textContent = li;
  li.appendChild(dbutton);
  dbutton.title = '❌';
  input.appendChild(li);
  
  deleteButton.addEventListener('click', function() {
    // this line of code should use the removeChild() (Links to an external site.) method
  list.removeChild(li);
    // this line of code should move the cursor back to the input box using the focus (Links to an external site.) method. 
    input.focus();
  });

});

