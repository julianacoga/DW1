function calcular(){
    let horas = parseFloat(document.getElementById("horas").value);
    let clienteFrequente = document.getElementById("cliente").checked;
    let carroGrande = document.getElementById("tamanho").checked;
    let valor = 0;

    if (horas >= 24) {
        let dias = Math.floor(horas / 24);
        let resto = horas % 24;

        valor = dias * 60;

        if (resto > 0) {
            if (resto <= 1) {
                valor += 5;
            } else {
                valor += 5 + (resto - 1) * 2.5;
            }
        }

    } else {
        if (horas <= 1) {
            valor = 5;
        } else {
            valor = 5 + (horas - 1) * 2.5;
        }
    }

    if (carroGrande) {
        valor *= 1.25;
    }

    if (clienteFrequente) {
        valor *= 0.95;
    }

    document.getElementById("valor").innerText = 
        "R$ " + valor.toFixed(2);
}