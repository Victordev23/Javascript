function clickCalcular() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var inte = Number(document.getElementById('inte').value)


    if (inicio == 0 || fim == 0 || inte == 0) {
        document.getElementById('escrever').textContent = ('Preencha todos os campos')
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