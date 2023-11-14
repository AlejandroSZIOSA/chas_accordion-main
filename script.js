// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  /* Toggle will add one class, the class must be defined in the Css stylesheet 
  ,If not will create an empty class  */
  element.classList.toggle("active");
}

const titleElements = document
  .querySelectorAll(".title")
  .forEach((titles) => titles.addEventListener("click", toggle));
