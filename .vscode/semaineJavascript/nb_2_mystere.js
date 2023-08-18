/**
 *! --- C O R R E C T I O N ---
 */

// créer une variable pour chaque "button"
let newGame = $("#newGame"); // le button "newGame"
let solution = $("#solution"); // le button "solution"
let propose = $("#propose"); // le button "propose"
let monForm = $("#monForm");

// le nombre d'essai
let nbEssai = 0;

// le nombre mystère
// let randomNumber = Math.floor(Math.random() * 51);
let randomNumber = generateRanomNumber();

// créer une "function" qui permet de génerer

// créer une variable pour chaque "input"
function generateRanomNumber() {
  return Math.floor(Math.random() * 51);
}

// ajouter des gestionnaire d'evenement sur les trois boutons

// le bouton "newGame" propose un noveau nombre mystère et remet le nombre d'essais à 0
newGame.on("click", () => {
  //TODO le code a remplir plus tard
  // randomNumber = Math.floor(Math.random() * 51);
  randomNumber = generateRanomNumber();
  nbEssai = 0;
  // "monForm" est considéré un tableau par jQuery
  monForm[0].reset();
  $("#");
  $("#proposition").attr("disabled", false);
  propose.attr("disabled", false);
});

// le bouton "solution" affiche le nombre mystère dans le input avec l'id "message"
solution.on("click", () => {
  //TODO code ici
  $("#message").val("Le nombre mystère est : " + randomNumber);
  $("#proposition").attr("disabled", true);
  propose.attr("disabled", true);
});