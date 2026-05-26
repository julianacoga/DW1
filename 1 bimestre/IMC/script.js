function calcular() {
    let a = parseFloat(document.getElementById("inputAltura").value);
    let p = parseFloat(document.getElementById("inputPeso").value);
    
    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");
    if ((!a || !p || a <= 0 || p <= 0)) {   
        footer.classList.add("erro");
        mensagem.innerHTML = "Preencha os campos corretamente";
        document.getElementById("resp").innerHTML = "-";
        return;
    }
    footer.classList.remove("erro");

    let imc = p / (a * a);

    if (imc <18.5) {
        mensagem.innerHTML = "Abaixo do peso";
    } else if (imc <25) {
        mensagem.innerHTML = "Peso normal";
    } else if (imc <30) {
        mensagem.innerHTML = " Sobrepeso";
    } else if (imc <35) {
        mensagem.innerHTML = "Obesidade grau I";
    } else if (imc <40) {
        mensagem.innerHTML = "Obesidade grau II";
    } else {
        mensagem.innerHTML = "Obesidade grau III";
    }


        document.getElementById("resp").innerHTML = "IMC: " + imc.toFixed(2);
}

