const board=document.querySelector(".board");
const gridSize=16;
function addColor(e){
    console.log(e.target);
    e.target.style.backgroundColor="red";
}
 for(let i=0;i<gridSize;i++){
    for(let j=0;j<gridSize;j++){
        const square=document.createElement("div");
        square.style.cssText="height:10px; width:10px; " 
        square.addEventListener("mouseenter",addColor);
        board.appendChild(square);
    }
}