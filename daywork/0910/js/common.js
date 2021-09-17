console.log('test')

const menu = document.querySelector('.menu-button')
const gnav = document.querySelector('.gnav')
const close = document.querySelector('.gnav-close')

console.log(menu,gnav)

menu.addEventListener('click', () => {
    console.log('menu-button click!')

    gnav.classList.toggle('on')
})

close.addEventListener('click', () => {
    console.log('close click!')

    gnav.classList.remove('on')
})