// const WEEK = ["SUN","MON","TUE","WED","THU","FRI","SAT"]

(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    // let today = new Date(),
    //     dd = String(today.getDate()).padStart(2, "0"),
    //     mm = String(today.getMonth() + 1).padStart(2, "0"),
    //     yyyy = today.getFullYear(),
    //     nextYear = yyyy + 1,
    //     dayMonth = "10/1/",
    //     birthday = dayMonth + yyyy;

    // today = mm + "/" + dd + "/" + yyyy;
    // if (today > birthday) {
    // birthday = dayMonth + nextYear;
    // }
    // //end
    var birthday = new Date("Oct 3, 2023 4:31:00").getTime();

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {
        const now = new Date().getTime(),
                distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
            // document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
        }
          //seconds
        }, 0)
    }());
function zeroPadding(num,digit){
    return String(num).padStart(digit,"0");
}

// var countDownDate = new Date("Oct 3, 2024 21:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//     var now = new Date().getTime();

//   // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//     document.getElementById("days").innerText = Math.floor(distance / (day)),
//     document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//     document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//     document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
//   // If the count down is finished, write some text
// if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
// }
// }, 1000);
