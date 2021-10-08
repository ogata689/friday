// const num1 = ['1','2','3','4','5','6'];
// console.log('num is ' + num1.length + '.');

// const num2 = ['7','8'];

// console.log(num1.concat(num2[1,2]));

// const date = [2021,10,08];
// console.log(date,date.join('/'));
// console.log(date,date.join('-'));
// console.log(date,date.join('_'));

// //連想配列のくりかえし
// const colors = {
//     red: '赤',
//     blue: '青',
//     green: '緑'
// };

// for(let color in colors){
//     console.log(color)
//     console.log(colors[color])
// }


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
    console.log(color + '(' + fruits2[color].join('・') + ')')
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