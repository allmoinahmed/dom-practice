// Creating Element
// Selecting Element
// Reading Element
// Update or Edit existing element
// removing element

// Selecting Element
// id (#)
// class(.)
// Tag

// Selecting Element
const h1Elm = document.querySelector('h1')
// const containerElm = document.querySelector('.container')
// const navElm = document.querySelector('#nav')
// const FirstElm = document.querySelector('#nav .first')
// console.log(FirstElm);

// // id, element, class
// const navEle = document.getElementById('nav')
// console.log(navEle);



// reading elements
// h1Elm.textContent = 'Our new <em>content</em>'
h1Elm.innerHTML = 'Our new <em>content</em>'

console.log(h1Elm.textContent);