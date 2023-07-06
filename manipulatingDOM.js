/** Document Object Modeling Day 2
 * creating an element : is very simple and straight forward 
 */
const title = document.createElement('h1')
title.className = 'title'
title.style.fontSize = '24'
title.textContent = 'creating an element using DOM in javascript'
console.log(title)

//To create multiple elements we should use loop.
let title2
for (let i = 0; i < 3; i++) {
    title2 = document.createElement('h1')
    title2.className = 'title2'
    title2.style.fontSize = '24px'
    title2.textContent = i
    console.log(title2) }


// innerHTML to change or remove the inner html content 

const ul = document.querySelector('ul')
ul.innerHTML = 'content changed'
console.log(ul)