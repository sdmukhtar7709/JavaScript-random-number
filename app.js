const max = prompt("Enter your max number");
let random = Math.floor(Math.random()*max)+1;
let guess=prompt("Enter your guess number");
// console.log(random);
while(true){
    if(guess=="quit"){
        console.log("your are quiting the game");
        break;
    }
    if(guess==random){
        console.log("your guess number is correct, your random number was :"+random);
        break;
    }else if(guess<random){
        guess=prompt("your are entered a number too small. plese try again ");
    }else{
        guess=prompt("you are entered very large number please try again ");
    }
    
