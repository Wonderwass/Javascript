var num1 = 2;
var num2 = 5;
if ((num1 + num2) == 7) {   //true
  console.log("le resultat est correct");
}
if (!(num1 + num2 != 7)) {  // ! si la condition n'est pas vrai 
  console.log("le resultat est correct"); 
}
if (true) {
  console.log("la condition est vrai");
}
if (!(!true)) { //la syntaxe "!true"signifie: l'oposé de "true", qui donne le resultat "false",
  //on peut donc résumer comme la syntaxe suivante"!(false)".
  //Au finale on peut arriver au resultat suivant"!(false)=true". 
  //Dans ce cas nous avons droit d'entrer dans la condition et executer les code qui se trouvent dans la condtion
  console.log("la condition est vrai");
}
