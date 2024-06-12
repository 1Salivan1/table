document.addEventListener("DOMContentLoaded", function () {
  const selects = document.querySelectorAll(".ui-select");

  selects.forEach((select) => {
    select.addEventListener("click", function (event) {
      event.stopPropagation();

      document.querySelectorAll(".ui-select-options").forEach((options) => {
        if (options !== this.nextElementSibling) {
          options.classList.add("hidden");
        }
      });
      const options = this.nextElementSibling;
      if (options) {
        options.classList.toggle("hidden");
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".ui-select-wrap")) {
      document.querySelectorAll(".ui-select-options").forEach((options) => {
        options.classList.add("hidden");
      });
    }
  });
});
