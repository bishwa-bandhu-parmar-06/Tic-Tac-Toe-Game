let winnermsg = document.querySelector(".winner-msg");
let newgamebtn = document.querySelector(".new-game");
let gamebtn = document.querySelector(".game-btn");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");

let turn0 = true;
let moves = 0;

let winningpattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
    [0, 4, 8], [2, 4, 6] //diagonals
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0 === true){
            box.innerText = "X";
            box.style.color = "#457b9d";
            turn0 = false;
            winnermsg.innerText = "Now : O's turn";
            winnermsg.style.display = "block";
        }
        else{
            box.innerText = "O";
            box.style.color = "#e63946";
            turn0 = true;
            winnermsg.style.display = "block";
            winnermsg.innerText = "Now : X's turn";
        }
        moves++;
        checkWinner();
        box.style.pointerEvents = "none";
    });
});

const showwinner = (winner) => {
    boxes.forEach((box) => {
        winnermsg.innerText = `Congratulations Winner is : ${winner}`;
        box.style.pointerEvents = "none";
    });
};


const checkWinner = () => {
    for(let patterns of winningpattern){
        let pos1value = boxes[patterns[0]].innerText;
        let pos2value = boxes[patterns[1]].innerText;
        let pos3value = boxes[patterns[2]].innerText;

        if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value === pos2value && pos2value === pos3value){
                // console.log("winner is : " + pos1value);
                winnermsg.style.display = "block";
                showwinner(pos1value);
            }
        }
    }
    if (moves === 9) {
        winnermsg.innerText = "It's a tie!";
    }
};


resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        turn0 = false;
        box.innerText = " ";

        winnermsg.innerText = `Winner is :  `;
        box.style.pointerEvents = "auto";
    });
});

newgamebtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        turn0 = false;
        box.innerText = " ";
        winnermsg.innerText = `Winner is :  `;
        box.style.pointerEvents = "auto";
    });
});