function reverseString(str){
    return str.split("").reverse().join("")
}

const originalStirng = 'Hello, World!'
const reversedString = reverseString(originalStirng)
console.log(reversedString);