// //開発ツールのコンソールにログを出力
// console.log('test')

// //一行コメント
// /*
// 複数行コメント
// 複数行コメント
// */

// //変数に１００を代入
// //再代入不可
// const num = 100
// console.log(num)

// //再代入可
// let num2 = 100
// num2 = 200
// console.log(num2)



// console.log(1 + 3)
// console.log(3 - 1)
// console.log(2 * 3)
// console.log(10 / 2)
// console.log(10 % 3)

// let i = 0
// console.log(i)
// i += 1
// console.log(i)
// i += 1
// console.log(i)
// i += 1
// console.log(i)
// i += 1
// console.log(i)

// i++
// console.log(i)
// i++
// console.log(i)
// i++
// console.log(i)
// i++
// console.log(i)

// console.log(10 == 20)
// console.log(10 == 10)

// console.log(10 !== 20)
// console.log(10 !== 10)


// console.log(10 > 20)
// console.log(10 < 20)

// console.log(10 < 10)
// console.log(10 > 10)
// console.log(10 <= 10)
// console.log(10 >= 10)

// const a = 100

// console.log(true && true)
// console.log(false && false)


// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

// console.log(true)
// console.log(!(true))

// //文字列の場合、''で囲う
// const str = '文字列'
// console.log(str)

// // 数字 number
// const num = 12
// const num1 = -1
// console.log(num, num1)
// console.log(typeof num)



// // 論理値 boolean true falseがあります
// const bool = true
// const bool2 = false

// console.log(bool, bool2)
// console.log(typeof bool)

// console.log(10 + 10)
// console.log('10' + 10, typeof ('10' + 10))

// const width = '10px'
// console.log(width + 10)
// console.log(parseInt(width) + 10)

// console.log((10).toString() + 10)

// console.log(Boolean(1))
// console.log(Boolean(-1))
// console.log(Boolean(0))
// console.log(Boolean('ans'))
// console.log(Boolean('0'))
// console.log(Boolean(''))

// console.log(undefined)
// console.log(null)

// console.log(Boolean(undefined))
// console.log(Boolean(null))

// const num = 10
// if(num === 10){
//     console.log('numは10です')
// }else if(num > 5){
//     console.log('numは5以上です')
// }else{
//     console.log('numは10ではありません')
// }

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 0; i <= 10; i += 2){
//     console.log(i)
// }

// for(
//     let i = 0, j = 10;
//     i < 10, j > 0;
//     i++, j--
// ){
//     console.log(i,j)
// }

// for(let i = 0;i <= 100;i++){
//     if(i % 2 === 0 && i !== 0){
//         console.log(i)
//     }
// }

// for(let i = 0;i <= 100;i++){
//     if(i >= 10 && i <= 30){
//         console.log(i)
//     }else if(i >= 70 && i <= 90){
//         console.log(i)
//     }
// }

// for(let i = 0;i <= 100;i++){
//     if(i % 3 === 0 && i !== 0){
//         console.log(i)
//     }
// }

for(let i = 1900;i <= 2100;i++ ){
    if(i % 4 === 0 &&( i % 100 !== 0 || i % 400 === 0)){
        console.log(i)
    }
}