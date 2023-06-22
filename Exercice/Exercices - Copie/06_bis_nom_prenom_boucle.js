/*
    EXERCICE
    On utilise le IF pour vérifier l'âge de l'internaute.
    => tant que l'utilisateur ne rentre pas un nombre entre 3 et 120 lui redemander son age
        => s'il est majeur je lui souhaite la bienvenue
        => s'il est mineur je [1]lui signale et [2]le renvoie vers un autre site

*/
// 1 -- je déclare la majorité légale
var majoriteFR = 18;

// 2 -- demander l'âge en s'assurant que nous avons un NUMBER
var age = parseInt(prompt("Indiquez votre âge"));


while ((age <= 3) || (age > 120)) {
    age = parseInt(prompt("Indiquez votre âge !!"));

    
    if((age > 3) && (age < majoriteFR)){
        alert("Allez voir un autre super site...");
        document.location.href = "http://www.darty.com/";
    }
    if((age >= majoriteFR) && (age <= 120)){
        alert("Bienvenue, vous êtes majeur");
    } 
}

//  C:\xampp\htdocs\support_poissy\support_poissy_formation\Cours\07_JavaScript\Exercices\06_bis_nom_prenom_boucle.html

