
const url = "https://catfact.ninja/fact"
const h1 = document.querySelector("h1")

console.log("a");

const fetchData = async () => {
    console.log("f1");
        const response = await fetch(url);
        console.log("f2");
        const data = await response.json();
        console.log("f3");
        h1.innerText = data.fact;
        console.log("f4");
    };
    console.log("z");


// const a = new Promise((resolve,reject)=>{
//     let success =false;
//     if (success) resolve("Promise Fulfilled");
//     else reject("Promise not fulfilled & here is some technical error");
// });

// a.then((parameter)=>{
//     console.log(parameter)
// }).catch((error)=>{
//     console.log(error)
// });


// const arr = [];

// const fetchData = (arr) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             arr.push({ name: "sami" })
//             if (arr.length > 0) resolve("Data fetched");
//             else reject("Some Technical error");
//         }, 2000)

//     })
// };

// fetchData(arr).then((parameter) => console.log(parameter))
//     .catch((error) => console.log(error))
//     .finally(()=> console.log("work with eiher a way"));
