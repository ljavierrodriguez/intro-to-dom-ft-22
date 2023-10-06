/* BOM (Browser Object Model) */
/* 

window
    alert()
    confirm()
    prompt()
    open()
    document
*/

/*
// Ejemplo
window.alert("Hola Mundo")
window.confirm("Deseas aprender a programar")
window.prompt("Dime tu nombre");
window.open("https://google.com", "_blank")
*/

/* DOM (Document Object Model) */
/* 

document

getElementById('id')
getElementsByClassName('class')
getElementsByTagName('tag')
getElementsByName('name')

querySelector('selector')
querySelectorAll('selector')

createElement('tag')

*/

console.log(document.getElementById('boton'))
console.log(document.getElementsByClassName('menu-item'))
console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByName('genero'))

console.log(document.querySelector('#boton'))
console.log(document.querySelector('.menu-item'))
console.log(document.querySelectorAll('.menu-item'))
console.log(document.querySelectorAll('li'))
console.log(document.querySelectorAll('[name=genero]'))

let boton = document.querySelector('#boton');
boton.innerHTML = "Hola desde Javascript";
boton.textContent = "Hola de nuevo";
boton.setAttribute('class', 'btn btn-success')

let icon = document.createElement('i');
icon.setAttribute('class', 'fa-brands fa-js')
boton.appendChild(icon)

boton.style.boxShadow = '3px 3px 5px black';

let menu = document.querySelector('.list-group');

/* let li = document.createElement('li');
li.innerHTML = "Item 6";
li.classList.add('menu-item');

menu.appendChild(li); */



for(let i = 1; i <= 10; i++){
    let li = document.createElement('li');
    li.innerHTML = `Item ${i} `;
    li.classList.add('list-group-item');

    let icon = document.createElement('i');
    icon.setAttribute('class', 'fa-brands fa-js text-warning')
    li.appendChild(icon)

    menu.appendChild(li);
}