const tabItems = Array.from(document.querySelectorAll('.tab-item'))
const contentsItems = Array.from(document.querySelectorAll('.contents-item'))
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')


prev.addEventListener('click', () => {
    console.log('a!')
})

console.log(tabItems)

let currentnum = 0

prev.addEventListener('click', () => {
    selectItem(currentnum - 1)
})

next.addEventListener('click', () => {
    selectItem(currentnum + 1)
})

tabItems.forEach((tabItem) => {
    tabItem.addEventListener('click', () => {
        currentnum = tabItems.indexOf(tabItem)
        console.log(currentnum)
        selectItem(currentnum)
    })
})

// function -------------------------------------------------

function selectItem(num){

    const maxnum = tabItems.length - 1
    const minnum = 0

    num = Math.max(minnum, Math.min(maxnum, num));

    tabItems.forEach((tabItem, i) => {
        tabItem.classList.remove('on')
        contentsItems[i].classList.remove('on')
    })

    tabItems[num].classList.add('on')
    contentsItems[num].classList.add('on')

    currentnum = num
}