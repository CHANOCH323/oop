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
    printPet: function (obj) {
        console.log(obj);
    },
    calculateFoodAmount: function (obj, fod) {
        console.log(fod / (obj.age * 10))
    }

}
// petActions.printPet(pet)
// petActions.calculateFoodAmount(pet,300)

function addToArr3(n) {
    let stop = false
    let arr3 = []
        return function addToArr3closure(n) {
            if (n === 0 || stop) {
                stop = true
                return arr3
            } else if (n % 3 === 0 ) {
                arr3.push(n)
                return arr3
            } else {
                return arr3
            
        }
    }
}
// let arr = addToArr3()
// arr(3)
// arr(32)
// arr(3)
// console.log(arr(0))

function f(){
    console.log(this.name)
}
function myBind(obj,f){
    const greet =  f.bind(obj)
    return greet()
}

const myobj = {name:'chanoch'}
// myBind(myobj,f)

function funcStringify(func){
    return func.toString()
}
// console.log(funcStringify(myBind));
function funcParse(strFunc){
    const fun = strFunc
    return fun()
}
function f(){
    console.log('v');
    
}
funcParse(funcStringify(f))();


