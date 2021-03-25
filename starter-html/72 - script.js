// Alterando estilos
const bdy = document.querySelector('body')
bdy.style.backgroundColor = "red"

bdy.classList.add('active')
console.log(bdy.classList)
bdy.classList.remove('active')
bdy.classList.toggle('active')