// Criando e adicionando elementos

// creatElement
const div = document.createElement('div')
div.innerHTML = "Olá devs!"

// append prepend
const body = document.querySelector('body')
body.append(div)
body.prepend(div)