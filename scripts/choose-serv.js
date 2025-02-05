$(document).ready(function() {
    $(".donate-serv").on("click", function() {
        $(".donate-serv").removeClass("active").addClass("inactive"); // Делаем все кнопки неактивными
        $(this).removeClass("inactive").addClass("active"); // Делаем кликнутую кнопку активной
    });
});
