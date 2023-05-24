//3 caractéristique de variable> Nom de variable >Valeur de la variable>Type de variable 
//var Prénom = "Wassila";//string
//var monNuméro = 65;//Numerique
//var monNum = "100";
//var monnum = izadi; //Fausse syntaxe , car il n'as pas de guillemet
//var booleanFalse = false;//boolean
//var bouleanTrue = true; //boolean
//var varNull = null;// null
//console.log(Prénom);
//alert(Prénom);
// Alert ("voici mon prenom Wassila")
//console.log(monNuméro); Afficher sur console
//window.alert("Super, tu es arrivé sur mon site !") sur la boite de dialogue
//document.write("A la pause vous aurez des Haribos Pik !"); A partir de la page
//window.prompt("Question: on est quel jour ?");
//var Prénom = prompt();//On declare une variable prompt affiche un formulaire , avec un coontenu vide
//document.write(Prénom);//l'affichage de la variable sur le site  
//var unBooleen = false;//--true
//console.log(unBooleen);
//unBooleen = "true"; // Placée en deuxième ligne elle surcharge celle du dessus 
//console.log(unBooleen);
//console.log(typeof unBooleen);
//const PAYS = "France";
//PAYS = "Italie";
//document.write(PAYS)

//var unChiffre = "12.5698";
//console.log(unChiffre);
//console.log(typeof monChiffre);
//STRING=>NUMBER
//var monChiffre = parseInt(unChiffre);
//console.log(monChiffre);
//console.log(typeof monChiffre);
//unChiffre = parseFloat(unChiffre);
//console.log(unChiffre);
//console.log(typeof unChiffre);
// NUMBER => STRING
//var nb_en_lettres = 258;
//console.log(nb_en_lettres);
//console.log(typeof nb_en_lettres);

//var nb_en_lettres = nb_en_lettres.toString();//converti en string ... tout ce qui ce suit avec une parenthése est une fonction  qui utulise un paramétre qui est entre parenthése 
//console.log(nb_en_lettres); // 
//console.log(typeof nb_en_lettres);

// var Prénom = "Wassila";

var monPrenom = window.prompt();// 3 Façon de montré l'enregistrement  document.write sur la page , console.log sur la console dans inspecter , et alert dans alert  
document.write(monPrenom);
console.log(monPrenom);
alert(monPrenom); 

//Différents types de fonctions:
//1-Une fonction avec au moins un parametre, sans valeur de retour
//2-Une fonction avec au moins un parametre, avec une valeur de retour (variable /boite)
//3-Une fonction sans paramètre, avec une valeur de retour
//4-Une fonction sans paramètre, sans valeur de retour

prompt(); //(Affiché un formulaire vide)  c'est une fonction prédefini de javascript 
var monPrenom;// Déclaré une variable 
monPrenom = prompt();// J'ai affecter la valeur de retour de prompt dans la variable monPrénom.(si tu met deux fois la meme fonction prompt il executera deux fois) 
document.write(monPrenom);//Un objet avec une fonction sans valeur de retour 
console.log(monPrenom);//
alert(monPrenom)//