// A function that adds and remove the class "active" on the section you click on.

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();
  renderData(data);
}

getData();

function renderData(data) {
  //Iterate on the fetched Data
  data.forEach((item) => {
    //creating section title
    const titleEl = document.createElement("div");
    titleEl.setAttribute("class", "section");
    titleEl.innerHTML = `<p>${item.title}</p>`;

    //creating section description
    const bodyEl = document.createElement("div");
    bodyEl.setAttribute("class", "description");
    bodyEl.innerHTML = `<p>${item.body}</p>`;

    //Adding section title to the html :)
    const mainSectionEl = document.querySelector(".accordion");
    mainSectionEl.appendChild(titleEl);
    mainSectionEl.appendChild(bodyEl);

    //Calling EventListener and pass a function as param
    titleEl.addEventListener("click", toggle);
  });
}

function toggle(e) {
  const element = e.currentTarget; //Fix problem :)
  /* Toggle will add one class, the class must be defined in the Css stylesheet 
  ,If not will create an empty class  */
  element.classList.toggle("active");
}
