let time = 0;

let timerIdRef = null;
function prependZero(time, lowerEnd){
    return time < lowerEnd ? `0${time}` : time;
}

function transformTimeToStringFormat(timeInSeconds){
    const seconds = timeInSeconds%60;
    const minutes = Math.floor(timeInSeconds/60)%60;
    const hrs = Math.floor(timeInSeconds/(60*60));
    return `${hrs} : ${minutes} : ${seconds}`
}

function startTimer(){
    if(timerIdRef !==null)
    {
        return
    }
    timerIdRef = setInterval(function(){
        time++;
        handleUpdateTime(time);
    },1000)
}

function stopTimer(){
    clearInterval(timerIdRef);
    timerIdRef=null;
}

function resetTimer(){
    stopTimer();
    time=0;
    handleUpdateTime(0);
}

function handleUpdateTime(time){
    const timeElement = document.getElementById('timer');
    const timeInString = transformTimeToStringFormat(time)
    timeElement.textContent = timeInString;
}

window.addEventListener("load",function(){
    const startElement = document.getElementById("start");
    const stopElement = document.getElementById("stop");
    const resetElement = document.getElementById("reset");

    startElement.addEventListener('click', startTimer);
    stopElement.addEventListener('click',stopTimer);
    resetElement.addEventListener('click',resetTimer);
})