// const containerIDElm = document.getElementById('container-id')
// const containerClElm = document.getElementsByClassName('container')[0]
// const BodyElm = document.getElementsByTagName('body')[0]
// const BodyElm = document.querySelector('.product-collection-item')
// const BodyElm = document.querySelectorAll('.product-collection-item')


let value = document.getElementsByClassName('product-collection-item')
let val = Array(value)
// console.log(val);

// val.forEach(element => {
//    console.log(node); 
// });

for(let i = 0; i < val.length; i++) {
    console.log(val[i]);
}
for (const items of val) {
    console.log(items);
}