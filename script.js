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
    },
    calculateFoodAmount: function(obj,fod){
        console.log(fod/(obj.age*10))
    }

}
petActions.printPet(pet)
petActions.calculateFoodAmount(pet,300)

