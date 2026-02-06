// for loop
// var i = 1
// for(var i = 0; i <5; i++){
//     console.log(i);
// }

// white loop
// var i = 1
// while (i <= 5) {
//     console.log(i);
//     i++
// }

// do while loop
// var i = 1;
// do {
//     console.log(i);
//     i++
// }while(i < 5)



// var div = document.getElementsByTagName("div");
// console.log(div);




// var div = document.getElementById("complex");
// console.log(div.childNodes);



var multi = "*"
for (let i = 1; i <= 5; i++) {
    // document.write(i);
    for (let j = 1; j <= i; j++) {
        document.write(multi);
    }
    document.write("<br>");
}


