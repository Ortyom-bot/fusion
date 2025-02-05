$(document).ready(function () {
  $(".privilege-item").on("click", function () {
    $(".privilege-item").removeClass("active"); // Убираем активность у всех кнопок
    $(this).addClass("active"); // Добавляем активность на выбранной кнопке
  });
});
