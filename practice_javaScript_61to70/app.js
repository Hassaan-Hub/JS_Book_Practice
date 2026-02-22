// 61 The DOM: Junk artifacts and nodeType

// var a = document.querySelector("div").nodeType;
// console.log(a);




// 62 The DOM: More ways to target elements

// var div = document.getElementById("main")
// var pNode = div.parentNode
// var pChild = div.lastChild
// console.log(pChild);




// 63 The DOM: Getting a target's name

// var parent = document.getElementById("main")
// var target = parent.firstChild;
// nName = target.nodeName
// nType = target.nodeType
// console.log(nName);




// 64 The DOM: Counting elements

// var li = document.getElementsByTagName("li")
// var len = li.length;
// for(var i = 0; i < len; i++){
//     if(li[i].innerHTML == ""){
//         li[i].innerHTML = "coming soon"
//     }
// }




// 65 The DOM: Attributes

// var para = document.getElementById("paragraph")
// var get = para.getAttribute("class")
// var attri1 = para.hasAttribute("id")
// var attri = para.setAttribute("class", "para")
// console.log(get);
// console.log(attri1);




// 66 The DOM: Attribute names and values

// var para = document.getElementById("paragraph").childNodes[0]
// var para = document.getElementById("paragraph").attributes
// var numOfItems = para.length;
// console.log(numOfItems);

// var numOfItems = document.getItemById("paragraph").attributes.length
// console.log(numOfItems);
