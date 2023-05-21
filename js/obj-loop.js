
const fruits = ["apple","orange","mango","banana","grape","lemon","coconet"];

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }

// for (fruit of fruits){
//     console.log(fruit)
// }


// for (index in fruits){
//     console.log(index,fruits[index])
// }

// const mgmgInfo = {
//     name : "Mg Mg",
//     age : 15,
//     job : "developer"
// }

// for (key in mgmgInfo){
//     console.log(key, mgmgInfo[key])
// }


const ratings = [
    {
        id : 1,
        name : "mg mg",
        rate : 3
    },
    {
        id : 2,
        name : "kyaw kyaw",
        rate : 4
    },
    {
        id : 3,
        name : "ma ma",
        rate : 5
    },
    {
        id : 4,
        name : "zaw zaw",
        rate : 3
    },
    {
        id : 5,
        name : "mya mya",
        rate : 1
    },
]


for (rating of ratings){
    // console.log(rating.id,rating.name,rating.rate)
    for (key in rating){
        console.log(key,rating[key])
    }
    console.log("---------------------")
}


















