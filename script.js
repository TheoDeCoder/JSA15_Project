import { detail, server } from "./server.js";
import data from "./data.js";

let product = document.querySelector(".projects-grid");
data.forEach(item => {
  product.innerHTML += `<a 
  id="${item.item_id}"
  href="detail.html"
  target="_blank"
  class="project project-tile"
>
  <img
    class="project-image"
    src="${item.image_url}"
    alt="project"
  />
  <p class="project-title">
  
    ${item.name} 
    
  </p>
</a>
`
})

let a = document.querySelectorAll(".project-tile");
a.forEach(p => {
  p.addEventListener('click', updateButton);
  function updateButton() {
  localStorage.setItem("detail","")
  let id = p.id;
  localStorage.setItem("detail",id)
}
})

