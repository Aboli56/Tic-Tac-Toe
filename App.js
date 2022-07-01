let win = new Audio("winnn.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("go.mpeg")
let turn = "X";
let gameOver = false;
const changeTurn = () => {
    return turn === "X"?"0":"X";
}
const checkWin = () =>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
     if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
     document.querySelector('.info').innerText = boxtext[e[0]].innerText +" Won🎉"
    
       document.querySelector('.gif').getElementsByTagName('img')[0].style.width ='300px';
       win.play();
       stop(checkWin())
       gameOver = true;
       alert( document.querySelector('.info').innerText = boxtext[e[0]].innerText +" already Won")
       
     }
    })
}
let count=0;
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
let boxtext = element.querySelector(".boxtext");
element.addEventListener("click",()=>{
    if(boxtext.innerText === ''){
        count++;
        boxtext.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
         if(count==9){
            checkWin()
            gameover.play();
            alert("Click on Reset button to play again")
        }
        if(!gameOver){
        document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
        } 
    } 
})
})
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
       
        element.innerText=''
    });
    turn ='X';
    count=0;
    gameOver=false;
        document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
        document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "0px"
     if(count==9){
            checkWin()
            gameover.play();
            alert("Click on Reset button to play again")
        }
        
})
