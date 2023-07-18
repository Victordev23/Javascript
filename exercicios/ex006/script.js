function clickEnviar() {
    var sexm = document.getElementById('masc');
    var sexf = document.getElementById('fem');
    var adn = document.getElementById('idade').value;
    var tempo = new Date();
    var ano = tempo.getFullYear();
    var idtt = Number(ano - adn);
    var foto = document.getElementById('foto');

    //valores aceitos
    if (idtt >= 120 || idtt <= 0 || adn >= ano) {
        document.getElementById('escrever').textContent = (`o valor ${adn} é invalido`)
        window.alert('VALOR INVALIDO!')
    }
    else {
        //parte homem

        if (sexm.checked) {
            if (idtt <= 10) {
                foto.setAttribute('src', 'img-homem-criança.png')
            }

            else if (idtt >= 10 && idtt <= 20) {
                foto.setAttribute('src', 'img-homem-jovem.png')
            }

            else if (idtt >= 20 && idtt <= 59) {
                foto.setAttribute('src', 'img-homem-adulto.png')
            }

            else if (idtt >= 60 && idtt <= 122) {
                foto.setAttribute('src', 'img-homem-idoso.png')
            }
            document.getElementById('escrever').textContent = (`Identificamos um homem de ${idtt} anos!`);
        }


        //parte mulher
        else if (sexf.checked) {

            if (idtt <= 10 && sexf.checked) {
                foto.setAttribute('src', 'img-mulher-criança.png')
            }

            else if (idtt >= 10 && idtt <= 20 && sexf.checked) {
                foto.setAttribute('src', 'img-mulher-jovem.png')
            }

            else if (idtt >= 20 && idtt <= 59 && sexf.checked) {
                foto.setAttribute('src', 'img-mulher-adulta.png')
            }

            else if (idtt >= 60 && idtt <= 122 && sexf.checked) {
                foto.setAttribute('src', 'img-mulher-idosa.png')
            }
            document.getElementById('escrever').textContent = (`Identificamos uma mulher de ${idtt} anos!`);
        }
    }

}