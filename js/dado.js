/**
 * DICE GAME 
 */

/**
 * VARIABLES
 */
var pushButton = document.getElementById('push-button');
var clearButton = document.getElementById('try-again-button');
var randomUser = Math.floor((Math.random() * 6) + 1);
var randomCPU = Math.floor((Math.random() * 6) + 1);
var win = ('Hai vinto!');
var lose = ('Hai perso!');
var parity = ('Pari')
// play game

pushButton.addEventListener('click',
function() { 
    if(randomUser > randomCPU) {
        console.log('Il tuo risultato è:' + randomUser);
        console.log('Il risultato del tuo avversario è:' + randomCPU);
        document.getElementById('user-number').innerHTML = randomUser;
        document.getElementById('cpu-number').innerHTML = randomCPU;
        document.getElementById('result').innerHTML = win;
    
    } else if(randomUser < randomCPU) {
        console.log('Il tuo risultato è:' + randomUser);
        console.log('Il risultato del tuo avversario è:' + randomCPU);
        document.getElementById('user-number').innerHTML = randomUser;
        document.getElementById('cpu-number').innerHTML = randomCPU;
        document.getElementById('result').innerHTML = lose;
    }else {
        console.log('Il tuo risultato è:' + randomUser);
        console.log('Il risultato del tuo avversario è:' + randomCPU);
        document.getElementById('user-number').innerHTML = randomUser;
        document.getElementById('cpu-number').innerHTML = randomCPU;
        document.getElementById('result').innerHTML = parity;    
    }
}
)

// reset button 
clearButton.addEventListener('click',
function() {
    
    
}
)