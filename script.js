function findMax() {
    return ({ max: Math.max(...arguments), min: Math.min(...arguments) })
}

function findMax2(...numbers) {
    return { max: Math.max(...numbers), min: Math.min(...numbers) }
}

const pet = {
    name: 'Buddy',
    age: 3, 
    type: 'Dog',
}
const petActions = {
    printPet: function(obj) {
        console.log(obj);
    }

}
petActions.printPet(pet)