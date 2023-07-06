/** Document Object Modeling Day 2
 * creating an element : is very simple and straight forward 
 */

const title = document.createElement('h1')
title.className = 'title'
title.style.fontSize = '24'
title.style.color = 'red'
title.textContent = 'Creating HTML element in DOM Day 2'
console.log(title)