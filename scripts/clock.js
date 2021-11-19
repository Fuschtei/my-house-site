const ds = document.querySelector("#clock");

function date() {
    const fullDate = new Date();
    const numberDayOfMonth = fullDate.getDate();
    const year = fullDate.getFullYear();

    let hours = fullDate.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }

    let minutes = fullDate.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let seconds = fullDate.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let month = fullDate.getMonth();
    if (month == 0) {
        month = "sunday";
    }
    else if (month == 0) {
        month = "January";
    }
    else if (month == 1) {
        month = "February";
    }
    else if (month == 2) {
        month = "March";
    }
    else if (month == 3) {
        month = "April";
    }
    else if (month == 4) {
        month = "May";
    }
    else if (month == 5) {
        month = "June";
    }
    else if (month == 6) {
        month = "July";
    }
    else if (month == 7) {
        month = "August";
    }
    else if (month == 8) {
        month = "September";
    }
    else if (month == 9) {
        month = "October";
    }
    else if (month == 10) {
        month = "November";
    }
    else if (month == 11) {
        month = "December";
    }


    let day = fullDate.getDay();
    if (day == 0) {
        day = "sunday";
    }
    else if (day == 1) {
        day = "monday";
    }
    else if (day == 2) {
        day = "tuesday";
    }
    else if (day == 3) {
        day = "wednesday";
    }
    else if (day == 4) {
        day = "thursday";
    }
    else if (day == 5) {
        day = "friday";
    }
    else if (day == 6) {
        day = "saturday";
    }


    ds.innerHTML = `${day} ${numberDayOfMonth} ${month} ${year}   ${hours}:${minutes}:${seconds}`;
}

setInterval(date, 1000);
// ds.innerText = setInterval(date, 1000);
