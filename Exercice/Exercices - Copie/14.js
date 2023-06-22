// var nombre = 0; // Valeur initiale permettant d'entrer dans la boucle
// while ((nombre < 50) || (nombre > 100)) {
//     nombre = Number(prompt("Entrez un nombre entre 50 et 100 : "));
// }


// premier methode sans inverse ne fonctionne pas?
// var nombre = parseInt(prompt("Entrer un nombre entre 50 et 100 :"));
// while (nombre >= 50 && nombre <= 100) {
//     alert("le nombre : " + nombre + " que Vous avez saisie  est compris entre 50 et 100");
//     nombre = prompt("Entrer un nombre entre 50 et 100 :");
// }
// // deuxieme methode avec l'inverse ne fonctionne pas?
// while (nombre < 50 || nombre > 100) {
//     alert("Vous avez saisie " + nombre + " n'appartient pas a l'intervalle 50 et 100");
//     nombre = prompt("Entrer un nombre entre 50 et 100 :");
// }
// troisieme methode avec boucle while et dedans if else ne fonctionne pas?
// while (nombre != 'quitter') {
//     if (nombre >= 50 && nombre <= 100) {
//         alert("le nombre : " + nombre + " que Vous avez saisie  est compris entre 50 et 100");
//         nombre = prompt("Entrer un nombre  'quitter' pour quitter");
//     }
//     else if (nombre < 50 || nombre > 100) {
//         alert("Vous avez saisie " + nombre + " n'appartient pas a l'intervalle 50 et 100");
//         nombre = prompt("Entrer un nombre  'quitter' pour quitter");
//     }
//     else {
//         alert("Erreure entrer un nombre correcte");
//     }
// }
var nombre = 0;
while ((nombre < 100) || (nombre > 50)){
  nombre = Number(prompt("Veuillez saisir un nombre entre 50 et 100:"));
}

