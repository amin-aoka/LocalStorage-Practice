//DOM
let time = document.getElementById("time");

//Functions
let showtime = function (){
let today= new Date();
    hour= today.getHours()
    min = today.getMinutes()
    sec = today.getSeconds()
 time.innerHTML=`${hour} <span>:</span> ${min}<span>:</span> ${sec}`;
}
// use interva;
setInterval(showtime,1000);