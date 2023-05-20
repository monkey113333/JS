// Area pratical
//--------------------------------------------------


const records = []

function calcArea(width,breadth) {  
    let result = width*breadth;
    const recordObj = {
        width : width + "ft",
        breadth : breadth + "ft",
        area : result + "sqft"
    }

    // console.log(recordObj)
    
    records[records.length] = recordObj;
    return result+ " sqft"
}
console.log(calcArea(20,40))
console.log(calcArea(10,40))
console.log(calcArea(22,30))

console.table(records)

