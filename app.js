// HAMBURGER DOM ELEMENTS
const bars = document.querySelector('.bars')
const times = document.querySelector('.times')
const menu = document.querySelector('.menu')
const ul = document.querySelector('.ul')

// HAMBURGER IMPLEMEMTATION
bars.addEventListener('click', function(){
    menu.style.height = '90vh'
    menu.style.display = 'block'
    ul.style.display = 'block'
    bars.style.display = 'none'
    times.style.display = 'initial'
})

times.addEventListener('click', function(){
    menu.style.height = '0vh'
    ul.style.display = 'none'
    bars.style.display = 'initial'
    times.style.display = 'none'
})