// alert('test');

//REPONSE FORMATEUR
var choix = prompt("Choisis un nombre entre 2 et 9:");
while ((choix > 1) || (choix < 10)) {
    if ((choix >= 2) && (choix <= 9)) {
        for (var i = 1; i <= 10; i++) {
            var res = choix * i;
            document.write(choix + " x " + i + " = " + res + "<br />");
        }
        break;
    } else {
        choix = Number(prompt("Entrez un nombre entre 2 et 9 : "));
    }
}

// Réponses incomplètes
// var choix = prompt("Choisis un nombre :");
// for(var i = 1; i <= 10 ; i++){
//     var res = choix * i;
//     document.write(choix + " x " + i + " = " + res + "<br />");
// }

// var choix = prompt("Choisis un nombre :");
// if ((choix >= 2) && (choix <= 9)) {
//     for (var i = 1; i <= 10; i++) {
//         var res = choix * i;
//         document.write(choix + " x " + i + " = " + res + "<br />");
//     }
// } else {
//     document.write("<h4>Le chiffre doit être entre 2 et 9 !</h4>");
// }

// Correction Guy Steevy
// let input = Number.parseInt(prompt("Please, enter a number between 1 and 9 to display the multiplication table."));
// let i = 1;
// let result = 0;
// while (!((input > 1) && (input < 10))) { // tant que input n'est pas strictement supérieur à 1 et strictement inférieur à 10
// 	alert("You have to write a number between 1 and 9.");
// 	input = Number.parseInt(prompt("Try again, enter a number between 1 and 9."));
// }
// for (i = 1; i < 10; i++) {
// 	result = input * i;
// 	document.write("<p>" + input + " * " + i + " = " + result + "</p>");
// }



