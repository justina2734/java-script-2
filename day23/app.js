const date = document.querySelector("h2.date");

function dDayCount(){
    const today=new Date();
    const dDay=new Date("dec 25, 2022 00:00:00");
    const remainDay = dDay - today;
    const remainDayD = String(Math.floor(remainDay/(1000*60*60*24)));
    const remainDayH = String(Math.floor((remainDay/(1000*60*60))%24)).padStart(2,"0");
    const remainDayM = String(Math.floor((remainDay/(1000*60))%60)).padStart(2,"0");
    const remainDayS = String(Math.floor(remainDay/1000%60)).padStart(2,"0");
    date.innerHTML = `${remainDayD}d ${remainDayH}h ${remainDayM}m ${remainDayS}s 🥂`
}

dDayCount();
setInterval(dDayCount,1000);