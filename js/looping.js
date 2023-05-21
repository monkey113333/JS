// for (let i=1;i<=10;i++){
//     console.log("a")
//     console.log("b")
//     console.log("c")
//     console.log(i,"============")
// }

// for (let i=1;i<=10;i++){

//     console.log(i,"============")
//     if (i===3) break;
// }

// for (let i=1;i<=10;i++){

//     if (i===3) continue;
//     console.log(i,"============")
// }

// const letters = ["a","b","c","d","e","f"];

// for (i = 0;i < letters.length; i++){
//     console.log("index",i,"--",letters[i])
// }

// const marks = [48,84,33,42,52,75];
// let totalMark = 0;

// for (mark=0; mark < marks.length; mark++){
//     console.log(marks[mark])
//     totalMark += marks[mark]
// }

// console.log("Total :",totalMark)

// const mgmgInfo = {
//     name : "Mg Mg",
//     age : 15,
//     marks : [
//         {
//             id : 1,
//             subject : "Myanmar",
//             mark : 50
//         },
//         {
//             id : 2,
//             subject : "English",
//             mark : 37
//         },
//         {
//             id : 3,
//             subject : "Math",
//             mark : 73
//         },
//         {
//             id : 4,
//             subject : "Physic",
//             mark : 57
//         },
//         {
//             id : 5,
//             subject : "Chemistry",
//             mark : 75
//         },
//         {
//             id : 6,
//             subject : "Bio",
//             mark : 65
//         }
//     ]
// }
// mgmgInfo.totalMarks = 0;
// mgmgInfo.results = {}

// //mgmginfo.results.Myanmar = "success"

// for (i=0; i<mgmgInfo.marks.length; i++){
//     console.log(mgmgInfo.marks[i].mark)
//     mgmgInfo.totalMarks += mgmgInfo.marks[i].mark
//     // mgmgInfo.results[mgmgInfo.marks[i].subject] = mgmgInfo.marks[i].mark >= 40 ? "success" : "fail"
//     if(mgmgInfo.marks[i].mark >=40){
//         mgmgInfo.results[mgmgInfo.marks[i].subject] = "success"
//     }else{
//         mgmgInfo.results[mgmgInfo.marks[i].subject] = "fail"

//     }
// }

// console.log(mgmgInfo.totalMarks)
// console.log(mgmgInfo.results)

// console.log(mgmgInfo)


// for(i=1;i<=6;i++){
//     let star = ""
//     for (x=1;x<=i;x++){
//         star += "* "
//     }
//     console.log(star)
// }


// for(i=6;i>=1;i--){
//     let star = ""
//     for(x=1;x<=i ; x++){
//         star += "* "
//     }
//     console.log(star)
// }

// function starGenerate (count){
//     let star = "";
//     for(let i=1;i<=count;i++){
//         star += "* "
//     }
//     return star
// }
// // console.log(starGenerate(2))

// for (i=1;i<=6;i++){
// console.log(starGenerate(i))

// }


// function starGenerator (count,element = "*"){
//     let star = ""
//     for(let i=1;i<=count;i++){
//         star += element
//     }
//     return star

// }
// // console.log(starGenerator())

// for (let i = 1;i <=6;i ++){
//     // console.log(starGenerator(i,i %2 ===0 ? "= " : "* "))

//     if (i %2 ===0){
//        console.log(starGenerator(i,"= "))       
//     }else{
//        console.log(starGenerator(i,"* "))       

//     }
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

ratings[ratings.length] =     {
    id : 6,
    name : "may may",
    rate : 3
}
// console.log(ratings)

for (let i=0;i<ratings.length;i++){
    let result = ""
    for (let x=1;x<=5;x++){
        if(x <= ratings[i].rate){
            result += "* "
        }else{
            result += "- "

        }
    }
    console.log(result,ratings[i].name)
}



// for (let i=1;i<=5;i++){
//     let result = ""
//     for (let x=1;x<=5;x++){
//         if(x <=i){
//             result += "*"
//         }else{
//             result += "-"
//         }

//     }
//     console.log(result,i)
// }