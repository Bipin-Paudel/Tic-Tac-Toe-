let boxes=document.querySelectorAll('.box');
let resetGameBtn= document.querySelector('#reset-btn');
let newGameBtn = document.querySelector("#newGame")
let messagecontainer = document.querySelector('.msg-container')
let message = document.querySelector("#winpara")

let turn= true //playerX

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

const resetGame =() =>{
   turn=true;
   enableBoxes();
   messagecontainer.classList.add("hide");


}


const disableBoxes = () =>
{
  for(box of boxes){
    box.disabled=true;
  }

}

const enableBoxes = () =>
  {
    for(box of boxes){
      box.disabled=false;
      box.innerText= "";
    }
  
  }


boxes.forEach((box) =>{
 box.addEventListener('click',() => {
 
    if (turn==true){
        box.innerText ='O';
        turn=false;
    }
    else {
    box.innerText ='X';
    turn=true;
    }
   box.disabled =true;
   chekwinner();
 });

});

const showWinner =(winner) =>{
message.innerText =`Congratulations, Winner is ${winner}`;
messagecontainer.classList.remove("hide");
disableBoxes();
}

const chekwinner = () =>{
  for(let pattern of winpatterns)
  {
   let pos1Val = boxes[pattern[0]].innerText;
   let pos2Val = boxes[pattern[1]].innerText;
   let pos3Val = boxes[pattern[2]].innerText;

 if(pos1Val!=""&& pos2Val!="" && pos3Val!=""){
    if(pos1Val==pos2Val && pos2Val==pos3Val){
     console.log('winner',pos1Val);
     showWinner(pos1Val);

     
    }
 }

  }

}

newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);

