#! bin/usr/env node

import inquirer from "inquirer"
// If and If Else Statements: Called Conditional Statements
// Method:  If ( ) { } = Conditional Statements

// If (True) {console.log("You 're allowed") = Right
// If (False) {console.log("You 're allowed") = Wrong
// let see in Practice:
// Simple Statements
// according to going to School or College
let amIStudent1 = true;
let amIWorker1 = false;
if (amIStudent1) {
  console.log("You 're allowed");
} else if (amIWorker1) {
  console.log("You 're not allowed");
} // in print: You 're allowed

// // according to going to Office or Factory
let amIStudent2 = true;
let amIWorker2 = false;
if (amIWorker2) {
  console.log("You 're allowed");
} else if (amIStudent2) {
  console.log("You 're not allowed");
} else {
    console.log("Selcet valid");
};          // in print: You 're not allowed
              //                                      Now
              // with logical Operators: and (symbols:&&) , or (symbols:||) , not (symbols:!=)
              // Note 01: if anyone "false" is coming in operator (&&) then everyone will be false.
              // Note 02: if anyone "true" is coming in operator (or / not) then everyone will be true.
let niceJob1 = true;
let handSome1 = true;
let canCook1 = true;
let isRich1 = true;
let isPoor1 = false;
if (niceJob1 && handSome1 && canCook1 && isPoor1) {
  console.log("Engagement confirm.");
} else {
  console.log("Engagement reject.");
} // in print: Engagement reject.

let niceJob2 = true;
let handSome2 = true;
let canCook2 = true;
let isRich2 = true;
let isPoor2 = false;
if (niceJob2 && handSome2 && canCook2 || isPoor2) {
  console.log("Engagement confirm.");
} else {
  console.log("Engagement reject.");
};   // in print: Engagement confirm.

let niceJob3 = true;
let handSome3 = true;
let canCook3 = true;
let isRich3 = true;
let isPoor3 = false;
if (niceJob3 && handSome3 != canCook3 != isRich3) {
  console.log("Engagement confirm.");
} else {
  console.log("Engagement reject.");
};   // in print: Engagement confirm.
              // Difference of < , >
let myPercentage1 = 70
if (myPercentage1 >= 80){
    console.log("Your grade is A+.");
} else if (myPercentage1 >= 70){
    console.log("Your grade is A.");
};               // in print: Your grade is A.

let myPercentage2 = 70
if (myPercentage2 <= 80){
    console.log("Your grade is A+.");
} else if (myPercentage2 <= 70){
    console.log("Your grade is A.");
};               // in print: Your grade is A+.

let myPercentage3 = 90
if (myPercentage3 >= 80 && myPercentage3 >= 70 || myPercentage3 > 90){
    console.log("Your grade is A+.");
} else if (myPercentage3 > 60){
    console.log("Your grade is A.");
};               // in print: Your grade is A+.

let myPercentage4 = 90
if (myPercentage3 >= 80 && myPercentage3 >= 70 && myPercentage3 > 90){
    console.log("Your grade is A+.");
} else if (myPercentage4 > 60){
    console.log("Your grade is A.");
};               // in print: Your grade is A.
