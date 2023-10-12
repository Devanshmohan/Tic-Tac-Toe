let music = new Audio("music.mp3");
let turnmusic = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver=false;

function changeTurn() {
    return turn==="X"?"0":"X";
}

function checkWin(){
    let boxtext = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8,]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector(".info").innerText=boxtext[e[0]].innerText + " Won";
            isGameOver=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "400px";
            gameOver.play();
        }
    });
}

// Game Logic


let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxText");
    element.addEventListener('click', ()=>{
        if (boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            turnmusic.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText= `Turn for ${turn}`;
            }
        }
    })
})


// addEventListner to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn="X";
    isGameOver=false;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
});
