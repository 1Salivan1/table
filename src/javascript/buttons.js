document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".ui-simple-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove the 'active' class from all buttons
      buttons.forEach((btn) => btn.classList.remove("simple-btn-active"));

      // Add the 'active' class to the clicked button
      this.classList.add("simple-btn-active");
    });
  });
});
