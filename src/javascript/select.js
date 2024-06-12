document.addEventListener("DOMContentLoaded", function () {
  // Находим все элементы селектов
  const selects = document.querySelectorAll(".ui-select");

  selects.forEach((select) => {
    // Добавляем обработчик события для каждого селекта
    select.addEventListener("click", function (event) {
      event.stopPropagation(); // Останавливаем всплытие события

      // Скрываем все открытые списки опций, кроме текущего
      document.querySelectorAll(".ui-select-options").forEach((options) => {
        if (options !== this.nextElementSibling) {
          options.classList.add("hidden");
        }
      });

      // Находим соответствующий список опций и переключаем его видимость
      const options = this.nextElementSibling;
      if (options) {
        options.classList.toggle("hidden");
      }
    });
  });

  // Закрываем список опций, если клик происходит вне селекта
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".ui-select-wrap")) {
      document.querySelectorAll(".ui-select-options").forEach((options) => {
        options.classList.add("hidden");
      });
    }
  });
});
