// Creating Multi Level UL LI
let ulOne = document.querySelector('.product-collection')

let liOne = document.createElement('li')
liOne.className = 'product-collection-item'
liOne.appendChild(document.createTextNode('My New Element'))
ulOne.appendChild(liOne)

liOne.classList.add('lastLi')

let ulTwo = document.createElement('ul')
ulTwo.className = 'product-collection-two'

liOne.appendChild(ulTwo)

let liTwo = document.createElement('li')
liTwo.className = 'product-collection-item'
liTwo.appendChild(document.createTextNode('My Second Items'))

ulTwo.appendChild(liTwo)


