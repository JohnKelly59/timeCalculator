var date = new Date();
var n = date.toDateString();
document.getElementById("date").innerHTML = n;


function diff(start, end) {
    var num1 = document.getElementById("time1").value
var num2 = document.getElementById("time2").value

    start = num1.split(":");
    end = num2.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;
   const answer = (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
console.log(answer)
document.getElementById("display").innerHTML = answer;

   return(answer)
}

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
     diff();
    }


});
