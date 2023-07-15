var tempo = new Date();
var horario = tempo.getHours();
var minutos = tempo.getMinutes();

if(horario >= 0 && horario <12) {
    manha.style.display = 'block'

    document.body.style.background = '#E1C231'
    

    document.getElementById('escrever').textContent = (`São ${horario} horas e ${minutos} minutos. Bom dia!`);
    
}

else if (horario >= 12 && horario < 18){
    tarde.style.display = 'block'

    document.getElementById('escrever').textContent = (`São ${horario} horas e ${minutos} minutos. Boa tarde!`);

    document.body.style.background = '#6E607A'

    

}

if (horario >= 18) {
    noite.style.display = 'block'

    document.body.style.background = '#003B7B'

    document.getElementById('escrever').textContent = (`São ${horario} horas e ${minutos} minutos. Boa noite!`);

}