window.addEventListener('keydown', function(e){
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    if(!audio) return;

    audio.play();
    key.classList.add('playing');
    
    
    
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
    console.log(this);
}

const key = document.querySelectorAll('.key');
key.forEach(key=>{
    key.addEventListener('transitionend', removeTransition)
})


