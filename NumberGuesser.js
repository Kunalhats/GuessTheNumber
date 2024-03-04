let guessnumber=document.querySelector('#guessField')
let submit=document.querySelector('#subt')
let randomNumber =   parseInt(Math.random()*100+1);
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess =[]

let numGuess = 1

let playGame=true

if(playGame){
submit.addEventListener('click',function(event){
    event.preventDefault()
    let guess=parseInt(guessnumber.value)
    ValidateGuess(guess)
})
}

function ValidateGuess(guess){
    if(isNaN(guess)){
        alert("please Enter a Valid number")
    }
    else if(guess<1){
        alert("please Enter a valid number")
    }
    else if(guess>100){
        alert("please Enter a valid number")
    }
    else {
        if(numGuess==10){
            displayGuess(guess)
            displayMessage(`Game over, Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            CheckGuess(guess)
        }
    }
}

function CheckGuess(guess){
    if (guess === randomNumber) {
        displayMessage("You guessed the right number, You Won")
        endGame()
    }else if ( guess < randomNumber ){
        displayMessage('Number is low')
    }else if ( guess > randomNumber ){
        displayMessage('Number is high ')
    }
    
}

function displayMessage(message){
    lowOrHi.innerHTML = `${message}`
}

function displayGuess(guess){
    guessnumber.value = ""
    prevGuess.push(guess)
    guessSlot.innerHTML = prevGuess.join(', ')
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}




function endGame(){
        guessnumber.value = "";
        guessnumber.setAttribute('disabled', '')
        p.classList.add('button')
        p.innerHTML = `<h2 id = "newGame"> Start new Game </h2>`
        startOver.appendChild(p)
        
        playGame = false
        newGame()
}
function newGame(){
    const newBtn=document.querySelector('#newGame')
    newBtn.addEventListener('click' ,function(){
    randomNumber =   parseInt(Math.random()*100+1);
    guessnumber.value = "";
    guessSlot.innerHTML ='';
    guessnumber.removeAttribute('disabled', '')
    prevGuess =[];
    numGuess=1;
    remaining.innerHTML = '';
    lowOrHi.innerHTML='';
    p.innerHTML ='';
    startOver.removeChild(p);
    remaining.innerHTML = `${11-numGuess}`
    playGame=true

})
}