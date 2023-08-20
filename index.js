const board=document.querySelector(".board");
const sizeButton=document.querySelector(".girdSize");
sizeButton.addEventListener("click",getSize);
let gridSize=16;
let prevSize=16;
function getSize(e){
    prevSize=gridSize;
    gridSize=Number(prompt("Enter the number squares each row",16));
    gridSize=(gridSize>=16&&gridSize<=100)?gridSize:(gridSize<16)?16:100;
    reDraw();
}

drawGrid();
function addColor(e){
    e.target.style.backgroundColor="red";
}
function drawGrid(){
 for(let i=0;i<gridSize;i++){
    for(let j=0;j<gridSize;j++){
        const square=document.createElement("div");
        square.style.height=`${board.offsetHeight/gridSize}px`;
        square.style.width=`${board.offsetHeight/gridSize}px`;
        square.setAttribute("class",`square${i*gridSize+j}`);
        square.addEventListener("mouseenter",addColor);
        board.appendChild(square);
    }
}
}
function reDraw(){
    if(prevSize>gridSize) {
        let newSize2=gridSize*gridSize;
        let square=document.querySelector(`.square${newSize2}`);
        while(square){
            square.parentNode.removeChild(square);
            newSize2++;
            square=document.querySelector(`.square${newSize2}`);
        }
    }
    let squareLength=board.offsetHeight/gridSize;
    for(let i=0;i<gridSize;i++){
        for(let j=0;j<gridSize;j++){
            let square=document.querySelector(`.square${i*gridSize+j}`);
            if(!square){
               square=document.createElement("div");
               square.style.height=`${squareLength}px`;
               square.style.width=`${squareLength}px`;
               square.setAttribute("class",`square${i*gridSize+j}`);
               square.addEventListener("mouseenter",addColor);
               board.appendChild(square);
           }else{
            square.style.height=`${squareLength}px`;
            square.style.width=`${squareLength}px`;
           }
        }
    }
   
}   