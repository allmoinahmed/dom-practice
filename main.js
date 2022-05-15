// Interacting-and-child-Nodes
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 4 - Comment
// // 5 - document itself
// // 6 - Doctype
 
let val = document.querySelector('.product-collection')
// val = val.childNodes[1].nodeType
if (val.childNodes[1].nodeType !== 3){
    val.childNodes[1].classList.add('MyClass')
}
console.log(val);