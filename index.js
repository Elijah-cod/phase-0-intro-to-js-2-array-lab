// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = (name) => cats.push(name)

const destructivelyPrependCat = (name) => cats.unshift(name)

const destructivelyRemoveLastCat = () => cats.pop()

const destructivelyRemoveFirstCat = () => cats.shift()

const appendCat = (name) => {
    let newArray = [...cats]
    newArray.push(name)
    return newArray
}

const prependCat = (name) => {
    let newArray = [...cats]
    newArray.unshift(name)
    return newArray
}

const removeLastCat = () => {
    let newArray = [...cats]
    newArray.pop()
    return newArray
}

const removeFirstCat = () => {
    let newArray = [...cats]
    newArray.shift()
    return newArray
}