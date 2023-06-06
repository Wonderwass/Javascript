


    

// la syntaxe suivante effectue deux opérations distinctes en même temps:
// 1. elle exécute la fonction prédefinie de js (prompt) qui nous permet l'affichage d'une boîte de dialogue avec un champs de formulaire afin de saisir des valeurs string ou numérique
// 2. en déclarant une variable, nous pouvons stocker la valeur de retour de la fonction "prompt" saisie à partir du champs de formulaire
// conclusion: toutes les valeurs saisies seront stockées dans notre variable

var prenom = prompt("Saisir votre prénom :");
var age = prompt("Saisir votre âge :");

// console.log(prenom,age);

//2- vérification des valeurs
if (isNaN(prenom) && !isNaN(age)) {
    affichagePrenomAge(prenom, age); 
}

function affichagePrenomAge(val1, val2) {
    var result = "Je m'appelle " + val1 + "et j'ai " + val2 + "ans";
    document.write(result);
}