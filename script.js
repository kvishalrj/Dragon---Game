document.addEventListener('DOMContentLoaded',()=>{

let dino = document.querySelector('.dino');
let drag = document.querySelector('.drag');
let score = document.getElementById('score');
let gameOver = document.getElementById('gameOver');
let scoreN = 0;
let pass = true;

// Dinosour movement code
document.addEventListener('keydown', (e)=> {    
    // console.log(e.key);
    if(e.key=="ArrowUp"){
        dino.classList.add('dinoAnimateUp');
        setTimeout(()=>{
            dino.classList.remove('dinoAnimateUp');
        },1000);
    }
    else if(e.key=="ArrowRight"){
        let dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = `${dx + 250}px`;
    }
    else if(e.key=="ArrowLeft"){
        let dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = `${dx - 250}px`;
    }
});

// function to check game over
setInterval((e)=>{
    let dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'));

    let ox = parseInt(window.getComputedStyle(drag,null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(drag,null).getPropertyValue('bottom'));

    let diffX = Math.abs(dx-ox);
    let diffY = Math.abs(dy-oy);

    if(diffX<100 && diffY<100){
        gameOver.style.visibility = "visible";
        drag.classList.remove('dragAnimateMove');
        dino.classList.add('dinoAnimateDown');
        dino.style.bottom = `${-600}px`
        score.innerText = `Your Score: ${scoreN-1}`;
    }

    else if(diffX<150 && pass){
        scoreN += 1;
        score.innerText = `Your Score: ${scoreN}`;
        pass = false;
        setTimeout(()=>{
            pass = true;
        }, 1000);
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(drag, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            drag.style.animationDuration = `${newDur}s`;
        },1200);
    } 

}, 10);

})
