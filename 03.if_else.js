var pass = "123456"

if (pass==="123456"){
    console.log("access granted!")

} else (console.log("access denied!")) 

function cek_pass(pass){
    if (pass==="123456"){
        console.log("access granted!")
    } else 
        console.log("access denied!")
}
cek_pass("123456")
cek_pass("123457")

//if ternary
function baru(pass){
    pass === "tu a ga"
    ?console.log("logged")
    :console.log("try again")
} 
baru("tu a ga")
baru("tu i ga")

// arrow function
var cek_prime = (n) => {
    if (n<1){ 
        return `${n} is not a prime number`
    } else if(n===2||n===3||n===5){
        return `${n} is a prime number`
    } else if(n%2===0 || n%3===0 || n%5===0){
        return `${n} is not a prime number`
    }else {return `${n} is a prime number`
    }
}

console.log(cek_prime(-1))
console.log(cek_prime(0))
console.log(cek_prime(1))
console.log(cek_prime(2))
console.log(cek_prime(3))
console.log(cek_prime(4))
console.log(cek_prime(5))
console.log(cek_prime(6))
console.log(cek_prime(7))
console.log(cek_prime(8))
console.log(cek_prime(9))
console.log(cek_prime(10))
console.log(cek_prime(11))
console.log(cek_prime(12))

