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
    bodyEl.innerHTML = `<p>${el.body}</p>`;

    //Adding section title to the html :)
    const mainSectionEl = document.querySelector(".accordion");
    mainSectionEl.appendChild(titleEl);
    mainSectionEl.appendChild(bodyEl);

    titleEl.addEventListener("click", toggle);
  });
}
function toggle(e) {
  const element = e.currentTarget; //Fix problem :)
  /* Toggle will add one class, the class must be defined in the Css stylesheet 
  ,If not will create an empty class  */
  element.classList.toggle("active");
  console.log(element);
}
getData();
/* const titleElements = document
  .querySelectorAll(".title")
  .forEach((titles) => titles.addEventListener("click", toggle)); */
