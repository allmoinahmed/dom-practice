const h1 = document.querySelector('.h1') 
const li = document.querySelectorAll('li') 
const inputEle = document.getElementById('productname') 
const forms = document.forms[0] 
function eventFunc(evt){
    evt.preventDefault()
    console.log(evt);
    console.log('Type: ' + evt.type);
    console.log('Value: ' + inputEle.value);

}
h1.addEventListener("click", eventFunc)

li.forEach(items => {
    items.addEventListener("click", eventFunc)
})

forms.addEventListener("submit", eventFunc)
