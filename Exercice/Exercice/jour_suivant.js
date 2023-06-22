var jour1 = "lundi";
var jour2 = "mardi";
var jour3 = "mercredi";
var jour4 = "jeudi";
var jour5 = "vendredi";
var jour6 = "samedi";
var jour7 = "dimanche";
// var joursemaine = prompt("Saisir un jour de la semaine!");
// while (Number(joursemaine)) {
//   joursemaine = prompt("ecrire un jour de la semaine !");
// }
// if (joursemaine === jour1) {
//     document.write(jour2);
// } else if (joursemaine == jour2) {
//     document.write(jour3);
// } else if (joursemaine == jour3) {
//     document.write(jour4);
// } else if (joursemaine == jour5) {
//     document.write(jour6);
// } else if (joursemaine == jour7) {
//     document.write(jour1);
// } else {
//     document.write("Veuillez saisir un jour de la semaine! Rafraichir la page pour réafficher le formulaire")
// }

var jour = prompt("Saisir un jour de la semaine!");
jour = jour.toLowerCase();
switch (jour) {
  case "lundi":
    document.write(jour2);
    break;
  case "mardi":
    document.write(jour3);
    break;
  case "mercredi":
    document.write("Demain ça sera Jeudi");
    break;
  case "jeudi":
    document.write;
}

//  var reponsesemaine= parseInt(prompt(jour2));
// if (joursemaine === jour2) {
//   var reponsesemaine = parseInt(prompt(jour3));
// }
// if (joursemaine === jour3) {
//   var reponsesemaine = parseInt(prompt(jour4));
// }
// if (joursemaine === jour4) {
//   var reponsesemaine = parseInt(prompt(jour5));
// }
// if (joursemaine === jour5) {
//   var reponsesemaine = parseInt(prompt(jour6));
// }
// if (joursemaine === jour6) {
//   var reponsesemaine = parseInt(prompt(jour7));
// }
// if (joursemaine === jour7) {
//   var reponsesemaine = parseInt(prompt(jour1));
// }
