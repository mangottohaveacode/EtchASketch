console.log("test")

const container = document.querySelector("#container");

const gridDiv = document.createElement("div");
gridDiv.classList.add("gridDiv");
container.appendChild(gridDiv);

for(let i=0; i<256; i++){
    const div = document.createElement("div");
    div.classList.add("boxElements")
    gridDiv.appendChild(div);
}
