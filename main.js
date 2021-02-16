const countdown = document.querySelector(".countdown");

// set lunche date(ms)

const launchdate = new Date('feb 25 , 2021 13:23:00').getTime();

// update every second
const intvl = setInterval (() => {

const now = new Date().getTime();

  //calculate distance from launchdate

 const distance = launchdate - now;

    //time calculation

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

    const mins = Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds = Math.floor((distance % (1000*60))/1000);


//display results

countdown.innerHTML= `
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Mins</span></div>
<div>${seconds}<span>Second</span></div>

`;
//if launchdate is reached

if (distance<0) {
    clearInterval(intvl);
    countdown.style.color = "red";
    countdown.innerHTML = "launched";
}
}
,1000)