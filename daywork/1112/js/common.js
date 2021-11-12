const button = document.querySelector('.button')
const buttons = document.querySelectorAll('.button')

console.log(document)
console.log(button)
console.log(buttons)

// button.classList.add('on')

const gnavItems = document.querySelectorAll('.gnav-item')

console.log(gnavItems)

// gnavItems.forEach((gnavItem, i) => {
//     console.log(gnavItem)
//     console.log(i)
//     gnavItem.classList.add('on')
//     if(i > 1) {
//     gnavItem.style.backgroundColor = 'yellow'
//     }
// })

gnavItems.forEach((gnavItem) => {
    gnavItem.addEventListener('click', () => {
    gnavItem.style.backgroundColor = '#555'
    console.log('click!!')
    })
})