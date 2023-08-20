const board=document.querySelector(".board");
const sizeButton=document.querySelector(".girdSize");
const changeColor=document.querySelector(".changeColor")
const rainbowColor=document.querySelector(".rainbowColor");
const clear=document.querySelector(".clear");
rainbowColor.addEventListener("click",rainbowMode)
function clearBoard(){
    const allSquares=Array.from(document.querySelectorAll("#square"));
    console.log(allSquares);
    allSquares.map(element=>{
        element.style.backgroundColor="white";
    })

}
let mode="not random";
function rainbowMode(){
    mode="random";
    clearBoard();
}
function randomColor(){
    const letters="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}

clear.addEventListener("click",clearBoard);
changeColor.style.width="100px";
let selectColor="red";
changeColor.addEventListener("click",drawingColor);
function drawingColor(e){
    mode="not random";
    selectColor=e.target.value;  
}
sizeButton.addEventListener("click",getSize);
let gridSize=16;
let prevSize=16;
function getSize(e){
    prevSize=gridSize;
    gridSize=Number(prompt("Enter the number squares each row",50));
    gridSize=(gridSize>=16&&gridSize<=100)?gridSize:(gridSize<16)?16:100;
    reDraw();
}

drawGrid();
function addColor(e){
    if(mode=="random")
    e.target.style.backgroundColor=randomColor();
    else
    e.target.style.backgroundColor=selectColor;
}
function drawGrid(){
 for(let i=0;i<gridSize;i++){
    for(let j=0;j<gridSize;j++){
        const square=document.createElement("div");
        square.style.height=`${board.offsetHeight/gridSize}px`;
        square.style.width=`${board.offsetHeight/gridSize}px`;
        square.setAttribute("class",`square${i*gridSize+j}`);
        square.setAttribute("id","square");
        square.addEventListener("mouseenter",addColor);
        board.appendChild(square);
    }
}
}
function reDraw(){
    clearBoard();
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
               square.setAttribute("id","square");
               square.addEventListener("mouseenter",addColor);
               board.appendChild(square);
           }else{
            square.style.height=`${squareLength}px`;
            square.style.width=`${squareLength}px`;
           }
        }
    }
   
}   