// 71 Objects: Methods

// var plan1 = {
//     names: {
//         name1: "hassaan",
//         name2: "ali",
//         name3: "JavaScript",
//         name4: "Objects",
//     }
// };

// for (var i in plan1) {
//     for(var j in plan1[i]){
//         console.log(plan1[i][j]);

//     }
// }




// function Plan(name, price, model, company){
//     this.name = name,
//     this.price = price,
//     this.model = model,
//     this.company = company
// }

// var namePro = prompt("Enter car name")
// var pricePro = prompt("Enter car price")
// var modelPro = prompt("Enter car model")
// var companyPro = prompt("Enter car company")
// var result = new Plan(namePro, pricePro, modelPro, companyPro)

// for(var i in result){    
//     document.getElementById("inner").innerHTML += i + ": " + result[i] + "<br>";
//     // console.log(result[i]);  

// }




// 73 Objects: Constructors for methods

// function Cons(name, age, college, clas) {
//     this.name = name,
//     this.age = age,
//     this.college = college,
//     this.class = clas,
//     this.same = function () {
//         console.log(this.name , " is " , this.age);
//     }
// }
// var result = new Cons("hassaan", 19, "the citizen college", "11th")
// console.log(result);
// result.same()




// 74 Objects: Prototypes

// function Cons(name, age, college, clas) {
//     this.name = name,
//         this.age = age,
//         this.college = college,
//         this.class = clas
// }
// Cons.prototype.same = function () {
//     console.log(this.name, this.age);
// }
// var result1 = new Cons("hassaan", 19, "the citizen college", "11th")
// var result2 = new Cons("ali", 20, "the citizen college", "12th")
// // result1.same()
// // result2.same()

// // if (result1.name == "hassaan") {
// //     console.log("yes");
// // }else{
// //     console.log("no");
// // }




// 75 Objects: Checking for properties and methods

// var obj = {}
// obj.name = "hassaan"
// obj.age = 19
// // obj.incl = function () {
// //     console.log("this is a method");
// // }
// var keye = Object.values(obj)
// console.log(keye[2]);

// // var result = obj.hasOwnProperty("name")
// // console.log(result);




// 76 Browser control: Getting and setting the URL

// window.location.href
// 👉 Current full URL deta hai (poora link)
// Example: https://example.com/page?id=1

// window.location.hostname
// 👉 Sirf domain name deta hai (website ka naam)
// Example: example.com

// window.location.pathname
// 👉 URL ka path deta hai (domain ke baad wala part)
// Example: /page

// window.location.hash
// 👉 URL ka hash/anchor part deta hai (# ke baad)
// Example: #section1

// window.location.assign()
// 👉 Kisi new URL par redirect karne ke liye use hota hai

// window.location.reload()
// 👉 Page ko reload (refresh) karta hai

// window.location.replace()
// 👉 Redirect karta hai lekin history save nahi hoti (back nahi ja sakte)




