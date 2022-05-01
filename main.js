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
const navElm = document.querySelector('#nav')
// const FirstElm = document.querySelector('#nav .first')
// console.log(FirstElm);

// // id, element, class
// const navEle = document.getElementById('nav')
// console.log(navEle);



// reading elements
// h1Elm.textContent = 'Our new <em>content</em>'
// h1Elm.innerHTML = 'Our new <em>content</em>'

// console.log(h1Elm.textContent);


// Traversing elements

const firstNavElm = navElm.children[0];
// console.log(firstNavElm.closest('.body'));

// const NavArray = Array.from(navElm.children)
// NavArray.forEach( items => console.log(items))


// Removing elements
//using target element
// firstNavElm.remove()

// Creating Element
// <li class="first">First</li>
// const liElem = document.createElement('li')
// liElem.className = 'five'
// liElem.textContent = 'Five'
// navElm.appendChild(liElem)
// navElm.prepend(liElem)


// insertAdjacentHTML
// insertAdjacentElement

// navElm.insertAdjacentElement('beforeend', liElem)
// navElm.insertAdjacentHTML('afterbegin', '<em>After Begin</em>')



// const NavArray = Array.from(navElm.children)
// NavArray.forEach( (items) => {    
//     items.addEventListener('click', (e) => {
//         console.log(e.target.textContent); 
//     })
// } )



navElm.addEventListener('click', (e) => {
    if (e.target.className === 'five') {
        console.log('You clicked ' + e.target.textContent);
    }
})

const liEmelent = '<li class="five">Five</li>'
navElm.insertAdjacentHTML('beforeend', liEmelent)


// Event Delegation
































