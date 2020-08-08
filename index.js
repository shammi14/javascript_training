console.log("shammi sharma")
console.log("satvik")
console.log("ashvik")

let firstname = "varun"
const lastname = "sharma"


//var - 

function printName(){
    
    if(true){
        let name = "varun sharma"
        console.log(name)
    }
}

printName()

let person = {
name: "varun",
age: 29,
height: 5.10,
address: {
    1: "sherpur",
    2: "pune",
   
}
}

//object -> never together of -> in
//Array -> of together
for(let item in person){
    console.log("printing object properties")
    console.log(item)
    console.log("object properyt value")

    console.log(typeof person[item])
    console.log(person[item])
}
//number
//string
//undefined
//Date
//Symbol

// console.log(person.address[1])
// console.log(person.name)
// console.log(person.address)
