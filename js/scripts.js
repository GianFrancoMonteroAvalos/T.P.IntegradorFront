

function calcularTotal() {
    const cant = document.getElementById('cantidadN').value;
    const valor = document.getElementById('categoryS').value;
    let resumenTotal = 0;

    if (valor == 0) {
        resumenTotal = 200 * cant;
    } else if (valor == 1) {
        resumenTotal = (200 * 0.2) * cant;
    } else if (valor == 2) {
        resumenTotal = (200 * 0.5) * cant;
    } else if (valor == 3) {
        resumenTotal = (200 * 0.8) * cant;
    }

    document.getElementById('totalMonto').innerText = resumenTotal.toFixed(2);
}

const btnclick = document.getElementById('sumarBoton');
btnclick.addEventListener('click', calcularTotal);