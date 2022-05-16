const h1 = document.querySelector('h1')
h1.addEventListener('click', function(event) {
    console.log(event)
    console.log(event.target.innerText )
    console.log('Click H1');
})




