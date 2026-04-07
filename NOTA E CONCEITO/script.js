function calcular(){
    const footer = document.getElementById('footer');

    let RA = parseInt(document.getElementById("inputRA").value);
    let nome = document.getElementById("inputNome").value.trim();
    let n1 = parseFloat(document.getElementById("inputNota1").value);
    let n2 = parseFloat(document.getElementById("inputNota2").value);
    let n3 = parseFloat(document.getElementById("inputNota3").value);
    let n4 = parseFloat(document.getElementById("inputNota4").value);
    let ME = parseFloat(document.getElementById("inputMediaExercicio").value); // nome do ID no HTML é inputMediaExercicio

    if(!nome || Number.isNaN(RA) || Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3) || Number.isNaN(n4) || Number.isNaN(ME)){
        document.getElementById("resultado").innerHTML = "Preencha todos os campos corretamente.";
        footer.textContent = "Aviso: preencha todos os campos ao calcular.";
        footer.classList.add('warning');
        return;
    }

    footer.classList.remove('warning');
    footer.textContent = "Resultado calculado com sucesso.";

    let MA = (n1 + n2 * 2 + n3 * 3 + n4 * 4 + ME )/11;

    if(MA<4 && MA>=0){
        document.getElementById("resultado").innerHTML = nome + "<br>" + RA + "<br>" + "Média de Aproveitamento: " + MA.toFixed(2) +"<br>" + "REPROVADO" + "<br>" + "Conceito: E";
    } else if(MA<6 && MA>=4){
        document.getElementById("resultado").innerHTML = nome + "<br>" + RA + "<br>" + "Média de Aproveitamento: " + MA.toFixed(2) +"<br>" + "REPROVADO" + "<br>" + "Conceito: D";
    } else if(MA<7.5 && MA>=6){
        document.getElementById("resultado").innerHTML = nome + "<br>" + RA + "<br>" + "Média de Aproveitamento: " + MA.toFixed(2) +"<br>" + "APROVADO" + "<br>" + "Conceito: C";
    } else if(MA<9 && MA>=7.5){
        document.getElementById("resultado").innerHTML = nome + "<br>" + RA + "<br>" + "Média de Aproveitamento: " + MA.toFixed(2) +"<br>" + "APROVADO" + "<br>" + "Conceito: B";
    } else {
        document.getElementById("resultado").innerHTML = nome + "<br>" + RA + "<br>" + "Média de Aproveitamento: " + MA.toFixed(2) +"<br>" + "APROVADO" + "<br>" + "Conceito: A";

    }
}

document.getElementById('btCalcular').addEventListener('click', calcular);