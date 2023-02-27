//Remove First and Last Character
const removeChar = str => {
    let newStr = ''
    for(let i = 1; i < str.length - 1; i++) {
        newStr += str[i]
    }
    return newStr
}