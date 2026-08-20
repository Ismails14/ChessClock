let WhiteTime=600;
let BlackTime=600;
let activePlayer=null;
let timerInterval;
let increment=3;
let isPause=false;
const WhiteZone=document.getElementById('WhiteZone');
const BlackZone=document.getElementById('BlackZone');



WhiteZone.addEventListener('click',()=>{

    if(isPause===true)return;

    if(activePlayer ==="white"){
        WhiteTime+=increment

        WhiteZone.innerText=formatTime(WhiteTime);

    }
    if (activePlayer ==="white" || activePlayer ===null){
        activePlayer= 'black';
        WhiteZone.classList.remove('active');
        BlackZone.classList.add('active');

        StartTimer();
    }
});

BlackZone.addEventListener('click',()=>{

    if (isPause===true)return;

        if(activePlayer ==="black"){        
            BlackTime+=increment

        BlackZone.innerText=formatTime(BlackTime);
        
    }
    if (activePlayer==="black" || activePlayer===null){
        activePlayer="white";
        BlackZone.classList.remove("active");
        WhiteZone.classList.add("active");

        StartTimer();
    }
});



function StartTimer(){
    clearInterval(timerInterval);
    timerInterval=setInterval(() => {
        if (activePlayer ==="white"){
            WhiteTime-=1;
            document.getElementById('WhiteZone').innerText=formatTime(WhiteTime);


            if (WhiteTime <=0){
                clearInterval(timerInterval);
                alert("black won")
            }
        }else if (activePlayer ==="black"){
            BlackTime-=1;
            document.getElementById('BlackZone').innerText=formatTime(BlackTime);
            if (BlackTime <=0){
                clearInterval(timerInterval);
                alert("white won");

                
            }
        }



    },1000);
}

function formatTime(totalSeconds){
    const minutes=Math.floor(totalSeconds/60);
    const seconds=totalSeconds % 60;
    const displayMinutes=String(minutes).padStart(2,'0');
    const displaySeconds=String(seconds).padStart(2,'0');
    return `${displayMinutes}:${displaySeconds}`

}



    const ResetBut=document.getElementById("reset");
    ResetBut.addEventListener('click',()=>{
        clearInterval(timerInterval);

        WhiteTime=600;
        BlackTime=600;
        activePlayer=null;

        WhiteZone.innerText="10:00";
        BlackZone.innerText="10:00";

        WhiteZone.classList.add('active');
        BlackZone.classList.remove('active');
        
        pauseBut.innerText = "Pause"; 
        WhiteZone.style.opacity = "1";
        BlackZone.style.opacity = "1";
    

    }  
) ;

const pauseBut=document.getElementById("pause");

pauseBut.addEventListener('click',()=>{

    if(activePlayer===null)return;
    if (isPause===false){
        clearInterval(timerInterval);
        isPause=true;
        pauseBut.innerText="Resume";

        WhiteZone.style.opacity="0.5";
        BlackZone.style.opacity="0.5";


    }

    else if(isPause===true){
        StartTimer();
        isPause=false;
        pauseBut.innerText="Pause";

        WhiteZone.style.opacity="1";
        BlackZone.style.opacity="1";


    }
    


});
