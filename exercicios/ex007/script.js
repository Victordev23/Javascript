function clickCalcular() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var inte = Number(document.getElementById('inte').value)


    if (inicio == 0 || fim == 0 || inicio == fim || inte > fim, inicio) {
        document.getElementById('escrever').textContent = ('Insira um valor válido. Os valores não podem ser: iguais ou com intervalo entre eles maiores que o inicio ou fim.')
    }

    else {
        //ordem crescente
        if (inicio < fim) {
            document.getElementById('escrever').textContent = (`Contando:`)

            for (var r = inicio; r < fim; r += inte) {
                document.getElementById('escrever').textContent += (` ${r} ➡️`)
            }
            document.getElementById('escrever').textContent += (`🏁`)
        }

        //ordem decrescente 
        else {

            document.getElementById('escrever').textContent = (`Contando:`)

            for (var r = inicio; r >= fim; r -= inte) {
                document.getElementById('escrever').textContent += (` ${r} ➡️`)
            }
            document.getElementById('escrever').textContent += (`🏁`)
        }
        
        
    }

}