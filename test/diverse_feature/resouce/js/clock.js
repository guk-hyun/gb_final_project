const clock = document.querySelector(".clock");

onTimer()
setInterval(onTimer,1000)

function onTimer(){
    let time = new Date();
    let hour = String(time.getHours()).padStart(2,"0");
    let minute = String(time.getMinutes()).padStart(2,"0");
    let second = String(time.getSeconds()).padStart(2,"0");
    
    clock.innerText = `시계 ${hour}:${minute}:${second}`

}