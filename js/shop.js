let total = 0;

const fruits = {
    apple : 100,
    orange : 50,
    mango : 200,
    banana : 250
}

function tax (amout, texrate = 0.05){
    return amout * texrate
}

function buy (item,quantity){
    let cost = quantity * fruits[item]
    // let actualCost = cost + tax(cost)
    // total += actualCost


    total += cost
    return `${item} : ${quantity} = ${cost} mmk`
}

console.log(buy("apple",2));
console.log(buy("orange",6));
console.log(buy("banana",2));

console.log("Total :",total,"mmk")
console.log("Tax :",tax(total), "mmk")
console.log("Net Total :",total+tax(total), "mmk")