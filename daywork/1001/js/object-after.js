// //連想配列
// const enpty = {};
// const fruits = {
//     red: 'apple',
//     orabge: 'orange',
//     yellow: 'remon'
// };

// console.log(enpty)
// console.log(fruits)

// console.log(fruits.red)
// console.log(fruits['red'])

// const color = 'yellow'
// console.log(fruits[color])

// const num = {
//     a: ['1','2','3'],
//     b: ['4','5','6'],
//     c: ['7','8','9']
// };

// console.log(num)
// console.log(num.b)
// console.log(num.b[1])

// const cnum = num.c
// console.log(cnum)
// console.log(cnum[1])

const janken = ['ぐー','ちょき','ぱー']

const user1 = janken[Math.floor(Math.random() * janken.length)]
const user2 = janken[Math.floor(Math.random() * janken.length)]

console.log('user1:',user1,'  user2:',user2)

if(user1 === user2){
    console.log('あいこです')
}else if(
    user1 === 'ぐー' && user2 === 'ちょき' ||
    user1 === 'ちょき' && user2 === 'ぱー' ||
    user1 === 'ぱー' && user2 === 'ぐー'
){
    console.log('user1の勝利です')
}else{console.log('user2の勝利です')}