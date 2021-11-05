
// const removeNull = (str) =>
// {
//     for (let i = 0; i < str.length; i++) {

//         //  230.000 => 230

//         if (str[i] == '.' && str[i+1] =='0') {
//             var j = 0; var sum = '';
//             while (str[j] !== '.') {
//                 sum += str[j]
//                 j++;
//             }
//         }

//         //  03.1400 => 3.14

//     if (str[i] == '.' && str[i+1] !=='0'){
//         for(let i = 0; i<str.length; i++)
//         {
//             if(str[i]==0){
//                 str = str.replace(str[i],'')
//                 i--
//             }
//         }
//         return str;

//     }
//     }
//     if(sum > 0)
//     {
//         return sum;

//     }

//         // 00402 => 402
//    if (str.startsWith('0')) {
//             for(let i = 0; i<str.length; i++)
//             {
//             if(str[i] !== '0')
//             {
//                 break;
//             }
//             else
//             {
//                 str = str.replace(str[i], '');
//                 i--;
//                 }
//             }
//             return str;
//         }
//     return str;
// }

// console.log(removeNull("230.000"));
// console.log(removeNull("00402"));
// console.log(removeNull("03.1400"));
// console.log(removeNull("30"));

// // 1-task
// const func = n => {
//     n = Number(n)
//     return n;
// }


// console.log(func("230.000"))
// console.log(func("00402"))
// console.log(func("03.1400"))
// console.log(func("30"))


// //  Task - 3

// const func = (num) => {    
//     var temp = num;
//     var reversed = String(num).split("").reverse().join("");
//     return parseInt(`${temp}${reversed}`);
// }

// console.log(func(123456));
// console.log(func(152));
// console.log(func(123456789));


// //  Task-2

// const func = str => {
//     var sum = [0, 0, 0, 0]
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < str[i].length; j++) {
//             sum[i] += str[i][j].charCodeAt();

//         }
//     }
//     for (let i = 0; i < sum.length; i++) {
//         if (sum[i] == sum[i + 1] && sum[i] == sum[3]) {
//             return true;
//         }
//         else {
//             return false
//         }
//     }
// }

// console.log(func(["@", "@", "@", "@"]));
// console.log(func(["abc", "abc", "abc", "abc"]));
// console.log(func(["&&", "&", "&&&", "&&&&"]));
// console.log(func(["SS", "SS", "SS", "Ss"]));


// // 2-task
// const func = arr => {
//     return arr.reduce((acc, cur) => arr[0] == cur)
// }
// console.log(func(["@", "@", "@", "@"]))
// console.log(func(["abc", "abc", "abc", "abc"]))
// console.log(func(["SS", "SS", "SS", "SS"]))
// console.log(func(["&&", "&", "&&&", "&&&&"]))
// console.log(func(["SS", "SS", "SS", "Ss"]))


// // Task-4

// const func = myString =>{
// var newString = "";
// var wasUpper = false;
// for (var i = 0; i < myString.length; i++)
// {
//     if (!wasUpper && myString[i] == myString.toUpperCase()[i])
//     {
//         newString = newString + " ";
//         wasUpper = true;
//     }
//     else
//     {
//         wasUpper = false;
//     }
//     newString = newString + myString[i];

//     }
//     return newString.trim();
// }
// console.log(func("SheWalksToTheBeach"));
// console.log(func("MarvinTalksTooMuch"));
// console.log(func("TheGreatestUpsetInHistory"));



// var a = 'welcome webbrain'
// console.log(a.repeat(5).toUpperCase());



// 1 masala yengil
// const a = 25.5;
// console.log(Math.round(a))

// const a = 25.5
// console.log(a.toFixed(0))

// 2 masala yengil
// abs
// let a = -50
// console.log((a-a)-a)


// 3 masala yengil
// pow

// var raqam = 2;
// var daraja = 3;

// console.log(raqam ** daraja);

// 4masala yengil

// ceil 

// let a = 100.3;
// console.log(+(a + 0.5).toFixed(0))

// 5 masala
// floor
// let a = 10.9;
// console.log(+(a - 0.5).toFixed(0));

// 6masala

// sqrt
// var a = 16;
// console.log(a ** 0.5)
// console.log(Math.sqrt(a))

// 7masala

// cbrt 

// let a = 125;

// console.log((a**(1/3)));
// console.log(Math.cbrt(a))     



// 8 masala
// min 
// let a = ()       topish kere



//  @param {string} s
//  @return {number}

//  var lengthOfLastWord = function(s) {
//     (lengthOfLastWord.substring(7, 12))
//     return lengthOfLastWord;
// };





// vazifa

// var fruits = ['apple', 12, 'Ananas', 'Orange', 'Banana', 'Kiwi'];
// let resA = 0
// let resB = 0
// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
   
//     for (let j = 0; j < element.length; j++) {
//         const el = element[j];
//         console.log(el, 'j');

//         if (el === 'a') {
//             resA++
//         }

//         if (el === 'b') {
//             resB++
//         }



//     }
 
// }

// console.log(resA, 'a');
// console.log(resB, 'b');



// 2-vazifa

// var raqam = [12,34,45,33,45,223,113];
// var hisob = 0;
// // console.log(raqam.toString());
// for (let i = 0; i < raqam.length; i++) {
//     hisob += raqam[i]
//         }

// console.log(hisob)


// 3-vazifa
// var raqam = [12,10,32,21,33,42,11];


