const projects = [
  {
    title: "Project One",
    description: "Short description of the project.",
    features: "Role • Tools • Focus",
    images: ["assets/img/preview.jpg"]
  },
  {
    title: "Project Without Images",
    description: "This project has no preview images.",
    features: "Concept • Practice",
    images: []
  }
];

const projectList = document.getElementById("projectList");
let currentProject = 0;

projects.forEach((p, i) => {
  const div = document.createElement("div");
  div.className = "project";

  div.innerHTML = `
    ${p.images.length 
      ? `<img src="${p.images[0]}" loading="lazy" alt="${p.title}">`
      : `<div class="placeholder">No Preview</div>`}
    <div class="project-content">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <button onclick="openModal(${i})">View Details</button>
    </div>
  `;

  projectList.appendChild(div);
});

/* MODAL */
function openModal(i){
  currentProject = i;
  const p = projects[i];

  document.getElementById("modalTitle").innerText = p.title;
  document.getElementById("modalDescription").innerText = p.description;
  document.getElementById("modalFeatures").innerText = p.features;

  const img = document.getElementById("modalImage");
  if(p.images.length){
    img.src = p.images[0];
    img.style.display = "block";
  }else{
    img.style.display = "none";
  }

  document.getElementById("projectModal").style.display = "flex";
}

function closeModal(){
  document.getElementById("projectModal").style.display = "none";
}

/* SCROLL REVEAL */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".skill,.project")
  .forEach(el=>observer.observe(el));
