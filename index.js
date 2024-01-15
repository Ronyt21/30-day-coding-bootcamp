// Declarations
const key = document.querySelectorAll('.key');

// Addition of transition function to each Keys 
key.forEach(key=>{
    key.addEventListener('transitionend', removeTransition)
})

// Events
window.addEventListener('keydown', (e) => playMusic(e);

// Function Declarations
function playMusic(event){
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
     if(!audio) return;
     audio.play();
     key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(this);
}





