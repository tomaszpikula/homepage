const firstName = 'Antoni';
const age = '51';

console.log(`Nazywam się ${firstName} i mam ${age} lat `);

const emptyElement = document.querySelector('.introduction__description--js');

emptyElement.innerHTML = 'Tekst wprowadzony przy pomocy JS';

function welcome (firstName, age) {
    console.log(`Witaj ${firstName}, dobrze mieć ${age} lat`);
}

welcome(firstName, age);

const greet = (firstName, age) => {
    console.log(`Witaj ${firstName}, dobrze mieć ${age} lat (fat arrow)`);
}

greet(firstName, age);

greet('Jan', 30);

function calculate (myNumber){
   myNumber = myNumber + 33;
    console.log(myNumber);
    return myNumber*7;
}

const myResult = calculate(5);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})