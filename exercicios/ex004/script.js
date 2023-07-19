
        //parte do seno
        var tsen = document.getElementById("tsen");

        function clickSen() {
            if (tsen.style.display == 'block') {
                tsen.style.display = 'none';
            } else {
                tsen.style.display = 'block';
            }
        }

        function calcularSeno() {
            var co = Number(document.getElementById('sco').value);
            var hip = Number(document.getElementById('sh').value);

            var rsen = (co / hip).toFixed(3);

            document.getElementById('rsen').textContent = rsen;
        }

        //parte do cosseno
        var tcos = document.getElementById("tcos");

        function clickCos() {
            if (tcos.style.display == 'block') {
                tcos.style.display = 'none';
            } else {
                tcos.style.display = 'block';
            }
        }

        function calcularCos() {

            var ca = Number(document.getElementById('cca').value);
            var hip = Number(document.getElementById('ch').value);
            var rcos = (ca / hip).toFixed(3);

            document.getElementById('rcos').textContent = rcos;

        }

        //parte da hipotenusa
        var ttg = document.getElementById("ttg");

        function clickTg() {
            
            if (ttg.style.display == 'block') {
                ttg.style.display = 'none';
            } else {
                ttg.style.display = 'block';
            }
        }

        function calcularTg() {

            var hica = Number(document.getElementById('hca').value);
            var hico = Number(document.getElementById('hco').value);
            var rtg = (hico / hica).toFixed(3);
            
            document.getElementById('rtg').textContent = rtg;

        }