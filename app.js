let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".seconds");
let amPm = document.querySelector(".amPm");
let dayDigit = document.querySelector(".dayDigit");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

//Fri Mar 04 2022 16:03:03 GMT+0300 (GMT+03:00)
/* These methods can be used for getting information from a date object:
getFullYear() => Get the year as a four digit number (yyyy)
getMonth() => Get the month as a number (0-11)
getDate() => Get the day as a number (1-31)
getHours() => Get the hour (0-23)
getMinutes() => Get the minute (0-59)
getSeconds() => Get the second (0-59)
getDay() => Get the weekday as a number (0-6)
You can add additional functionalities to your clock. */



function findDay(i){
    if(i==1) return "Monday" ;
    if(i==2) return "Tuesday" ;
    if(i==3) return "Wednesday" ;
    if(i==4) return "Thursday" ;
    if(i==5) return "Friday" ;
    if(i==6) return "Saturday" ;
    if(i==7) return "Sunday" ;
}

function calculate(){
    let date = new Date();
    
    minute.innerText = String(date.getMinutes()).padStart(2,0)+":";
    seconds.innerText = String(date.getSeconds()).padStart(2,0);
    year.innerText = date.getFullYear();
    month.innerText = String(date.getMonth()+1).padStart(2,0);
    dayDigit.innerText = String(date.getDate()).padStart(2,0);
    day.innerText = findDay(date.getDay());
    if(date.getHours()>12){
        amPm.innerText = "PM";
        hour.innerText = String((date.getHours())%12).padStart(2,0)+":";

    }else{
        amPm.innerText = "AM";
        hour.innerText = String(date.getHours()).padStart(2,0)+":";
    }
}


addEventListener("load", ()=>{
    setInterval(calculate,1000);









    
   








