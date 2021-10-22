// function test(){
//     console.log('test');
// };

// test();

// function addNum(a,b){
//     console.log(a + b);
// };

// addNum(100,200);
// addNum(5,6);
// addNum(1,2);
// addNum(1,-2);

// function getNumArray(num){
//     console.log(num);
//     const array = [];
//     for(let i = 0;i <= num;i++){
//         array.push(i);
//     };
//     return array;
// };

// console.log(getNumArray(10));

// Q1
function numObj(num){
    const array = {};
    array.odd = [];
    array.even = [];
    for(let i = 1;i < num;i++){
        if(i % 2 != 0){
            array.odd.push(i);
        }else{
            array.even.push(i);
        }
    };
    return array;
}

// Q2
function addFruit(array,word){
    array.push(word);
    return array;
};

// Q3
function randomNum(num){
    const rand = Math.ceil(Math.random() * num)
    return rand;
};

// Q4
function randomRangeNum(min,max){
    min--
    const rand = Math.ceil(Math.random() * (max - min)) + min;
    return rand;
}

// Q5
function aAa(word){
    if(word.length > 4){
        word = word.slice(0,4) + "…";
    }
    return word;
}

// Q6
function getMoneyFormat(num){

    let value = "";
    let numstring = num.toString();

    for(let i = 0 ; i < Math.floor(numstring.length / 3);i++){
        if(Math.floor(numstring.length % 3) == 0 && i ==Math.floor(numstring.length / 3) - 1){
            value = numstring.slice(numstring.length - (i * 3) - 3,numstring.length - (i * 3)) + value;
        }else{
        value = "," + numstring.slice(numstring.length - (i * 3) - 3,numstring.length - (i * 3)) + value;
        }
    }

    value = numstring.slice(0,Math.floor(numstring.length % 3)) + value
    return value;
}


var num = 12345;
console.log(getMoneyFormat(num));
