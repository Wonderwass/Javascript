//Creation d'une class personne
class Personne {
  constructor(n, a) {
    //On appelle la fonction constructor (nom imposé par js) avec 2 param: n et a
    this.nom = n; //On déclare une variable nom qui prend la valeur de n
    this.age = a; //On déclare une variable age qui prend la valeur de a
  }
  saluer() {
    console.log(
      "Bonjour, je m'appelle " + this.nom + " et j'ai" + this.age + "ans."
    );
  }
}
//Création des objets p1 et p2
let p1 = new Personne("Wonder", 24); //on declare une variable qui sera consideré comme l'objet créer
//Pour récuperer l'age ou le nom de p1 faire la syntaxe: p1.age; p1.nom;
let p2 = new Personne("Maya", 3);
//pour appeler la methode saluer sur un des objets faire: p1.saluer();
p1.saluer(); //"Bonjour, je m'appelle Wonder et j'ai 24 ans."
p2.saluer(); //"Bonjour, je m'appelle Maya et j'ai 3 ans."
console.log(p2.nom);

/*
 EXO1:
 Supposons que vous deviez modéliser une classe Cercle qui représente un cercle avec le propriété rayon et les méthodes calculerSurface() qui calcule et retourne la surface du cercle et afficherInfo() qui affiche les informations du cercle dans la console.
 Votre tâche consiste à créer la classe Cercle, instancier un objet Cercle et appeler les méthodes calculerSurface() et afficherInfo() pour l'objet instancié.
 formule pour claculer la surface d'un cercle : PI multiplié par le rayon au caré PI * (rayon * rayon) */
class Cercle {
  constructor(r) {
    // on declare le constructeur de la classs qui prend un parametre qui est le rayon
    this.rayon = r;
  }
  // déclarer les methodes calculer calculSurface te afficherInfo

  calculerSurface() {
    //calculer la surface et retourner la surface
    let surface = Math.PI * Math.pow(this.rayon, 2);
    return surface;
  }
  afficherInfo() {
    // afficher les informations du cercle
    console.log(
      "le cercle a un rayon de " +
        this.rayon +
        "est un surface de" +
        this.calculerSurface()
    );
    //this.calculerSurface() retourne la valeur de la surface
  }
}
let c = new Cercle(2); // instancier un objet cercle;

/*
 Supposons que vous deviez modéliser une classe CompteBancaire qui représente un compte bancaire avec les propriétés suivantes : titulaire, solde et les méthodes deposer(montant) qui permet de déposer de l'argent sur le compte, retirer(montant) qui permet de retirer de l'argent du compte et afficherSolde() qui affiche le solde actuel du compte.

 

  Votre tâche consiste à créer la classe CompteBancaire,
  creer le constructeur avec les parametres : titulaire et solde
  creer les methodes:  
  deposer qui prend un parametre pour ajouter de l'argent dans le compte
  retirer qui prend un parametre pour retirer de l'argent du compte
  afficherSolde qui afficher le solde du compte dans la console

 

  instancier un objet CompteBancaire avec comme titulaire : Abraham et solde 5
  appeller la methode ajouter en lui passant la valeur 10
  appeller la methode retirer en lui passant la valeur 7
  appeller la methode afficherSolde */

class CompteBancaire{
    constructor(titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    }
    deposer(montant) {
        return this.solde = this.solde + montant;
    }
    retirer(montant) {
        return this.solde = this.solde - montant;
    }

    afficherSolde() {
        console.log(this.solde);
    }
}

let Wassila = new CompteBancaire("Wassila", 80000);
Wassila.afficherSolde();
Wassila.deposer(100000);
Wassila.afficherSolde();
Wassila.retirer(50000);
Wassila.afficherSolde();
