function comprar(){
    let tipo = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById("qtd").value);

    if(tipo == "pista"){
        comprarPista(qtd);
    }else if (tipo == "inferior"){
        comprarCadInferior(qtd);
    }else if (tipo == "superior"){
        comprarCadSuperior(qtd);
    }
}

function comprarPista(qtd){
        let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
        if (qtd > qtdPista){
            alert("Quantidade de ingressos insuficiente");
        }else{
           qtdPista = qtdPista - qtd;
           document.getElementById("qtd-pista").textContent = qtdPista;
           alert("Compra realizada com sucesso");

        }
           
    }

function comprarCadInferior(qtd){
        let qtdCadInferior = parseInt(document.getElementById("qtd-inferior").textContent);
        if (qtd > qtdCadInferior){
            alert("Quantidade de ingressos insuficiente");
        }else{
           qtdCadInferior = qtdCadInferior - qtd;
           document.getElementById("qtd-inferior").textContent = qtdCadInferior;
           alert("Compra realizada com sucesso");

        }
    }

function comprarCadSuperior(qtd){
        let qtdCadSuperior = parseInt(document.getElementById("qtd-superior").textContent);
        if (qtd > qtdCadSuperior){
            alert("Quantidade de ingressos insuficiente");
        }else{
           qtdCadSuperior = qtdCadSuperior - qtd;
           document.getElementById("qtd-superior").textContent = qtdCadSuperior;
           alert("Compra realizada com sucesso");
        }
}