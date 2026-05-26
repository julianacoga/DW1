function calcular() {
    let total = 0;

    const produtos = {
        cachorroQuenteClassico: 22.00,
        cachorroQuenteDuplo: 25.00,
        xsalada: 20.00,
        refrigerante350: 6.00,
        refrigerante600: 9.00,
        refrigerante1: 12.00
    };

    for (let id in produtos) {
        let quantidade = parseInt(document.getElementById(id).value) || 0;

        total += produtos[id] * quantidade;
    }

    document.getElementById("valor").innerText =
        "R$ " + total.toFixed(2);
}