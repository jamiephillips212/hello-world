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

while (response.toLowerCase)( != `yes`);{
response = prompt(`wrong! Try again!`);
}


function rateMyPage(){
    let rating = prompt("How many stars would you rate my page? 1-5");

    for (let i = 0; 1 < rating; i++){
        document.write("<img class=`loop-img` src=`five-star-rating-png-transparent-images-free-download-2020.png` alt=`5 pointed stars` />");
    }
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

// function coolorNoWarn(){
//  const bookworm2 = prompt("Another chance to be nice! "Are the best books nonfiction books?")
// console.log(bookworm2);

// if (bookworm2 == `yes`){
    document.write(`You're in the right place!`);
// } else if (bookworm2 == "no"){
// } document.write(`You have a lot to learn!`);
// } else {
// coolOrNoWarn();
// }
// }

// function coolOrNoWarn(){
//   const bookworm3 = prompt ("We can do this all day. Are the best books nonfiction books?")
// console.log(bookworm3)

// if (bookworm3 == "yes"{
// document.write(`We agree on something. About time.`);
// } else if (bookworm3 == "no")
//   document.write(`Another chance! Are the best books nonfiction books?`);
// } else {
// coolOrNoWarn2();
// }    
// }


// function coolOrNoWarn(){
//   const bookworm2 = prompt("Another chance! Are the best books nonfiction books?")
// console.log(bookworm3);   
// }

// if (bookworm2 =="yes"){
// document.write(`You're in the right place!`);
// } else if (bookworm2 == "no"){
// document.write(`You have a lot to learn!`);
// } else {
// coolOrNoWarn();
// }

// function coolOrNo(){
//    const bookworm = prompt("Are the best books nonfiction books?")
// console.log(bookworm);
//  coolOrNoWarn();
//  }
// }
