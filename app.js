`use strict`;
alert("Welcome to the Writer Central");
alert("Grab your pen, pencil, laptop, or keyboard, and let's begin!")
//const author =prompt("What's your favorite book ever written?");

function getName(){
    const author = prompt("What is your favorite book ever written?");
    return author;
}

let author = getName();

console.log(`author`);

function greetUser(){
    document.write("Hey! " + author + " is one of favorites too!");
}


let response = prompt (`Question: Is the best media books?`);

while (response.toLowerCase() != `yes`){
response = prompt(`wrong! Try again!`);
}


// function coolOrNo(){
//  const bookworm = prompt("Are the best books nonfiction books?")
// console.log(bookworm);

// if (bookworm == "yes"){
    document.write(`You're in the right place!`);
// } else if (bookworm == "no"){
    document.write("You have a lot to learn!");
// } else {
//  coolOrNoWarn();
//  }
// }
