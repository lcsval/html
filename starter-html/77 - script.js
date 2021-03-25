const button = document.getElementById('openModal')
const modal = document.querySelector('modal-wrapper')
console.log(button)
console.log(modal)

button.onclick = function(event) {
    modal.classList.remove('invisible')
}

document.onkeydown = function(event) {
    if (event.key === "Escape")
    modal.classList.add('invisible')
}