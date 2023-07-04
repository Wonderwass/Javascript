$("#dropdown").on("change", () => {
  if ($("#dropdown").val() == 1) {
    $("#message").text("vous avez choisi l'option 1");
  } else if ($("#dropdown").val() == 2) {
    $("#message").text("vous avez choisi l'option 2");
  } else {
    $("#message").text("vous avez choisi l'option 3");
  }
});
