// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  const descriptionElement = document.querySelector(".description");
  console.log(descriptionElement);

  //descriptionElement.classList.add("active");

  /* descriptionElement.setAttribute("display", "hidden"); */
  descriptionElement.classList.toggle("active");
  /* const element = e.target; */
  /* element.classList.toggle("active"); */
  console.log("toggle");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");

section1Element.addEventListener("click", toggle);
