
// No global variables
(function(){
    
function playSound(e){
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
 key.setAttribute("class","key playing");
 console.log(key);
 audio.currentTime = 0;
 audio.play();
};

function transition(e) {
if(e.propertyName !="transform") return;
   this.setAttribute('class','key');
}

const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playSound);
keys.forEach(key=>key.addEventListener('transitionend', transition));
})();