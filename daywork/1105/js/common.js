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
function calcTheNumbersInArray(numbers){
  let ans = 0;
  numbers.forEach(function(element){ans += element})
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

function resultantOfStudy(users,num){
  let average = 0;
  let result = '';
  users.forEach(function(element){average += element['score']});
  average = average / users.length

  if(users[num]['score'] > average){
    result = (users[num]['name'] + 'は' + users[num]['score'] + 'で合格です。');
  }else{
    result = (users[num]['name'] + 'は' + users[num]['score'] + 'で失格です。');
  };

  return result;
}

for(let num in users){
  console.log(resultantOfStudy(users,num));
}