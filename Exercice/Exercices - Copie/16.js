// alert('test');

var disMoi = "";
var i = 1;

while (
  disMoi !== "oui" &&
  disMoi !== "non" &&
  disMoi !== "Oui" &&
  disMoi !== "Non" &&
  disMoi !== "OUI" &&
  disMoi !== "NON"
) {
  disMoi = prompt("Allez!! On joue à ni oui ni non?");
  document.write(
    '"' +
      disMoi +
      "\" n'est pas une réponse, pour la " +
      i +
      "° fois, veux-tu jouer oui ou non? <br>"
  );
  i++;
}
i--; //parce qu'il y a une incrémentation en trop
document.write(
  "<p style='background-color:cyan; text-align:center;'>PERDU ;-) ! Tu as tenu " +
    i +
    " tours.</p>"
);
