var greetings = "HI! My name is"
var hobby = "and I LOVE COODING!!!"
//

console.log(greetings + " Odi " + hobby);

// ini fitur ES6 (2019) String literal
console.log(`${greetings} Odi ${hobby} WOOOOHOOODSKJDBKWEBABDAJHBFD`)


function add (angka1, angka2){
    return `${angka1} + ${angka2} = ${angka1+angka2}`
} //console.log(add(27,3))

function minus(n1, n2){
    return`${n1} minus ${n2} equal ${n1-n2}`
} //console.log(minus(1,30))

function divided(d1, d2){
    return`${d1} divided by ${d2} is equal to ${d1/d2}`
}

function modulus(m1, m2){
    return`${m1} modulus ${m2} equal ${m1%m2}`
}

function calculator(num1, num2, operation){

    if (operation==="plus"){
        return add(num1,num2)
    } else if (operation==="minus"){
        return minus(num1,num2)
    } else if(operation==="divided"){
        return divided(num1,num2)
    } else if(operation==="modulus"){
        return modulus(num1,num2)
    }

} console.log(calculator(10,3,"modulus"))

