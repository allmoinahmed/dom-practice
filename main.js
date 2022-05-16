let ulOne = document.querySelector('.product-collection')

let liOne = document.createElement('li')
liOne.className = 'product-collection-item'
liOne.appendChild(document.createTextNode('New LI'))
ulOne.appendChild(liOne)

let ulTwo = document.createElement('ul')
ulTwo.className = 'New-Ul'
liOne.append(ulTwo)

let liTwo = document.createElement('li')
liTwo.className = 'product-collection-item'
liTwo.appendChild(document.createTextNode('Multi Level LI'))

ulTwo.appendChild(liTwo)









