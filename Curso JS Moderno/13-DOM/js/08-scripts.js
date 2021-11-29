pestaña = "App 8";
console.log(pestaña);

const nav = document.querySelector('.navegacion');
console.log(nav);
console.log(nav.childNodes); // Los espacios en blanco se consideran elementos 
console.log(nav.children); //Se quitan los elementos en blanco

console.log(nav.children[1].nodeName);
console.log(nav.children[1].nodeType);

const card3 = document.querySelector('.card');
card3.children[1].children[1].textContent = "Nuevo heading desde traversing the DOM";
card3.children[0].src = 'img/newyork1.jpg';
console.log(card3.children[0]);

console.log(card3.parentNode);

console.log(card3.parentElement.parentElement.parentElement);

console.log(card3.nextElementSibling);
console.log(card3.nextElementSibling.nextElementSibling);

const ultimocard = document.querySelector('.card:nth-child(4)');
console.log(ultimocard.previousElementSibling);

console.log(nav.firstElementChild);
console.log(nav.lastElementChild);