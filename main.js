const userInput = document.querySelector('input[type="number"]');
const form = document.querySelector('form');


let win = 0;
let loss = 0;


const success = ()=>{
    win+=1;
    let h2 = document.querySelector('h2');
    h2.innerText = `Hurray!!! Correct guess. Number of wins ${win}`;   
    
}

const failed = ()=>{
    loss+=1; 
    let h2 = document.querySelector('h2');
    h2.innerText = `Sorry, that was not the correct guess. Number of loss ${loss}`;
      
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let randomNumber = ()=>{
        return Math.round(Math.random() * 10);
   }


    if (Number(userInput.value) === randomNumber()) {
        success();
   
    }else{
        failed();
    }
    
})



