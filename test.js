
function add(a1, a2){
    return`${a1} + ${a2} = ${a1+a2}`
}


function calculator(cal1, cal2, operation){
    if(operation==="add"){
        return add(cal1,cal2)
    } else return "aposhe?!"
} 
console.log(calculator(1,3,"add"))
console.log(calculator(1,3,"aaaad"))