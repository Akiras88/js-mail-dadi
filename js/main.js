/**
 * SEARCH IN AN ARRAY 
 */

/**
 * VARIABLES
 */

var mail = [ 'michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers', 
'francesco@gmail.com', 'giovanni@gmail.com' ];
var user = prompt('Inserisci la tua Email');
var userFound = false;

// search
for (var i = 0; i<mail.length; i++) {
    var item = mail[i];
    if( item==user) {
        userFound = true;
    }
}

// feedback users
if(userFound == true) {
    //check
    console.log('Email valida, procedi con l\' accesso');
}else {
    console.log('Errore di autentificazione');
}

