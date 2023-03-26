const relogio = document.querySelector('.relogio');

let seconds = 0;
let timer;

function getTime(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function start() {
    timer = setInterval(function () {
        seconds++;
        relogio.innerHTML = getTime(seconds);
    }, 1000);
    relogio.classList.remove('pausado');
}

document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('zerar')) {
        clearInterval(timer);
        seconds = 0;
        relogio.innerHTML = "00:00:00";
        relogio.classList.remove('pausado');
        relogio.classList.remove('rodando')
    }

    if (element.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.remove('rodando')
        relogio.classList.add('pausado');
    }

    if (element.classList.contains('iniciar')) {
        clearInterval(timer);
        relogio.classList.add('rodando');
        start();
    }
});



