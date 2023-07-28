var col = [];

function verificarVal(num) {
    var busc = col.indexOf(num);

    if (busc !== -1 || num < 1 || num > 100) {
        return false
    } else {
        col.push(num)
        return true
    }
}

function clickAdd() {
    var num = Number(document.getElementById('inp-num').value);

    if (verificarVal(num)) {
        var quad = document.getElementById('quadro');
        var opt = document.createElement('option');
        opt.text = `Seu valor é ${num}`
        quad.appendChild(opt)
        var escrever = document.getElementById('escrever');
        escrever.textContent = '';

    } else {
        alert('Insira um valor entre 1 e 100 e diferente de algum valor que você digitou.')
    }
}

function clickFin() {
    var escrever = document.getElementById('escrever');
    escrever.textContent = '';
    
    if (col == 0) {
        alert('Insira um valor antes!')
    }

    else {
        //ordenando os numeros
        col.sort((a, b) => a - b);

        //Numeros cadastrados
        var tam = col.length

        //maior num
        var ult = col[col.length - 1];

        //menor num
        var prim = col[0]

        //soma
        var soma = 0
        for (var pos in col) {
            soma += col[pos];
        }

        //media
        var med = (soma / col.length).toFixed(3)

        //escrever
        escrever.innerHTML +=
            (`Ao todo  temos ${tam} valores<br>
          Seu maior valor é ${ult}<br>
          Seu menor valor é ${prim}<br>
          A soma dos valores é ${soma}<br>
          A média é ${med}`);

    }
    
   
}
