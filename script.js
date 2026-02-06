const container= document.querySelector('.container');
const inputs= document.querySelectorAll('input');
const loginBtn= document.querySelector('#loginBtn');
const createBtn = document.getElementById('createBtn');

let hue =0;

function animateBorder(){
    hue=(hue+1)%360;
    const nextHue=(hue+60)%360;
     container.style.borderImage = `linear-gradient(45deg, hsl(${hue},100%,50%), hsl(${nextHue},100%,50%) 1`;
    requestAnimationFrame(animateBorder);

}

animateBorder();

createBtn.addEventListener("click",()=>{
    window.location.href="signup.html";

});





// inputs.forEach(input=>{
//     input.addeventlistner('focus',()=>{
//         container.style.boxShadow = '0 0 30px 5px cyan';
//     });
//     input.addeventlistner('blur',()=>{
//         container.style.boxShadow = '0 0 10px 2px purple';
//     });

// });


// loginBtn.addEventListener('click',()=>{
//      const randomHue = Math.floor(Math.random() * 360);
//   container.style.borderImage = `linear-gradient(45deg, hsl(${randomHue},100%,50%), hsl(${(randomHue+60)%360},100%,50%)) 1`;
//   alert('Login button clicked!'); 
// })