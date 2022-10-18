
/* Generiamo una password composta da:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
aggiungiamo alla fine un numero
Infine scriviamo sulla pagina "la tua password insicurissima è: nomecognomecolorepreferito21"*/

//Chiedi all'utente il suo nome
//-let nome = prompt();
//Chiedi  all'utente il suo cognome
//--let cognome = prompt();
//Chiedi all'utente il suo colore preferito
//-let colore = prompt();
//aggiungiamo alla fine un numero
//scriviamo sulla pagina "la tua password insicurissima è: nomecognomecolorepreferito21"

//nome
let name = prompt('insert your name');
console.log(name);
//cognome
let surname = prompt('insert your surname');
console.log(surname);
//colore
let color = prompt('insert your favourite color');
console.log(color);
//numero
const number = 34;
console.log(number);



//frase finale

document.getElementById('passwordOutput').innerHTML = `la tua password insicurisima è ${nome}${surname}${color}${number} `; 

