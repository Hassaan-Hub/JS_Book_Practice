// 31 Getting the current date and time


// var rightNow = new Date();

// console.log(rightNow);




// 32 Extracting parts of the date and time


// var rightNow = new Date()
// var day = rightNow.getDay()
// var month = rightNow.getMonth()
// var date = rightNow.getDate()
// var year = rightNow.getFullYear()
// var hour = rightNow.getHours()
// var minute = rightNow.getMinutes()
// var second = rightNow.getSeconds()
// var miliseconds = rightNow.getMilliseconds()
// var time = rightNow.getTime()

// console.log(month);




// 33 Specifying a date and time


// var current = new Date()
// var selected = new Date("Nov 18, 2007")
// var currentTime = current.getTime()
// var selectedTime = selected.getTime()
// var minus = currentTime - selectedTime
// var result = minus / (1000 * 60 * 60 * 24)

// console.log(result);




// 34 Changing elements of a date and time


// var date = new Date()
// date.setFullYear("2026")
// date.setMonth("11")
// date.setDate("25")
// date.setHours("10")
// date.setMinutes("30")
// date.setSeconds("45")
// date.setMilliseconds("500")

// console.log(`year is ${date}`);




// 35 functions


// function timer(){
//     var date = new Date()
//     var hour = date.getHours()
//     var minute = date.getMinutes()
//     var second = date.getSeconds()
//     var ampm = ""

//     if (hour >= 12){
//         ampm = "PM"
//     }else{
//         ampm = "AM"
//     }

//     if (hour >= 12){
//         hour = hour - 12
//     }else if(hour == 0){
//         hour = 12;
//     }

//     document.getElementById("clock").innerHTML = `Current Time: ${hour}:${minute}:${second} ${ampm}`
// }
// setInterval(timer, 1000);




// 36 Functions: Passing them data


// function user(greet){
//     alert(greet)
// }
// user("hello how was your day")
// console.log("good bro thanks");




// 37 Functions: Passing data back from them


// function sum(merch){
//     var orderTot;

//     if(merch >= 100){
//         orderTot = merch;
//     }else if(merch < 50.01){
//         orderTot = merch + 5
//     }else{
//         orderTot = merch + 5 (0.3 * (merch - 50))
//     }
//     return orderTot
// }
// var result = sum(500)
// alert(result)




// 38 Functions: Local vs. global variables


// var user = "hello"  // global variable
// console.log(user);

// function greet(){
//     var user = "assalamualaikum"    // Local variavble
//     console.log(user);
// }
// greet()




// 39 switch statements: How to start them


// var day = "sunaf";

// switch (day) {
//   case "sun":
//     alert("fun day");
//     break;
//   case "sat":
//     alert("masti day");
//     break;
// }




// 40 switch statements: How to complete them


// var day = "sunaf";

// switch (day) {
//   case "sun":
//     alert("fun day");
//     break;
//   case "sat":
//     alert("masti day");
//     break;
//   default :
//     alert("bad day")
// }
