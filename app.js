let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".Reset");
let newGame = document.querySelector(".New-Game");
let message = document.querySelector(".Message");
let popup = document.querySelector(".Popup");

// win condition array
let winCondition = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

let xTurn = true;
let oTurn = false;
count = 0;

let disableBoxes = () => {
    boxes.foreach((element) => {
        element.disabled = true;
    });
    popup.classList.remove("hide")
}

let enableBoxes = () => {
    boxes.foreach((element) => {
        element.disabled = false;
    })
        popup.classList.add("hide");
}



// to display X/O
boxes.forEach((element) => {
    element.addEventListener("click", () =>{
        if(xTurn == true){
            element.innerText = "X";
            element.disabled = true;
            xTurn = false;
            oTurn = true;
        } else if(oTurn == true){
            element.innerText = "O";
            element.disabled = true;
            oTurn = false;
            xTurn = true;
        }
        count += 1;
        if(count === 9){
            drawFunction();
        }
        winChecker();
    })
})

window.onload = enableBoxes
