let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status = 200)
            console.log(xhr.responseText);
    }
}
xhr.send();c

function buscaCep() {
    let inputCep = document.querySelector('input\[name=cep\]');
    let cep = inputCep.value.replace('-', '');
    let url = 'http://viacep.com.br/ws/' + cep + '/json';
    let xhr = new XMLHttpRequest(); xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status = 200) preencheCampos(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
}

console.log(JSON.parse(xhr.responseText));