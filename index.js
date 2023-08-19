const board=document.querySelector(".board");
const gridSize=1;
let squareLen=board.offsetHeight/gridSize;
function addColor(e){
    //console.log(e.target);
    e.target.style.backgroundColor="red";
}
 for(let i=0;i<gridSize;i++){
    for(let j=0;j<gridSize;j++){
        const square=document.createElement("div");
        console.log(squareLen);
        square.style.height=`${squareLen}px`;
        square.style.width=`${squareLen}px`;
        square.addEventListener("mouseenter",addColor);
        board.appendChild(square);
    }
}