var developpeurs = ["Alexis", "Alin", "Cynthia", "Faïssal", "Jérémy", "Karima", "Michel", "Narcis", "Nawal", "Oliver", "Rahim", "Wassila", ];

function affichagePrenoms(namDev) {
    for (var i = 0; i < namDev.length; i++) {
        document.write(" " + namDev[i]);
    }
}
// affichagePrenoms(developpeurs);


var prenoms = [];
var saisie = 0;
while (saisie < 12) {
    prenoms.push(prompt("saisir un prenom", " prénom "));
    saisie++;
}
// document.write(prenoms);
affichagePrenoms(prenoms);





// fait par chat gpt
// var prenoms = [];

// // Déclarer une fonction qui prend en paramètre un tableau de 12 éléments
// function affichagePrenoms(prenomsDev) {
//     // Utilisation de la boucle "for" pour afficher les éléments du tableau sur une page web
//     for (var i = 0; i < prenomsDev.length; i++) {
//         document.write(prenomsDev[i] + "<br>");
//     }
// }

// // Boucle pour saisir 12 prénoms et les ajouter au tableau "prenoms"
// for (var saisie = 0; saisie < 12; saisie++) {
//     var prenom = prompt("Saisir un prénom", "prénom");
//     prenoms.push(prenom);
// }

// // Exécution de la fonction "affichagePrenoms" en lui passant le tableau "prenoms"
// affichagePrenoms(prenoms);