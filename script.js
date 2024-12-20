
let boxes = document.querySelectorAll(".box");
let resetbtn1 = document.querySelector("#resetbtn");
let newBtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; // to track the draw

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = (()=>{
    turnO= true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
})



const resetboxes = (() => {
    resetbtn1.addEventListener("click", () => {
        console.log("reset button was clicked");
        enableboxes();
    })
});
//resetboxes();


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){ //player O
        box.innerText = "O";
        turnO = false;
    } else {  //playerX
        box.innerText = "X";
        turnO = true; 
    }
    box.disabled =true ;
    count++;
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
        checkDraw();
    }

    });
});

const checkDraw = () => { 
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disabledboxes();

  };
  const disabledboxes = (()=>{
    for(let box of boxes){
        box.disabled = true;
    }
    })
    const enableboxes = (()=>{
      for(let box of boxes){
            box.disabled = false;
            box.innerText ="";
    
    } 
    })

    const showWinner = (winner) =>{
        msg.innerText =`Congraulations, winner is ${winner}.`;
        msgcontainer.classList.remove("hide");
        disabledboxes();
        }
        const checkWinner = () => {
            for(let pattern of winPatterns)
            {
              let pos1Val = boxes[pattern[0]].innerText;
              let pos2Val = boxes[pattern[1]].innerText;
              let pos3Val = boxes[pattern[2]].innerText;
          
              //console.log(pattern[0], pattern[1], pattern[2]);
              //console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
          if (pos1Val!= "" && pos2Val != "" && pos3Val != ""){
              if(pos1Val === pos2Val && pos2Val === pos3Val){
                  console.log("Winner", pos1Val);
                  showWinner(pos1Val);
                  return true;
              }
          } 
          }
          
          };
          newBtn.addEventListener("click",resetGame);
          resetbtn1.addEventListener("click", resetGame);