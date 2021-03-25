// getElementById() (element)
const byId = document.getElementById('blog-title')
console.log(byId)

// getElementByClassName() (HTMLCollection)
const byClass = document.getElementsByClassName('one')
console.log(byClass)

// getElementByTagName() (HTMLCollection)
const byTag = document.getElementsByTagName('meta')
console.log(byTag)

// querySelector() (element)
const qrySelector = document.querySelector('meta')
console.log(qrySelector)

// querySelectorAll() (Nodelist)
const qrySelectorAll = document.querySelectorAll('.one')
console.log(qrySelectorAll)

qrySelectorAll.forEach(f => console.log(f))