// alert('test');

// -- Structure de base IF

if (true) {/* par défaut la condition à vérifier le IF vérifie si elle est vraie */
    /* ... code ... */
}

var nb1 = 10;
if (nb1 < 50) {
    console.log("nb1 est bien inférieur à 50");
}

if (true) {
    /* ... code si VRAI ... */
} else {
    /* ... code si FAUX ... */
}

if (nb1 > 50) {
    console.log("nb1 est bien supérieur à 50");
} else {
    console.log("nb1 n'est pas supérieur à 50");
} else if (nb1 == 50) {
    console.log("Je ne suis pas dans else if");
    // si if n'est pas true et que else if est true et tu rajoute entre parenthése une condition 
} else {
    // si non; si "if" n'est pas true et que "else if"n'est pas true nomplu:
    console.log("Je suis dans le else");
}
/*
EXERCICE
On utilise le IF pour vérifier l'âge de l'internaute.
=> s'il est majeur je lui souhaite la bienvenue
=> s'il est mineur je [1]lui signale et [2]le renvoie vers un autre site
*/
// 1 -- je déclare la majorité légale
var MajoriteFR = 18;

// 2 -- demander l'âge en s'assurant que nous avons un NUMBER
var age = parseInt(prompt("Indiquez votre âge"));

// 3 -- je vérifie si mon internaute est majeur
if (age >= MajoriteFR) {// bienvenue si vrai
    alert("Bienvenue, vous êtes majeur");
} else {
    // s'il est mineur je lui signale
    alert("Allez voir un autre super site...");
    // et ensuite je redirige vers Darty ;-)
    document.location.href = "http://www.darty.com/"
}



/*FIN*/
