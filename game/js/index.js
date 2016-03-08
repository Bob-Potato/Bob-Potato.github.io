
function hugs() {
  
  $(".hide").click(function (){
    $("btn").hide();
});

var name = prompt("What's your name");

alert(" The Riddler: Welcome "+name +". Answer these questions and I will free you. BUT ANSWER THEM WRONG AND YOU SHALL BE TRAPPED IN ETERNAL RIDDLES FOREVER!!!!!!!! Also, by the way, all questions have one word answers.");

var Q1 = prompt("Who makes this has no need for it, who buys it doesn't use it and who uses it can't see or feel it.What is it?" ).toUpperCase();
  
 if (Q1==="COFFIN") {
        alert("Good job...");
  }
  else {
    alert("WRONG!!!")
    
  } 

var Q2 = prompt("Poor people have it. Rich people need it. If you eat it you die. What is it?" ).toUpperCase();
var q3ready=0;

if (Q2==="NOTHING") {
        alert("You're just lucky.");
  }
  else {
    alert("WRONG!!!!")
  } 

var Q3 = prompt("I’m tall when I’m young and I’m short when I’m old. What am I?" ).toUpperCase();
var q4ready=0;

if (Q3==="CANDLE") {
        alert("You are not meant to be doing well");
  }
  else {
    alert("WRONG!!!")
  } 

var Q4 = prompt("A man is a butcher, he is five foot ten and he wears size 13 shoes. What does he wheigh?" ).toUpperCase();
var q5ready=0;

if (Q4==="Meat") {
        alert("You are doing too well.");
  }
  else {
    alert("WRONG!!!")
  } 

var Q5 = prompt("How much dirt is there in a hole that measures two feet by three feet by four feet?" ).toUpperCase();
var q6ready=0;

if (Q5==="NONE") {
        alert("That one was obvious!");
  }
  else {
    alert("WRONG!!!")
  } 

var Q6 = prompt("What grows when it eats, but dies when it drinks?" ).toUpperCase();

if (Q6==="FIRE") {
        alert("You're getting too many easy questions...");
  }
  else {
    alert("WRONG!!!")
  } 
  
  var Q7 = prompt("Many have heard me but no one has seen me. I don't speak unless spoken to. What am I?" ).toUpperCase();
  
  if (Q7==="ECHO") {
    alert("You're good at this.")
  }
  else {
    alert("WRONG!!!!")
  }
  
  var Q8 = prompt("I have keys but no locks, I have space but I have no room, you can enter but you can't leave. What am I?" ).toUpperCase();
  if (Q8==="KEYBOARD") {
    alert("You're too good at this.")
  }
  else {
    alert("WRONG!!!")
  }
}