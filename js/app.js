// const myName = "Aung Kyae Mhon";

// console.log(myName);

// let num = 5;

// num = num + 1;
// num = num + 1;
// num = num + 1;
// num = num + 1;

// num += 1;
// num += 1;
// num += 1;
// num += 1;

// ++num;
// ++num;
// ++num;
// ++num;

// console.log(num);

// console.log(++num);

// console.log(num++);
// console.log(num);

// Logical operator && || !
//--------------------------------------------------
//  !     troggle ‌‌နေရာမှာသုံး
// let condition = true;

// console.log(!condition)
// condition=!condition;
// condition=!condition;
// condition=!condition;

// console.log(condition)

// console.log(!(5>10))

// && || *  +

// let condition = true && true && true;
// let condition1 = true && true && false;

// let condition = true || true || true || false;
// let condition1 = false || false || false || false;

// console.log(condition);
// console.log(condition1);


//Conditional expression
//--------------------------------------------------

// let x = 5;
// console.log(x==4 ? true : false)

// let haveUfinishDinner = false;

// console.log(haveUfinishDinner ? "sar pp" : "ma sar ya tay par")

// let haveUfinishDinner = true;

// let result = haveUfinishDinner ? "sar pp" : "ma sar ya tay par";
// console.log(result)


//Function
//--------------------------------------------------

// အသေ

// function intoft(){
//     let inches = 60;
//     let unitconvert = 1/12;
//     return inches * unitconvert;
// }

// console.log(intoft());
// console.log(intoft());

// အရှင်

// function inToft(inches){
//     return inches/12 +"ft"
// }

// console.log(inToft(120));

//========

// function run (text) {
//     return "this is run "+ text
// }

// console.log(run())

//========

// function dot (text = "aaa"){
//     return "this is dot "+ text
// }

// console.log(dot());
// console.log(dot("abc"));

//Function expression
//--------------------------------------------------

// const run = function(text = "abc"){
//     return "this is run "+ text
// }

// console.log(run())

//IIFE
//--------------------------------------------------

// (function(){
//     let x =4;
//     let y =5;
//     console.log(x+y)
//     return x+y;
// })()

// console.log(`${function me(){ return akm}}`)     //error

// console.log(`${(function(){return 5})()+10}`)

// Function Invoke
//--------------------------------------------------

// function itoft (val){
//     return showResult (val/12)
// }

// function showResult (tex){
//     return "The result is "+tex
// }


// Array
//--------------------------------------------------

// let fruits = ["apple","orange","mango","banana"];

// fruits[0] = "aa apple";
// console.log(fruits);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let mySelf = [
//     "Aung Kyae Mhon",
//     19,
//     null,
//     "developer",
//     ["html","css","js"],
//     "Bago",
//     100000,
//     false
// ]

// console.log(mySelf);
// console.log(`My name is ${mySelf[0]} and iam ${mySelf[1]} years old.
// I live in ${mySelf[5]} and my job is ${mySelf[3]} and i understand ${mySelf[4][2]}`
// );

// let arr = [];

// arr[0] = "aaa";
// arr[1] = "bbb";
// arr[4] = "ccc";
// arr[7] = "ddd";

// console.log(arr);
// console.log(typeof arr);
// console.log(arr.length);

// let arr =[];

// arr[arr.length] = "aaa";
// arr[arr.length] = "bbb";
// arr[arr.length] = "ccc";

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[arr.length-1]);

//Object
//--------------------------------------------------

// let myself = {
//     myName:"aungkm",
//     myAge : 19,
//     gf : null,
//     job : "developer",
//     skill : ["html","css","js"]
// };

// console.log(myself)
// console.log(myself.skill[2])
// console.log(myself.myName)
// console.log(typeof myself)

// console.log(myself["job"])

// let obj = {};

// obj.a = "aaa";
// obj.b = "bbb";
// obj["c"] = "ccc";
// obj["d"] = "ddd";

// console.log(obj);

// pratical student
//--------------------------------------------------

// let name = "mg mg";
// let age = 15
// let money = 200;

// money -= 50;
// console.log(money)

// const mgmgBag = ["mm","eng","bio",false]
// let canmgmgSmoke = false;
// let canmgmgFriSmoke = true;

// let mgmgObj = {
//     name : "mg mg",
//     age : 15,
//     canSmoke : false,
//     money : money,
//     bag : mgmgBag
// }

// let kyawkyawObj = {
//     name : "Kyaw Kyaw",
//     age : 16,
//     canSmoke : true,
//     money : 100,
//     bag : ["mm","eng"]
// }

// let MyaMyaObj = {
//     name : "Mya Mya",
//     age : 15,
//     canSmoke : true,
//     money : 1000,
//     bag : ["mm","eng","math","phy","chem","bio"]
// }

// console.log(mgmgObj)
// console.log(kyawkyawObj)
// console.log(MyaMyaObj)

// const student = [
//     mgmgObj,kyawkyawObj,MyaMyaObj
// ]

// console.log(student)




