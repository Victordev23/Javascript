function addTela(num) {
    const result = document.getElementById("result").innerHTML;



    if (['+', '-', '*', '/'].includes(result.slice(-1)) && ['+', '-', '*', '/'].includes(num)) {
        return;
    }


    if (result.length <= 32) {
        document.getElementById("result").innerHTML += num;
    } else {
        alert("Insira um número com 15 dígitos ou menos");
    }
}

function limparTela() {
    document.getElementById("result").innerHTML = "";
}


function calcular() {
    const result = document.getElementById("result").innerHTML;

    const ultDig = result.slice(-1);

    const primDig = result.charAt(0);

    if (primDig === '.') {
      
        alert("Erro na expressão")

        if (result.includes('.')) {
            return;
        }
       
    }

    if (!isNaN(ultDig)) {
        const resultado = eval(result);
        document.getElementById("result").innerHTML = resultado;
    } else {

        alert("Erro na expressão");

    }

}

function apagar() {

        const result = document.getElementById("result").innerHTML;
        
        

            const novaExpressao = result.slice(0, -1);
            document.getElementById("result").innerHTML = novaExpressao;
        
}