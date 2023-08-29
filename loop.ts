console.log("before loop")
for (let i = 0; i < 5; i++) {
    console.log("1")
    console.log("2")
}
console.log("after loop")

console.log("before loop")
let i: number = 0
while (i = 0) {
    console.log("1")
    console.log("2")
    i++
}
console.log("after loop")

console.log("before loop")
let index: number = 0
let table: number = 4
while (index <= 10) {
    console.log(table, "x", index, "=", index * table)
    index = index + 1
}
console.log("before loop")
let table1: number = 5;
for (let z = 0; z <= 10; ++z) {
    console.log(table1, "x", z, "=", z * table1)
}



let i1:number=13
do{
    console.log("do while loop",i1)
    i1++
}while(i1<=12)