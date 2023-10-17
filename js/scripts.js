document.addEventListener("DOMContentLoaded", function() {

    const cantidadS = document.getElementById("cantidadN");
    const categoria = document.getElementById("categoryS");
    const totalMontos = document.getElementById("totalMonto");
    const sumarBotons = document.getElementById("sumarBoton");


    sumarBotons.addEventListener("click", function() {

        const cant = parseInt(cantidadS.value);
        const category = categoria.value;


        const precios = {
            Estudiante: 200,
            Trainee: 200,
            Junior: 200
        };

        const descuentos = {
            Estudiante: 0.8, 
            Trainee: 0.5, 
            Junior: 0.15 
        };

        const subtotal = cant * precios[category];

        const total = subtotal - (subtotal * descuentos[category]);

        totalMontos.textContent = total.toFixed(2);
    });
});


document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");
    const clearButton = document.getElementById("clearButton");


    clearButton.addEventListener("click", function() {

        form.reset();
    });
});