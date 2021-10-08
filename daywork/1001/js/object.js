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


// //befor
// const janken = ['ぐー','ちょき','ぱー']
// const result = ['user1の勝利です','user2の勝利です','あいこです']

// const user1 = janken[Math.floor(Math.random() * janken.length)]
// const user2 = janken[Math.floor(Math.random() * janken.length)]

// console.log('user1:',user1,'  user2:',user2)

// if(user1 === 'ぐー'){
//     if(user2 === 'ぐー'){console.log(result[2])}
//     else if(user2 === 'ちょき'){console.log(result[1])}
//     else if(user2 === 'ぱー'){console.log(result[0])}
// }else if(user1 === 'ちょき'){
//     if(user2 === 'ぐー'){console.log(result[1])}
//     else if(user2 === 'ちょき'){console.log(result[2])}
//     else if(user2 === 'ぱー'){console.log(result[0])}
// }else if(user1 === 'ぱー'){
//     if(user2 === 'ぐー'){console.log(result[0])}
//     else if(user2 === 'ちょき'){console.log(result[1])}
//     else if(user2 === 'ぱー'){console.log(result[2])}
// }else{console.log('eller')}


//After
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


//js問題

//Q1
const num1to50 = []
const num50to1 = []

for(i = 0; i <= 50; i++){
    num1to50.push(i)
    num50to1.push(50 - i)
}

console.log(num1to50)
console.log(num50to1)


//Q2
const fruits  = ['りんご', 'バナナ', 'パイナップル', 'ぶどう', 'すいか', 'めろん'];

for(key in fruits){
    console.log(fruits[key])
}


//Q3
const fruits2 = {
    red : ['りんご', 'さくらんぼ', 'いちご'],
    orange : ['かき', 'みかん', 'びわ'],
    yellow : ['バナナ', 'パイナップル', 'レモン']
};

for(color in fruits2){
    console.log(color,'(',fruits2[color][0],'・',fruits2[color][1],'・',fruits2[color][2],')');
}

//Q4
const num = {};
num.even = [];
num.odd = [];

for(i = 0; i <= 100; i++){
    if(i % 2 === 0 || i === 0){
        num.even.push(i)
    }else{
        num.odd.push(i)
    }
}

console.log(num)