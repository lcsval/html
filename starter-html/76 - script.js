// Eventos



function print() {
    console.log('print')
}

const input = document.querySelector('input')
input.onmouseenter = function() {
    console.log('ola')
}

const h1 = document.querySelector('h1')
h1.addEventListener('click', function() {
    console.log("hello bla bla")
})

h1.onmouseenter = function() {
    console.log("another function")
}

input.onkeypress = function(event) {
    console.log(event)
}