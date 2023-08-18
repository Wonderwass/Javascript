var nb_aleatoire = Math.floor(Math.random() * 51);
//math.floor pour retourner un nombre entier , Math.random pour un nombre aleatoire entre 0 et 0,99
console.log(nb_aleatoire);

let solution = document.getElementById("solution");
let reponse = document.getElementById("reponse");
let boutonPropose = document.getElementById("propose");
let proposition = document.getElementById("proposition");

// en j querry
// let solution= $("#solution");

// addventlistener ecouteur d'evenement (click, change)
solution.addEventListener("click", () => {
  // Quand on clique sur solution , l'input "reponse" prend en valeur le nombre aléatoire (le nombre aléatoire est affiché dans l'input de la réponse)
  reponse.value = nb_aleatoire;
  boutonPropose.setAttribute("disabled", true);
  proposition.setAttribute("disabled", true); //Une fois le bouton solution cliqué, le bouton proposer et l'input proposition prennent l'attribut disabled (On ne peut plus cliquer dessus)
});

let newGame = document.getElementById("newgame");
let essai = document.getElementById("essai");
let message = document.getElementById("message");

newGame.addEventListener("click", () => {
  proposition.removeAttribute("disabled", false);
  boutonPropose.removeAttribute("disabled", false);
  nb_aleatoire = Math.floor(Math.random() * 51);
  console.log(nb_aleatoire);
  reponse.value = "";
  message.value = "";
  essai.value = 1;
  proposition.value = "";
});
boutonPropose.addEventListener("click", () => {
  if (essai.value == 7) {
    boutonPropose.setAttribute("disabled", true);
    proposition.value = "";
    message.value = "Game over";
    reponse.value = nb_aleatoire;
    proposition.setAttribute("disabled", true);
  } else {
    // Si la valeur de la proposition n'est pas vide ET est égale au bon nombre aléatoire , alors un message de félicitation apparaitra , et la réponse sera donnée
    if (proposition.value != "" && proposition.value == nb_aleatoire) {
      message.value = "Félicitation, tu as trouvé";
      reponse.value = nb_aleatoire;
      proposition.setAttribute("disabled", true);
    } else if (proposition.value != "" && proposition.value < nb_aleatoire) {
      message.value = "Le nombre est trop petit";
      essai.value++;
      proposition.value = "";
    } else if (proposition.value != "" && proposition.value > nb_aleatoire) {
      message.value = "Le nombre est trop grand";
      essai.value++;
      proposition.value = "";
    }
  }
});




