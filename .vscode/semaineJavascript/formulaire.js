//recuperer tous les elements
let btn = document.getElementById("add_todo");
//pour recuperer le input
let todo = document.getElementById("todo");
//pour recuperer la div ou on va ajouter les todos
let todoList = document.getElementById("todolist");

// ecouter le click sur le bouton
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // recuperer la valeur du input
//     let val = todo.value;
//     // creer un paragraphe
//     let p = document.createElement("p");
//     // ajouter le contenu du input dans le paragraphe
//     p.textContent = val;
//     // ajouter le paragraphe dans la div
//     todoList.appendChild(p);

//     p.addEventListener("click", () => {
//         p.style.color = "pink";
//         p.style.fontSize = "7em";
//         // if (p.style.color == "red") {
//         //     p.style.color = "blue";
//         // } else {
//         //     p.style.color = "red";

//         // }
//     })

// });

$("#add_todo").on("click", (e) => {
  e.preventDefault();
  let val = $("#todo").val();
  $("#todolist")
    .append("<p>" + val + "</p>")
    .on("click", (e) => {
      e.target.style.color = "red";
    });
});
