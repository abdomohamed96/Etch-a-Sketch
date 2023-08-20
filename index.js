const board=document.querySelector(".board");
const sizeButton=document.querySelector(".girdSize");
const changeColor=document.querySelector(".changeColor")
const clear=document.querySelector(".clear");
function clearBoard(){
    const allSquares=Array.from(document.querySelectorAll("#square"));
    console.log(allSquares);
    allSquares.map(element=>{
        element.style.backgroundColor="white";
    })

}
clear.addEventListener("click",clearBoard);
changeColor.style.width="100px";
let selectColor="red";
changeColor.addEventListener("click",drawingColor);
function drawingColor(e){
    console.log(e.target);
    selectColor=e.target.value;  
}
sizeButton.addEventListener("click",getSize);
let gridSize=20;
let prevSize=16;
function getSize(e){
    prevSize=gridSize;
    gridSize=Number(prompt("Enter the number squares each row",50));
    gridSize=(gridSize>=16&&gridSize<=100)?gridSize:(gridSize<16)?16:100;
    reDraw();
}

drawGrid();
function addColor(e){
    e.target.style.backgroundColor=selectColor;
}
function drawGrid(){
 for(let i=0;i<gridSize;i++){
    for(let j=0;j<gridSize;j++){
        const square=document.createElement("div");
        square.style.height=`${board.offsetHeight/gridSize}px`;
        square.style.width=`${board.offsetHeight/gridSize}px`;
        square.setAttribute("class",`square${i*gridSize+j}`);
        square.setAttribute("id","square")
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
               square.addEventListener("mouseenter",addColor);
               board.appendChild(square);
           }else{
            square.style.height=`${squareLength}px`;
            square.style.width=`${squareLength}px`;
           }
        }
    }
   
}   