const tabItems = Array.from(document.querySelectorAll('.tab-item'))
const contentsItems = Array.from(document.querySelectorAll('.contents-item'))
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')


prev.addEventListener('click', () => {
    console.log('a!')
})

console.log(tabItems)

let culletnum = 0

prev.addEventListener('click', () => {
    if(culletnum > 0){culletnum -= 1}
    selectItem(culletnum)
})

next.addEventListener('click', () => {
    if(culletnum < tabItems.length - 1){culletnum += 1}
    selectItem(culletnum)
})

tabItems.forEach((tabItem) => {
    tabItem.addEventListener('click', () => {
        culletnum = tabItems.indexOf(tabItem)
        console.log(culletnum)
        selectItem(culletnum)
    })
})

// function -------------------------------------------------

function selectItem(num){
    tabItems.forEach((tabItem) => {
        tabItem.classList.remove('on')
    })
    contentsItems.forEach((contentsItem) => {
        contentsItem.classList.remove('on')
    })

    tabItems[num].classList.add('on')
    contentsItems[num].classList.add('on')

    culletnum = num
}