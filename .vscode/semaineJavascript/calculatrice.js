
let nb1 = document.getElementById("nb_1");
let nb2 = document.getElementById("nb_2");
let plus = document.getElementById("plus");
let moins = document.getElementById("moins");
let multiplications = document.getElementById("multiplications");
let division = document.getElementById("division");
let egale = document.getElementById("egale");
let resultat = document.getElementById("resultat");
let operation;

plus.addEventListener('click', ()=> {
    operation = "+";
})
moins.addEventListener('click', ()=> {
    operation = "-";
})
multiplications.addEventListener('click', () => {
    operation = "*";
})
division.addEventListener('click', ()=> {
    operation = "/";
})
egale.addEventListener("click", () => {
 
    var nombre1 = parseInt(nb1.value);
    var nombre2 = parseInt(nb2.value);
    var result;

    if (operation == "+") {
      result = nombre1 + nombre2;
    } else if (operation == "-") {
      result = nombre1 - nombre2;
    } else if (operation == "*") {
      result = nombre1 * nombre2;
    } else if (operation == "/") {
      result = nombre1 / nombre2;
    }

    resultat.value = result;
});
