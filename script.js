import { detail, server } from "./server.js";
import data from "./data.js";

let dataRaw = [];

const fetchData = async () => {
  dataRaw = await server();
  if (dataRaw) {
    var div = document.getElementById("overview");
    dataRaw.forEach((item) => {
      let p = document.createElement("p");
      p.src = item.name;
      div.appendChild(p);
      
      let img = document.createElement("img");
      img.src = item.image_url;
      div.appendChild(img);


    });
  }
};
fetchData();
setTimeout(() => console.log(dataRaw), 0);
