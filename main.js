// let val = document.querySelector('.product-collection-item')
// val.style.color = 'red'
// val.style.backgroundColor = 'green'
// console.log(val.textContent);
// val.textContent = 'MOin'
// val.innerText = 'MOin'
// val.innerHTML = '<em>MOin</em>'
// val = document.querySelector('a')
// val.setAttribute('href','https://facebook.com')
// console.log(val.className);
// val.className = 'newClass'
// val.classList.add('newClass')
let ul = document.querySelector('.product-collection')
// console.log(val.childNodes);
// console.log(val.children[0].nextElementSibling.nextElementSibling.parentElement.parentElement);
// console.log(val.children[0].nextSibling);
// getNode = val.childNodes[1].nodeType
// if(getNode !== 3){
//     val.classList.add('NewClass')
// }

// const li = document.createElement('li')
// li.className = 'product-collection-item'
// li.appendChild(document.createTextNode('My Lists'))
// ul.prepend(li)

const oldHeading = document.querySelector('.h1')
const container = document.querySelector('.container')
const h1 = document.createElement('h1')
const newHeading = document.createTextNode('My New Heading')
h1.appendChild(newHeading)
// container.replaceChild(h1, oldHeading)
// oldHeading.replaceWith(h1)

const list = document.querySelector('.product-collection')

console.log(list.lastElementChild.remove());
