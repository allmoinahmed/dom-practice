const oldHeading = document.querySelector('.h1')
const newH1 = document.createElement('h1')
newH1.appendChild(document.createTextNode('My New Product List'))
const container = document.querySelector('.container')

// container.replaceChild(newH1, oldHeading)
// oldHeading.replaceWith(newH1)

const list = document.querySelector('ul.product-collection')
// list.lastElementChild.remove()
list.removeChild(list.lastElementChild)


