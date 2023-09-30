console.log("Welcome to Tic tac Toe");
let music=new Audio('music.mp3');
let audioTurn=new Audio('ting.mp3')
let gameOver=new Audio('gameover.mp3')
let initialTurn='X';
let isGameover=false;
//function to change turn
const changeTurn=()=>{
    initialTurn = initialTurn === 'X' ? 'O' : 'X';
    return initialTurn;
}
//fucntion to check for a win
const checkWin=()=>{
   let boxtexts=document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText!=='')){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+' Won';
            isGameover=true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='200px';
        }
    })
}
//Game logic
music.play();
music.volume = 0.3;
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(box => {
    let boxText = box.querySelector('.boxText');
    box.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = initialTurn;
            changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameover){
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + initialTurn;
            }
            if(isGameover){
                gameOver.play();
            }
        }
    })
});

let reset=document.getElementById('reset');
reset.addEventListener('click',()=>{
    let boxes=document.querySelectorAll('.boxText');
    Array.from(boxes).forEach(box=>{
        box.innerText='';
    });
    initialTurn='X';
    isGameover=false;
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + initialTurn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width='0px';
})