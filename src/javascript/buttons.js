document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".ui-simple-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("simple-btn-active"));

      this.classList.add("simple-btn-active");
    });
  });
});
