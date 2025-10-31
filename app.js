'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){

document.body.classList.toggle('dark-theme')

var className = document.body.className;
if(document.body.classList.contains ('dark-theme')) {
    this.textContent = "Claro";
} 
else {
    this.textContent = "Escuro";
}
});