

var prenom = [];
var prenomForm;

// Length signifie la taille du taableau et ces une propriété.
  while(prenom.length<=12){
    prenomForm = prompt("Saisir votre Prénom");
    prenom.push(prenomForm);
   
}
console.log(prenom);
 
// On decalre un tableau vide 
var adjectif = []; 
// on declare une variable qui nous servira pour le prompt
var adjectifform;

while (adjectif.length <= 12) {
    adjectifform = prompt("Saisir un Adjectif");
    adjectif.push(adjectifform);
}
console.log(adjectif);

function Tableauxreturn(tableau1, tableau2) {
    var tableaufusionne = tableau1 = contact(tableau2);
    return tableaufusionne;
}