//Créer un tableau
// var arr = new Array(element0, element1, ..., elementN);  la var arr  qui declar un tableau 
// var arr = Array(element0, element1, ..., elementN);
// var arr = [element0, element1, ..., elementN];

var fruits = ['Apple', 'Banana'];
console.log(fruits.length); // Pour donner le nombre d'elléments dans fruit ( apple et banana donc2)
// 2

//Accéder(via son index) à un élément du tableau
var first = fruits[0];
// Apple
var last = fruits[fruits.length - 1];
// Banana

//Boucler sur un tableau
var couleurs = ['rouge', 'vert', 'bleu'];
for (var w = 0; w < couleurs.length; w++) { // tant qu'il est inferieur au nombre d'ellement (tableau)
    console.log(couleurs[w]);
    document.write("<p>"+couleurs[w]+"</p>")
}
//Affichage à partir du dernier élément
for (var w = 2; w >= 0; w--) {
    console.log(couleurs[w]);
    document.write("<p>" + couleurs[w] + "</p>");
}
    var k= 0; //DECLARATION/AfFectation  
    while (k < couleurs.length) {   //Condition
      document.write("<p>" + couleurs[k] + "<>"); //Execution
      k++; //Incrementation
    
}
    

// AU LIEU DE MODIFIER LE TABLEAU ON EN CREE UN AUTRE IDENTIQUE

//Ajouter à la fin du tableau
var newLength = fruits.push('Orange'); // CEST fruits push qui donne la valeur de retour 
// ["Apple", "Banana", "Orange"]

//Supprimer le dernier élément du tableau
var last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];

//Supprimer le premier élément du tableau
var first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];

//Ajouter au début du tableau
var newLength = fruits.unshift('Strawberry') // ajoute au début
// ["Strawberry", "Banana"];

//Trouver l'index d'un élément dans le tableau
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

// Créer un tableau
var pos = fruits.indexOf('Banana');
// 1

//Supprimer un élément par son index
var removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos
// ["Strawberry", "Mango"]

//Supprimer des éléments à partir d'un index
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;
var removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)

//Copier un tableau
var shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits
// ["Strawberry", "Mango"]

var fruits = ["Apple", "Banana"];
var prenom = [
  "Nawal",
  "Wassila",
  "Rahim",
  "Jérémy",
  "Narcis",
  "Karima",
  "Faïssal",
  "Alin",
  "Oliver",
  "Cynthia",
  "Alexis",
  "Michel",
  "Mitra",
];
console.log(fruits.length);
// 2
console.log(prenom.length);

var fruits = ["Apple", "Banana", "Orange"]; // TABLEAU  INDEXé
console.log(typeof fruits); //Typeof pour afficcher le type d'une variable  (3 types dans la variable le nom , le type ,) 
var Panier= { // TABLEAU ASSOCIATIF
  0: "Apple",
  1: "Banana",
  troisemeFruit: "orange",
};

var prenom = [
  "Nawal",
  "Wassila",
  "Rahim",
  "Jérémy",
  "Narcis",
  "Karima",
  "Faïssal",
  "Alin",
  "Oliver",
  "Cynthia",
  "Alexis",
  "Michel",
  "Mitra",
];
console.log(fruits.length);
// 3
console.log(prenom.length);
//Accéder(via son index) à un élément du tableau
var first = fruits[0];
var second = fruits2[0];
var third = fruits2["troisemeFruit"];
console.log(second);
console.log("La valeur du troisième élément :" + third);