"use strict";

let field = document.getElementById('field');
let ball = document.getElementById('ball');
let stick = document.getElementById('stick');
let x=0; let y=0;		
let right = true, bottom = true;
let heightField = field.getBoundingClientRect().height;
let heightBall = ball.getBoundingClientRect().height;
let widthField = field.getBoundingClientRect().width;
let widthBall = ball.getBoundingClientRect().width;
let heightStick = stick.getBoundingClientRect().height;
let widthStick = stick.getBoundingClientRect().width;
x=Math.floor(Math.random()*(widthField-widthBall));
    ball.style.left = x+'px';
    ball.style.top = y+'px';
    
setInterval(moveBall, 10);

function moveBall(){				
    if (right&&bottom) {
        x++;
        y++;}
    if (!right&&!bottom) {
        x--;
        y--;}
    if (!right&&bottom) {
        x--;
        y++;}
    if (right&&!bottom) {
        x++;
        y--;}
    if (y>=heightField-heightBall-heightStick*2) {
        let leftStick=stick.getBoundingClientRect().left;		
         let leftBall=ball.getBoundingClientRect().left;
         let topBall=ball.getBoundingClientRect().top;
         let topStick=stick.getBoundingClientRect().top;
        if (leftStick<leftBall+(widthBall/2)&&leftStick+widthStick>=leftBall+(widthBall/2)){
            bottom = false;							
        }				
        if (topBall>topStick+heightStick*2) {
            if (confirm(`Вы проиграли!\nЖелаете сыграть еще раз?`)) {
                  location.reload();
              } else {
                  alert("Слабак!")
              }
        }				
    }
    if (y<=0) bottom = true;
    if (x>=(widthField-widthBall)) right = false;
    if (x<=0) right = true;
    ball.style.left = x+'px';
    ball.style.top = y+'px';			
}

field.addEventListener('mousemove', ()=>{			
    if (event.offsetX>=widthField-widthStick){		
        stick.style.left=event.offsetX-widthStick+"px";
    } 
    else {
        stick.style.left=event.offsetX+"px";
    }
    console.log(widthField);
    console.log(stick.style.left);	
})