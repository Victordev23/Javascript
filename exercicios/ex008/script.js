
//multiplicação
function clickTabmul() {
    var val = Number(document.getElementById('vlr').value);
    var ini = 1;
    document.getElementById('tab')
    tab.innerHTML = ' '
    var esc = document.getElementById('esc');

    while (ini <= 10) {
        var opt = document.createElement('option');

        tab.appendChild(opt)
        
        opt.text = `${val} x ${ini} = ${val * ini}`

        ini++
    }
}

//soma
function clickTabsom() {
    var val = Number(document.getElementById('vlr').value);
    var ini = 1;
    document.getElementById('tab')
    tab.innerHTML = ' '
    var esc = document.getElementById('esc');

    while (ini <= 10) {
        var opt = document.createElement('option');

        tab.appendChild(opt)

        opt.text = `${val} + ${ini} = ${val + ini}`

        ini++
    }
}

//subtração
function clickTabsub() {

    var val = Number(document.getElementById('vlr').value);
    var ini = 1;
    document.getElementById('tab')
    tab.innerHTML = ' '
    var esc = document.getElementById('esc');

    while (ini <= 10) {
        var opt = document.createElement('option');
        tab.appendChild(opt)
        var rsub = (ini - val);

        opt.text = `${ini} - ${val} = ${rsub}`

        ini++
    }
}

//divisão
function clickTabdiv() {

    var val = Number(document.getElementById('vlr').value);
    var ini = 1;
    document.getElementById('tab')
    tab.innerHTML = ' '
    var esc = document.getElementById('esc');
    

    while (ini <= 10) {

        var opt = document.createElement('option');

        tab.appendChild(opt)
        var rdiv = (val / ini).toFixed(3);

        opt.text = `${val} : ${ini} = ${rdiv}`
        ini++
    }
}