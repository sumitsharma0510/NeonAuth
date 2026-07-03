const container= document.querySelector('.container');
const inputs= document.querySelectorAll('input');
const CreateBtn= document.querySelector('#CreateBtn');
const loginBtn = document.getElementById('loginBtn');
let hue =0;

function animateBorder(){
    hue=(hue+1)%360;
    const nextHue=(hue+60)%360;
     container.style.borderImage = `linear-gradient(45deg, hsl(${hue},100%,50%), hsl(${nextHue},100%,50%)) 1`;
    requestAnimationFrame(animateBorder);

}

animateBorder();


loginBtn.addEventListener("click",()=>{
    window.location.href="index.html";

});

