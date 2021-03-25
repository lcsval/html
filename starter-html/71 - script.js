// Manipulando conteúdo
// textContent
const textContent = document.querySelector('h1')
textContent.textContent = "Olá devs!"

const innerText = document.querySelector('h1')
innerText.innerText = "Olá devs 2"

const innerHTML = document.querySelector('h1')
innerHTML.innerHTML = "Olá devs 3 <small>!!!</small>"

const input = document.querySelector('input')
input.value = "xyz"

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))

header.removeAttribute('id')