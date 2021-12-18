const creatingGrid = (gridSpace = 16) => {
    if(gridSpace > 100){
        gridSpace = 16;
        alert("100 is as high as it goes!!!")
    }
    let theNumber = gridSpace*gridSpace;
    for(let i=0; i<theNumber; i++){
        const div = document.createElement("div");
        div.classList.add("boxElements");
        div.setAttribute("id", i);
        gridDiv.appendChild(div);
    }
    if(gridSpace){
        document.getElementById("griddiv").style.gridTemplateColumns = `repeat(${gridSpace}, 30px [col-start])`;
    }
    //grid-template-columns: repeat(16, 30px [col-start]);
}

const myRandomColour = () => {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

const deleteInitalGrid = () => {
    const parent = document.getElementById("griddiv");
    while(parent.firstChild){
        parent.firstChild.remove();
    }
}

const container = document.querySelector("#container");

const gridDiv = document.createElement("div");
gridDiv.classList.add("gridDiv");
gridDiv.setAttribute("id", "griddiv")
container.appendChild(gridDiv);

const beginnerButton = document.createElement("button");
beginnerButton.setAttribute("id", "reverse");
container.appendChild(beginnerButton);

creatingGrid();

const gridNumbers = () => {
    let gridSpace = parseInt(prompt("Please enter how many grid spaces do you want, we cant go over 100."));
    deleteInitalGrid();
    creatingGrid(gridSpace);
}

const wrapper = document.getElementById('griddiv');
wrapper.addEventListener('mouseover', (event) => {
    const isBoxElement = event.target.classList.contains("boxElements");
    if (isBoxElement) {
        event.target.style.backgroundColor= myRandomColour();
        console.log("yis")
    } 
})

const whiteAll = document.getElementById('reverse');
whiteAll.addEventListener('click', (event) => {
    let elements = document.getElementsByClassName('boxElements'); // get all elements
	for(let i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
	}
    gridNumbers();
})


