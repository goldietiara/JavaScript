
let contoh_array=["Group1", "Group2", "Group3", "Group4", "Group5"]
// console.log(contoh_array[0])
// console.log(contoh_array[1])
// console.log(contoh_array[contoh_array.length-1])
// console.log(`data pertama adalah: ${contoh_array[0]}
// data terakhir adalah: ${contoh_array[contoh_array.length-1]}
// data dibagi dua adalah: ${contoh_array[contoh_array.length/2]}
// data ditengah adalah: ${contoh_array[Math.floor(contoh_array.length/2)-1]}
// total data dalam array adalah: ${contoh_array.length}`)




console.log(`\ndata pertama: ${contoh_array[0]}
data ditengah kebawah: ${contoh_array[Math.floor(contoh_array.length/2)]}
data ditengah keatas: ${contoh_array[Math.ceil(contoh_array.length/2)]}
data ditengah round: ${contoh_array[Math.round(contoh_array.length/2)]}
data terakhir: ${contoh_array[contoh_array.length-1]}
jumlah data pada arry adalah ${contoh_array.length}\n
===============================\n`)

contoh_array[0]="Team1"
contoh_array[0]+="Team1"
console.log(contoh_array[0])
contoh_array[0]="Team1"

contoh_array.push("Group6")
contoh_array.pop()
contoh_array.shift()
contoh_array.unshift("Team1","Team2")
console.log(contoh_array)

console.log(contoh_array.slice(3,5))
console.log(contoh_array.splice(3,1))


