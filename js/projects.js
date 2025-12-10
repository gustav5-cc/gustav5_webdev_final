// js/projects.js

const projects = [
  {
    title: "San Francisco Police Data Analysis Notebook",
    description:
      "Analyzed traffic stop data to visualize patterns using Python and Pandas. Created heatmaps and scatter plots to identify trends and any bias that one might observe between different demographics.",
    link: "https://github.com/gustav5-cc/Colab-Notebook-Driving-Information",
    linkText: "View Source",
    image: "",
  },
  {
    title: "2d Sprite Normal Mapper",
    description:
      "Lightweight static site to turn 2d sprites into a normal map for enhanced lighting. Has options to invert colors as needed for your game dev environment",
    link: "https://github.com/gustav5-cc/Sprilite",
    linkText: "View Source",
    image: "assets/sprilite.png",
  },
  {
    title: "Airline Android App",
    description:
      "Android app built using android studio and maven for build automation. Allows user to add and track flight routes and supports persistent memory using android internal storage.",
    link: "google.com",
    linkText: "View Source",
    image: "assets/rename.png",
  },
];

const projectContainer = document.getElementById("project-container");

function renderProjectCards() {
  let projectHTML = "";

  projects.forEach((project) => {
    const imageMarkup = project.image
      ? `<div class="card-img-container"><img src="${project.image}" alt="${project.title}" class="card-img"></div>`
      : "";

    projectHTML += `
      <div class="project-card">
        ${imageMarkup}
        <div class="card-content">
          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${project.description}</p>
          <a href="${project.link}" class="card-link" target="_blank">${project.linkText} &rarr;</a>
        </div>
      </div>
    `;
  });

  projectContainer.innerHTML = projectHTML;
}

renderProjectCards();
