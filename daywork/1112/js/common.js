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
    selectItem(culletnum -= 1)
})

next.addEventListener('click', () => {
    selectItem(culletnum + 1)
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

    const maxnum = tabItems.length - 1
    const minnum = 0

    if(num < minnum){num = minnum}
    else if(num > maxnum){num = maxnum}

    tabItems.forEach((tabItem, i) => {
        tabItem.classList.remove('on')
        contentsItems[i].classList.remove('on')
    })

    tabItems[num].classList.add('on')
    contentsItems[num].classList.add('on')

    culletnum = num
}