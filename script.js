//var  elemento = document.createElement('li');
//var texto = document.createTextNode('item da lista adicional');

//elemento.appendChild(texto);

    
//var lista = document.getElementsByTagName('ul')[0];
//lista.appendChild(elemento);

var lista = document.getElementsByTagName('ul')[0];
var itens = lista.getElementsByTagName('li');

var elemento = document.createElement('li');

elemento.textContent = 'outro item';

lista.insertBefore(elemento, itens[2]);

lista.removeChild(itens[2])