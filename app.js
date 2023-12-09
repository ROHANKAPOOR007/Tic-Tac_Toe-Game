let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset');
let newGameButton = document.querySelector("#new-game")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO  = true // playerX, playerO 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        // console.log("box was clicked")
        if(turnO){
            box.innerHTML = 'O';
            turnO=false;
        }
        else{
            box.innerHTML = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    } )
})


const showWinner = (winner)=>{
    msg.innerHTML = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    diableBoxes();

}

const diableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        
        console.log(pattern[0], pattern[1], pattern[2]);

        let pos1Val = boxes[pattern[0]].innerHTML
        let pos2Val = boxes[pattern[1]].innerHTML
        let pos3Val = boxes[pattern[2]].innerHTML

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){

            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner")
                showWinner(pos1Val);

            }

        }
    }
}


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


newGameButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', resetGame);
