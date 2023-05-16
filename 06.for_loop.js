

function index_check(nama){

    for(let i=0;i<=nama.length -1;i++){
        console.log(`${nama[i]} ${i+1}`)
    }
}

let odi = "goldie"
console.log(odi.length)
index_check(odi)
console.log(odi[0])
console.log(odi[odi.length-1])
console.log(odi[odi.length/2])

console.log(odi[0] = "R")

let arr = ["g","o","l","d","i","e"]
arr[0] += "R"
arr[arr.length-1] = "M"
console.log(arr)
arr[0] += "lj"
console.log(arr)
arr[0] += "lj"
console.log(arr)

let rr = [
    ["ryan","fadhilah"]
    ,["odi","cantik"]
]
console.log(rr)
console.log(rr[0])
console.log(rr[0][0][rr[0][0].length-1])
console.log(rr[1])
