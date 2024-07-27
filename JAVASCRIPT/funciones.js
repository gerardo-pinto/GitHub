let paises = [];

function agregarPais() {
    const input = document.getElementById('nombrePais');
    const mensaje = document.getElementById('mensaje');
    const repetido = document.getElementById('repetido');
    const paisesDiv = document.getElementById('paises');
    const pais = input.value.trim();

    if (pais === "") {
        error.innerHTML = "ESTA SIN NINGUNA CUSTION";
        return;
    }

    if (paises.includes(pais)) {
        error.innerHTML = "PAIS REPETIDO";
        return;
    }

    if (paises.length < 5) {
        paises.push(pais);
        paisesDiv.innerHTML = paises.join("<hr>");
        mensaje.innerHTML = '';
        error.innerHTML = '';
    } else {
        mensaje.innerHTML = 'SOLO 5 PAISES SINO EL PROFE SE ENOJA... Y HUGO TAMBIEN';
    }

    input.value = '';
}