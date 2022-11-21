let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".Reset");
let newGame = document.querySelector(".New-Game");
let message = document.querySelector(".Message");
let popup = document.querySelector(".Popup");

// win condition array
let winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let xTurn = true;
let oTurn = false;
count = 0;

let disableBoxes = () => {
    boxes.foreach((element) => {
        element.disabled = true;
    });
    popup.classList.remove("hide")
};

let enableBoxes = () => {
    boxes.foreach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
        popup.classList.add("hide");
};


const winFunction = (letter) => {
    disableBoxes ();
    if(letter == "X"){
        message.innerHTML = "&#x1f389; <br> 'X' wins"; 
    } else{
        message.innerHTML = "&#x1f389; <br> 'Y' wins"; 
    }
};

const drawFunction = () => {
    disableBoxes();
    message.innerHTML = "&#x1F60E; <br> It's a Draw"
};

newGame.addEventListener("click", () =>{
    let count = 0;
    enableBoxes();
});

reset.addEventListener("click", ()=>{
    let count = 0;
    enableBoxes();
});

const winChecker = () => {
    for(let i of winCondition){
        let[element1, element2, element3] =[
            boxes[i[0]].innerText,
            boxes[i[1]].innerText,
            boxes[i[2]].innerText
        ];
        if((element1 != "") && (element2 != "") && (element3 != "")){
            if(element1 == element2 && element1 == element3){
                winFunction(element1)
            }
        }
    }
};

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

window.onload = enableBoxes;
