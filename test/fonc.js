let num = 1; // variable num qui contient la valeur 1
do {
  // faire:
  if (num % 2 === 0) {
    // si num est divisible par 2 (a savoir un nombre pair)
    console.log(num); // afficher num
  }
  num++; //incrementer num
} while (num <= 20); // tant que num est inferieur ou egale a 20

function someTab(tableau) {
  // fonction someTab prend un parametre
  let somme = 0; // initialisation de la variable somme à 0
  let i = 0; // initialisation de la variable i à 0
  //  0 correspond a la premiere position du tableau
  while (i < tableau.length) {
    // tant que i est plus petit que la taille du tableau
    // on ajoute la valeur de la position i du tableau a la variable somme
    somme = tableau[i] + somme;
    i++; // incrementer i
    // somme += tableau[i];
  }
  // a la fin de la boucle on retourne la somme
  return somme;
}

let tab = [1, 2, 8, 5, 6];
let resultat2 = someTab(tab);
console.log(resultat2); // => affiche 22

// eviter cette mauvaise maniere
// let resultat3 = someTab([1, 6, 9]); // => 16

function maxTab(tableau) {
    let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
    for (let i = 0; i < tableau.length; i++){ // pour i allant de 0 a la taille du tableau
        // comparer max de la valeur a la position i du tableau
        if (max < tableau[i]) {  // si max est plus petit
            // on remplace la valeur de max par la valeur de la position i du tableau
            max = tableau[i]; 
        }
    }
    return max; // retourner max
}

 

let tab1 = [5, 8, 3, 0];
let resultat3 = maxTab(tab1);
console.log(resultat3); // affiche => 8

function maxTab(tableau) {
  let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
  for (let i = 0; i < tableau.length; i++) {
    // pour i allant de 0 a la taille du tableau
    // comparer max de la valeur a la position i du tableau
    if (max < tableau[i]) {
      // si max est plus petit
      // on remplace la valeur de max par la valeur de la position i du tableau
      max = tableau[i];
    }
  }
  return max; // retourner max
}

function minTab(tableau) {
  let min = tableau[0]; // on considere le premier elemement comme etant le plus grand
  for (let i = 0; i < tableau.length; i++) {
    // pour i allant de 0 a la taille du tableau
    // comparer max de la valeur a la position i du tableau
    if (min > tableau[i]) {
      // si max est plus petit
      // on remplace la valeur de max par la valeur de la position i du tableau
      min = tableau[i];
    }
  }
  return min; // retourner max
}

function maxMinTab(tableau, c) {
  if (c == true) {
    return maxTab(tableau);
  } else {
    return minTab(tableau);
  }
}
function reverseWord(str) {
    return str.split("").reverse().join("");
    
}
let chaine = "Bonjour";
