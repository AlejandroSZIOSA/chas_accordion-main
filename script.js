// A function that adds and remove the class "active" on the section you click on.

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();
  renderData(data);
}

function renderData(data) {
  console.log(data);
  const header = document.querySelector("h1");
  data.forEach((el) => {
    //creating section title
    const titleEl = document.createElement("div");
    titleEl.setAttribute("class", "section");
    titleEl.innerHTML = `<p>${el.title}</p>`;

    //creating section description
    const bodyEl = document.createElement("div");
    bodyEl.setAttribute("class", "description");
    bodyEl.innerHTML = "Description";

    //Adding section title to the html :)
    const mainSectionEl = document.querySelector(".accordion");
    mainSectionEl.appendChild(titleEl);
  });
}

function toggle(e) {
  const element = e.target;
  /* Toggle will add one class, the class must be defined in the Css stylesheet 
  ,If not will create an empty class  */
  element.classList.toggle("active");
}

getData();
/* const titleElements = document
  .querySelectorAll(".title")
  .forEach((titles) => titles.addEventListener("click", toggle)); */
