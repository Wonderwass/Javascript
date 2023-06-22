var jour = prompt("Quel jour sommes-nous ?");
if (jour === "lundi") {/* ... lundi ... */
    document.write("Demain nous serons mardi...");
} else if (jour === "mardi") {/* ... mardi ... */
    document.write("Demain nous serons mercredi...");
} else if (jour === "mercredi") {/* ... mercredi ... */
    document.write("Demain nous serons jeudi...");
} else if (jour === "jeudi") {/* ... jeudi ... */
    document.write("Demain nous serons vendredi...");
} else if (jour === "vendredi") {/* ... vendredi ... */
    document.write("Bon week-end");
} else if (jour === "samedi") {/* ... samedi ... */
    document.write("Demain nous serons dimanche...");
} else if (jour === "dimanche") {/* ... dimanche ... */
    document.write("Bon courage ;-)");
} else {/* ... autres cas ... */
    document.write("Jour inconnu...");
}

switch (jour) {
    case "lundi":
      console.log("Demain on est mardi");
      break;
    case "mardi":
      console.log("Demain on est mercredi");
      break;
    case "mercredi":
      console.log("Demain on est jeudi");
      break;
    case "jeudi":
      console.log("Demain on est vendredi");
      break;
    case "vendredi":
        console.log("Demain on est samedi");
        break;
    case "samedi":
      console.log("Demain on est dimanche");
      break;
    case "dimanche":
        console.log("Demain on est lundi");
      break;
    default:
      console.log("Désolé, vérifiez l'orthographe et veuillez écrire sans majuscules.");
}



