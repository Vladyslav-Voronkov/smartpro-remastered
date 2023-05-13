// Система работы с графиками для smartpro
// todo: В будущем добавить возможность подключать несколько графиков на одной странице
// todo: Исправить ошибки typescript Аргумент типа "number" нельзя назначить параметру типа "string" 37 строка
var chart = document.getElementById("chart"); // ловлю элемент chart по id
var data; // создаю переменную data
var color = chart ? chart.getAttribute("data-color") : ""; // ловлю атрибут data-color
// нахожу максимальное значение в массиве data что бы потом использовать в ширине бара
var maxValue = Math.max.apply(Math, data.map(function (d) {
    return d.value;
}));
if (data.length === 0) {
    // если длина массива data равна 0 то отображаю текст "No data" типо нет инфы
    if (!chart) {
        throw new Error("Element not found");
    }
    var h1 = document.createElement("h1");
    h1.classList.add("mt-2");
    h1.classList.add("text-center");
    h1.classList.add("font-bold");
    h1.textContent = "No data";
    chart.appendChild(h1);
}
else {
    // если длина массива data не равна 0 то отображаю бары
    data.forEach(function (d) {
        if (!chart) {
            throw new Error("Element not found");
        } // если chart не найден то выкидываю ошибку
        var bar = document.createElement("div"); // создаю элемент div
        bar.classList.add("chart__bar"); // добавляю класс chart__bar
        bar.style.width = "0px";
        bar.style.width = "".concat((d.value * 100) / maxValue, "%"); // высчитываю ширину бара по максимальному значению
        bar.textContent = d.name; // добавляю текст в бар
        bar.style.color = "white"; // добавляю цвет текста
        chart.appendChild(bar); // добавляю бар в chart
        if (color) {
            // если есть атрибут data-color то добавляю цвет бару
            bar.style.backgroundColor = color;
        }
        else {
            // если нет атрибута data-color то добавляю цвет бару по умолчанию
            bar.style.backgroundColor = "black";
        }
        // добавляю тултипы при наведении мышки
        bar.addEventListener("mouseover", function () {
            var tooltip = document.createElement("div");
            tooltip.classList.add("chart__tooltip");
            tooltip.textContent = d.value.toString();
            bar.appendChild(tooltip);
        });
        // удаляю тултипы при уходе мышки
        bar.addEventListener("mouseout", function () {
            var tooltip = bar.querySelector(".chart__tooltip");
            if (tooltip) {
                bar.removeChild(tooltip);
            }
        });
    });
}
