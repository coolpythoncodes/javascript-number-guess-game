const userInput = document.querySelector('input[type="number"]');
const form = document.querySelector('form');


let win = 0;
let loss = 0;


const success = ()=>{
    win+=1;
    let h3 = document.querySelector('h3');
    h3.innerText = `Hurray!!! ${userInput.value} was the Correct guess. Number of wins ${win}`;   
    
}

const failed = ()=>{
    loss+=1; 
    let h3 = document.querySelector('h3');
    h3.innerText = `Sorry, ${userInput.value} was not the correct guess. Number of loss ${loss}`;      
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let randomNumber = ()=>{
        return Math.round(Math.random() * 10);
   }


    if (Number(userInput.value) === randomNumber()) {
        success();
        userInput.value = '';
   
    }else{
        failed();
        userInput.value = '';
    }
    
})




