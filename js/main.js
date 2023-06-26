let evento_btn=document.getElementById("evento");
let isPlaying= false;

evento_btn.addEventListener("click",()=>{
   console.log(!isPlaying)
   if(!isPlaying){
    audio.play();
    isPlaying=true;
    evento_btn.innerHTML="Pause";
    image.style.animationPlayState ="running";
   }
   else{
    audio.pause();
    isPlaying=false;
    evento_btn=innerHTML= "Play";
    image.style.animationPlayState ="paused";
   }
});