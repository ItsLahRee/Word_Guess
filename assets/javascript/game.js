//Set up Variables//
var computerNumber
var userScore = 0
var crystalOne
var crystalTwo
var crystalThree
var crystalFour
var wins = 0
var losses = 0
//Set up functions//
function setValues(){
//generate raandom number for computerNumber choice//
computerNumber = Math.floor(Math.random() *102) +19
//generate random number for each crystal//
crystalOne = Math.floor(Math.random() *12) +1
crystalTwo = Math.floor(Math.random() *12) +1
crystalThree = Math.floor(Math.random() *12) +1
crystalFour = Math.floor(Math.random() *12) +1
}
setValues() 
console.log (computerNumber)
console.log (crystalOne)
console.log (crystalTwo)
console.log (crystalThree)
console.log (crystalFour)

//Add game logic with jQuery//
$(".computerNumber").text(computerNumber)

//repeat for wins and losses & display on the screen

//onClick event for class = .crystal
var counter = 0;
  $(".crystal").on("click", function() {

    counter += 10;

    alert("New score: " + counter);
//grab value of data-crystal

var currentCrystal =$(this).attr("data-crystal") 
//if currentCrystal === "1" then userScore = userScore +crystalOne
//else if 