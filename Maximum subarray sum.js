/*
The maximum sum subarray problem consists in finding 
the maximum sum of a contiguous subsequence in an array or
list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive
 numbers and the maximum sum is the sum of the whole array.
  If the list is made up of only negative numbers, return 0 
  instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/
 function maxSequence(arr) {
  let maxEindingHere = 0;
  let maxSoFar = 0;
  for(let i = 0; i < arr.length; i++) { 
  maxEindingHere = Math.max(0,maxEindingHere + arr[i]);
  maxSoFar = Math.max(maxSoFar , maxEindingHere);
    }
    return maxSoFar;
}
console.log(maxSequence([3,-5,9,-99,99])) 
///

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let result1 = myString.split("").filter((ele) => ele!== "_" && ele!== "," ).map((ele)=> isNaN(ele)?ele :"" ).join(" ");
console.log(result1)
/////
document.links[0].onclick = function(event){
  event.preventDefault();
  }
  
let userInput = document.querySelector("[name = 'userName']");
let ageInput = document.querySelector("[name = 'age']");


document.forms[0].onsubmit = function(e){
   
  let userValid = false;
   let ageValid = false ;
    
   
   if (userInput.value !== "" && userInput.length <= 10 ){
    userValid = true;
}

if (ageInput.value!== "" ){
    ageValid = true;

  if (userValid === false || ageValid === false) {
       e.preventDefault();
       }
  


      }
}
let one = document.querySelector(".one" ) 
let two = document.querySelector(".two" ) 
window.onload = function(){
 two.focus();

};
one.onblur = function(){
  document.links[0].click();
}

let element = document.getElementById("three")
element.onclick = function (){
  element.classList.add("add-one" , "add-three")

}

console.log(element.classList)

let test1 =  document.querySelector(".test")
console.log(test1)
 test1.onclick = function (){
  let newTest = test1.cloneNode(true)
  newTest.className = "newClass"
  document.body.appendChild(newTest)
 } 
  document.addEventListener("click",function(e){
  if (e.target.className === "newClass"){

    console.log("i am cloned "); // we use to each click to display info about element in the console 
  }
 
});
setTimeout(function(){
//console.log(" hello marwan ")

},5000);

let finalTest = setTimeout(sayHello, 7000)
function sayHello(){
 //console.log("hello marwan")
}
let btn = document.querySelector(".four")
btn.onclick = function(){
  //clearTimeout(finalTest)
}
console.log(location)
console.log(location.href)
//location.href = "https://google.com"//// your page would open google 
console.log(location.host)
console.log(location.hostname)
console.log(location.protocol) /// protocol https 
console.log(location.hash) // to find your page easily
//location.replace()// from it you go to another page but we will remove the page from the history
//location.assign()// you will go to another page but we will keep it in the history
setTimeout (function(){
 // window.open("https://google.com", "_blank","width = 400, height = 400","left = 100 , top=10"  )
},2000) // to open new window after 2 seconds (window features)
window.scroll({
left : 1000,
top : 300,
behavior : "smooth"
})
let btn1 = document.querySelector(".up")
window.onscroll = function(){
  if (window.scrollY >= 1500 ){
    btn1.style.display = "block";
  } 
  else {
    btn1.style.display = "none";

  }
}
btn1.onclick = function (){
  window.scrollTo({
   left: 0,
   top : 0,
   behavior : "smooth",

  }) 
}
// set
window.localStorage.setItem("color" , "gray")
window.localStorage.fontWight = "bold"
window.localStorage["fontSize"] = "20px"
//get
window.localStorage.getItem("color")
window.localStorage.color
window.localStorage["color"]
//set in the page
document.body.style.backgroundColor = window.localStorage.getItem("color")
//remove item 
window.localStorage.removeItem("fontWight")
/// clear ||| you can remove all items 
console.log(window.localStorage.key(1))
////

let lis = document.querySelectorAll("ul li ");
let exp = document.querySelector(".experiment")

lis.forEach((li) => {
  li.addEventListener("click" ,(e) => {
     console.log(e.cuurentTarget.dataset.color);
    /// remove active class from all lis 
    lis.forEach((li) => {
    li.classList.remove("active")
    });
    /// add active class to current element
    e.cuurentTarget.classList.add("active");
    //add cuurent element to localstorage
    window.localStorage.setItem("color" , e.currentTarget.dataset.color)
    exp.style.backgroundColor = e.currentTarget.dataset.color;
      
    }); // video 112 elzero


  });
