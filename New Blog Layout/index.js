// Datatypes //

name = "Kai"                // string = words
age = 25                    // int = whole numbers
float = 25.543              // float = number w/ decimal places
isCool = true              // Boolean expression = True or False
numbers = ["1", "2", "3"]   // Array = List

// Building an Object //
kai = {
    name: name,
    age: age,
    isCool: isCool,
    numbers: numbers
}

neve = {
    name: "neve",
    age: 26,
    isCool: true,
    numbers: 39
}

ollie = {
    name: "ollie",
    age: 26,
    isCool: false,
    }

// What are Functions //

function printName(person) {
    console.log(person.name)
}

function getAge(person) {
    return person.age
}

function decideIfPersonIsCool(person) {
// if the person is cool, console log they are cool
// otherwise log they are not cool

    if (person.isCool) {
        console.log(person.name + " is cool!")
    }
    else {
        console.log(person.name + " is NOT cool")
    }
}
decideIfPersonIsCool(kai)
decideIfPersonIsCool(neve)
decideIfPersonIsCool(ollie)