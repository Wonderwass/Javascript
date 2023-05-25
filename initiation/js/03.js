//alert("Hello");

// -- 1. Addition
// -- INFO -- Je peux déclarer plusieurs variables à la suite

/* je déclare mes variables */
var nb1, nb2, resultat;

/* j'affecte des valeurs */
nb1 = 10;
nb2 = 5;

/* j'utilise mes variables avec un calcul */
resultat = nb1 + nb2;

/* j'affiche mon résultat dans la console */
console.log(resultat);


// -- 2. Soustraction
// -- Soustraction de nb1 - nb2 avec l'opérateur "-"
resultat = nb1 - nb2;
console.log(resultat);


// -- 3. Multiplication
// -- Multiplication de nb1 * nb2 avec l'opérateur "*"
resultat = nb1 * nb2;
console.log(resultat);


// -- 4. Division
// -- Division avec l'opérateur "/"
resultat = nb1 / nb2;
console.log(resultat);


// -- 5. Modulo
// -- Le Modulo retourne le reste d'une Division
// -- modulo de nb1 % nb2 avec l'opérateur "%"
resultat = nb1 % nb2;
console.log(resultat);

// -- et maintenant je ré-affecte une valeur à nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log("Le reste de la division de " + nb1 + " par " + nb2 + " est égal à : " + resultat);


// -- 6. Ecritures simplifiées
nb1 = 15;
nb1 = nb1 + 5; // égal à 20

nb1 += 10;// nb1 lui-même + quelque chose
console.log('Le résultat de "nb1 += 10;" est ' + nb1); // égal à 30, alternance de guillemet simples et doubles pour ne pas casser ma chaime de caractères

// le raccourci est le même avec les autres opérateurs +, -, /, *, %

// Si j'utilise un ' (apostrophe) dans une phrase concaténée, je peux échapper le caractère à l'aide d'un anti-slash \ (alt gr + 8)
//FIN
