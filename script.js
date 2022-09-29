function createBubble(){
    const section=document.querySelector('.section-1')
    const createElement=document.createElement('span')
    var size=Math.random()*60;

    createElement.style.width=20+size+ 'px';
    createElement.style.height=20+size+'px';
    createElement.style.left=Math.random()*innerWidth+'px';
    section.appendChild(createElement);

    setTimeout(()=>{
        createElement.remove()
    },4000)
}

setInterval(createBubble,90);

const myself=document.querySelector('.my-self');
const switchBtn=document.querySelector('.switch-btn');
const playBall=document.querySelector('.play');
const stopBall=document.querySelector('.pause');

playBall.addEventListener('click',()=>myFunc('play'));
stopBall.addEventListener('click',()=>myFunc('stop'));

const myFunc=(state)=>{
if(state==='play'){
    myself.classList.add('animate');
    playBall.style.display='none';
    stopBall.style.display='block';
}
else if(state==='stop'){
    myself.classList.remove('animate');
    playBall.style.display='block';
    stopBall.style.display='none';
}
}

