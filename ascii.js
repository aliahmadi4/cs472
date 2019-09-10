
window.onload = function(){
    
    document.getElementById('start').onclick = startAnimation;
    document.getElementById('stop').onclick = stopAnimation;
    var textArea = document.getElementById('text-area');
    var a = BLANK;  // animation frames array
    var frame = 0;
    var speed = 0;
    var interval;
    setTurbo();
    setAnimation();

    document.getElementById('animation').onchange = setAnimation;
    document.getElementById('fontsize').onchange = setAnimationSize;
    document.getElementById('turbo').onchange = setTurbo;

    function startAnimation(){    
        interval = setInterval(animate,speed);
        document.getElementById('stop').disabled = false;
        document.getElementById('start').disabled = true;
        document.getElementById('turbo').disabled = true;
    }
    function stopAnimation(){
        clearInterval(interval); 
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
        document.getElementById('turbo').disabled = false;
    }

    function animate(){
        if(frame < a.length){
            textArea.value = a[frame++];
        }else{
            textArea.value = a[0];
            frame = 0;
        }
    }

    function setAnimation(){
        a = ANIMATIONS[document.getElementById('animation').value].split('=====\n');
    }

    function setAnimationSize(){
        textArea.style.fontSize = document.getElementById('fontsize').value;
    }

    function setTurbo(){
        let s = document.getElementById('turbo').checked;
        if(s==true){
            speed = 50;
        }else{
            speed = 250;
        }
    }
}




