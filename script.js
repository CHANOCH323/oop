function findMax() {
    return ({ max: Math.max(...arguments), min: Math.min(...arguments) })
}

function findMax2(...numbers) {
    return { max: Math.max(...numbers), min: Math.min(...numbers) }
}
