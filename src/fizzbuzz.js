// TODO: Write your function in this file

// TODO: Change undefined below to the name of your function
module.exports = undefined

const fizzBuzzArray = []

function fizzBuzz(lower, upper) {
    for (let i = lower; i <= upper; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzArray.push('FizzBuzz')
        } else if (i % 3 === 0) {
            fizzBuzzArray.push('Fizz')
        } else if (i % 5 === 0) {
            fizzBuzzArray.push('Buzz')
        } else {
            fizzBuzzArray.push(i)
        }
    }
    return fizzBuzzArray
}

const lower = 1
const upper = 15

console.log(fizzBuzz(lower, upper))