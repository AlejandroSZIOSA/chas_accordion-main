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

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();
  renderData(data);
}

function renderData(data) {
  console.log(data);

  data.forEach((e) => {});
}

function createDivSection() {}
getData();
