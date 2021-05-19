const grid = document.getElementById('container');
const clearButton = document.getElementById('clear');
const gridButton = document.getElementById('gButton');

let gridsize = 16;
let length = convertPXToVH(grid.clientHeight / gridsize);

function convertPXToVH(px) {
    return px * (100 / document.documentElement.clientHeight);
}

function createGrid(gridsize){
    for (let i = 0; i < gridsize ** 2; i++) {
        const gridSqr = document.createElement('div');
        gridSqr.className = 'grid-sqr';
        gridSqr.id = `${i}`;
        gridSqr.setAttribute('style', `height: ${length}vh; width: ${length}vh;`);
        grid.appendChild(gridSqr);
    }
}

function paintOnEnter(event) {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = randomColor;
    event.stopPropagation()
}

function clear(){
    for (let i = 0; i < gridsize ** 2; i++){
        const gridSqr = document.getElementById(`${i}`);
        gridSqr.style.backgroundColor = 'white';
    }
}

function changeGridSize(event){
    gridsize = Number(document.querySelector('input[type="number"]').value);
    length = convertPXToVH(grid.clientHeight / gridsize);
    grid.setAttribute('style', `grid-template-columns: repeat(${gridsize}, ${length}vh)`);
    while(grid.lastElementChild){
        grid.removeChild(grid.lastElementChild);
    }
    createGrid(gridsize)     
}

grid.addEventListener('mouseover', (event) => paintOnEnter(event));
clearButton.addEventListener('click', clear);
gridButton.addEventListener('click', (event) => changeGridSize(event));

grid.setAttribute('style', `grid-template-columns: repeat(${gridsize}, ${length}vh)`);

createGrid(16);
