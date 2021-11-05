// Q1
const luck = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶'];
const rand = Math.floor(Math.random() * luck.length);
console.log(luck[rand]);

//Q1 - 2
function omikuzi(){
    const luck = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶'];
    const rand = Math.floor(Math.random() * luck.length);
    return luck[rand];
}

//Q2
function calcTheNumbersInArray(array){
    let ans = 0;
    for(num in array){
        ans += array[num];
    }
    return ans
}

//Q3
const users = [
    {
      name: '佐藤',
      score: 90
    },
    {
      name: '山田',
      score: 40
    },
    {
      name: '斎藤',
      score: 70
    },
    {
      name: '高橋',
      score: 30
    },
    {
      name: '田中',
      score: 80
    }
];

function resultantOfStudy(array,num){
    let average = 0;
    let result = '';
    for(let stat in array){
        average += array[stat]['score'];
    }
    average = average / array.length

    if(array[num]['score'] > average){
        result = (array[num]['name'] + 'は' + array[num]['score'] + 'で合格です。');
    }else{
        result = (array[num]['name'] + 'は' + array[num]['score'] + 'で失格です。');
    };

    return result;
}

console.log(resultantOfStudy(users,0));
console.log(resultantOfStudy(users,1));
console.log(resultantOfStudy(users,2));
console.log(resultantOfStudy(users,3));
console.log(resultantOfStudy(users,4));