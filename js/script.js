// //strings 
//          //0123456789
// var str = "Javascript"
//          //       -4 -3 -2-1
// var strn = "Js is good for development Js"
//  console.log(str.length)
//  console.log(str.charAt(3))
//  console.log(str.charCodeAt(3))
//  console.log(str.concat(" is king "))
//  console.log(strn.lastIndexOf("Js"))
//  console.log(strn.includes("Good"))
//  console.log(str.toUpperCase())
//  console.log(str.toLowerCase())
//  console.log(strn.replaceAll("Js","DSA"))
//  console.log(strn.split(" "))
//  console.log(strn.slice(0,3))
//  console.log(str.trim())

//  //array
//  //const arr =[1,2,3,4,"king",3.14]
//   const arr = [1,2,3,4,5]
// //   arr.push(5)
// //   console.log(arr)
// //    arr.pop()
// //  console.log(arr)
// //  arr.unshift(100)
// //  console.log(arr)
// //  arr.shift()
// //  console.log(arr)

// //  const brr = [...arr]
// //  brr.pop()
// //  console.log(brr)
// //  console.log(arr)
// // console.log(arr.toString())
// // console.log(arr.join("  "))
// // console.log(arr.concat(brr))

// // console.log(arr.splice(0,2))
// // console.log(arr.flat(2))
// // console.log(arr)

// // console.log(arr.slice(0,2))
// // console.log(arr)


// //loops in array 
// //forEach
// //map
// //reduce
// //filter
// //Arrow function
// //()=>{}
//   let count = 0;
// arr.forEach((n)=>{
//   count++
// })
// console.log(count)

// //map
// let doubled=arr.map((n)=>{
//   return n*n
// })
// console.log(doubled)

// //reduce
// let sum = arr.reduce((total,curr)=>{
//     return total+curr;
// })
// console.log(sum)

// //filter

// console.log(arr.filter((n)=> n>2))
// //console.log(fil)

// //indexOf()

// console.log(arr.indexOf(3))
// console.log(arr.sort())
// console.log(arr.find((n)=>n==2))


// const obj = {
//    "firstName": "Suyash",
//    "LastName": "Gupta",
//    "Phno": 7080249355,
//    "isEmployee":true,
//    "sayHello":function(){console.log(hiii)},
//    "eat":()=>{console.log("I like Indian food")}

// }


// console.log(obj.Phno)
// console.log(obj.sayHello);

// for(var key in obj){
//  // console.log(key + obj[key])
//   console.log(`${key} : ${obj[key]}`)

// }


//function statment
a();
//b();
function a(){
  console.log("hii i am a")
}
//a();
var b = function(){
  console.log("hiii i am b")
}
//b()

//function(){}
//xyz()
var square = function(param1){
     return function(){
      return param1*param1
     }
}
console.log(square(2)())