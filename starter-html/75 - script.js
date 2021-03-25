// Adicionando elementos
const div = document.createElement('div')
div.innerHTML = "Olá devs!"

// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)

const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)