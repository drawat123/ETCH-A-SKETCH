const container = document.getElementById("container");
const eraser = document.getElementById("eraser");
const color_element=document.getElementById("color");
const noofgrid=document.getElementById("noofgrid");
const createnoofgrid=document.getElementById("createnoofgrid");
const reset=document.getElementById("reset");
let color_value = document.getElementById("color").value;
noofgrid.defaultValue = 12;
let gridNo = noofgrid.value;

function setGrid(noOfGrid) {
    let noOfColumns = "";
    for (let i = 0; i < noOfGrid; i++) {
        for (let j = 0; j < noOfGrid; j++) {
            const grid_container = document.createElement('div');
            grid_container.classList.add('grid-item');
            container.appendChild(grid_container);
        }
        noOfColumns += " auto";
    }
    container.style.gridTemplateColumns = noOfColumns;
}

function color(e){
    e.target.style.backgroundColor = color_value;
}

function setEraser(e){
    console.log(e.target.id);
    if(e.target.id == "eraser"){
        color_value = "white";
        return;  
    }
    color_value = document.getElementById("color").value;
}

function createNoOfGrid(e){
    gridNo = noofgrid.value;
    container.innerHTML='';
    setGrid(gridNo);
}

function resetGrid(e){
    container.innerHTML='';
    setGrid(gridNo);
}

setGrid(gridNo);
container.addEventListener("mouseover", color);
color_element.addEventListener("change", setEraser);
eraser.addEventListener("click",setEraser);
createnoofgrid.addEventListener("click",createNoOfGrid);
reset.addEventListener("click",resetGrid);