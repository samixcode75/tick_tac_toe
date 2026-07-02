let boxes=document.querySelectorAll('.box');

let reset=document.querySelector('.reset');

let newGameButton = document.querySelector('#newButton');
let msgContainer = document.querySelector(".msg");
let message = document.querySelector("#message");
let turnO=true;


//we will use 2 d array

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
//to reset game function 
  const resetGame=()=>{

    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
  }







boxes.forEach((box) =>{

    box.addEventListener('click',()=>{

        console.log("box was cliked");
        if(turnO){
            box.innerText='O';
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;//so that when we click box again value does not change


        checkWin();
    })
})


//for enabling buttons 
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";//to make inner text empty after game is reset
    }
}

//for dsiabling buttons 
const diableBoxes=()=>{

    for(let  box of boxes){
        box.disabled=true;
    }
}

//to check for the wiin 
const checkWin=()=>{

    for( let pattern of winPatterns){

      // console.log(pattern[0],pattern[1],pattern[2]);

        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);


         let pos1val=boxes[pattern[0]].innerText;
         let pos2val=boxes[pattern[1]].innerText;
         let pos3val=boxes[pattern[2]].innerText;

         if(pos1val!="" && pos2val!="" &&pos3val!="" ){

            if(pos1val===pos2val &&pos2val===pos3val){
              
                console.log("winner");
    
                ShowWinner(pos1val);//calling show winer to display winner 

     
            }
            
         }
    }
}
//function that is called to display winners

  const  ShowWinner=(winner)=>{

    message.innerText=`Congratulation ,winner is ${winner}`;
    msgContainer.classList.remove("hide");
          diableBoxes();
  }


//calling the resetfame function for both buttnons 
  newGameButton.addEventListener("click",resetGame);
  reset.addEventListener("click",resetGame);


