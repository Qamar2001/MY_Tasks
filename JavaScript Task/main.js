// Description: This is the main entry point for the application
// console.log('hello world from javascript')
//variables
// let age = 25
// console.log(age)

// const salary = 2000
// console.log(salary) 

// const name = "Qammar"
// const language = "JavaScript"
// const channel = "CodeWithQammar"

// const total = 0
// const pi = 3.14

// const isprimaryNunber = true
// const isStudent = false

// let result
// console.log(result)

// const res = undefined
// const data = null

// const person = {
//     'FirstName': 'Qammar',
//     'LastName': 'Mehmood',
//     'Age': 21
// }

// console.log(person.FirstName)

// const oddNumbers = [1, 3, 5, 7, 9]
// console.log(oddNumbers[1])

// let a = 10
// a = 'Qammar'
// a = true
// console.log(a)

// Operators

// let x = 10
// let y = 5

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)
// console.log(x ** y)

// // Increment (++)
// console.log(x++)
// console.log(x)

// // Decrement (--)
// console.log(x--)
// console.log(x)

// // Comparison Operators

// console.log(x == y)
// console.log(x != y)
// console.log(x === y)
// console.log(x !== y)
// console.log(x > y)
// console.log(x >= y)
// console.log(x < y)
// console.log(x <= y)

// Logical Operators

// const isvalidNumber = x > 8 && y < 8
// console.log(isvalidNumber)

// const isvalidNumberor = x > 20 || y < 8
// console.log(isvalidNumberor)

// const isValid = true
// console.log(!isValid)

// console.log('Qammar' + ' ' + 'Mehmood')

// const isEven = 10 % 2 === 0 ? true : false
// console.log(isEven)

// Type Conversion
// console.log('1' + 1)
// console.log(true + '2')
// console.log('1' + '2')
// console.log('1' * '2')
// console.log('Worlds' - 'Hello')
// console.log('3'- true)
// console.log('4' - false)
// console.log('5' - null)
// console.log(6 - undefined)

// explicit conversion
// console.log(Number('5'))
// console.log(Number(true))
// console.log(Number(''))
// console.log(Number('Hello'))
// console.log(parseInt('5.5'))
// console.log(parseFloat('5.3434').toPrecision(3))

// console.log(String(5))
// console.log(String(true))
// console.log(String(null))
// console.log(String(undefined))
// console.log((500).toString())

// console.log(Boolean(10)) // null undefines 0 '' false
// console.log(Boolean(''))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(0))

// equality

// const var1 = '10'
// const var2 = '10'
// const var3 = 10

// console.log(var1 == var2)
// console.log(var1 === var2)
// console.log(var1 == var3)
// console.log(var1 === var3)

// conditional statements

// const num = 0
// if(num > 0){
//     console.log('Number is positive')
// }
// else if(num < 0){
//     console.log('Number is negative')
// }
// else{
//     console.log('Number is zero')
// }

// const color = 'red'
// switch(color){
//     case 'red':
//         console.log('Color is red')
//         break
//     case 'blue':
//         console.log('Color is blue')
//         break
//     default:
//         console.log('Color is not red or blue')
// }


// loops

// for (let i = 0; i < 5; i++) {
//     console.log('for iteration number : ', i)
// }

// let i = 0
// while (i < 5) {
//     console.log('while iteration number : ', i)
//     i++
// }

// i = 6
// do {
//     console.log('do while iteration number : ', i)
//     i++
// } while (i < 5)

// const numArr = [1, 2, 3, 4, 0]

// for (const num of numArr) {
//     console.log('iteration number : ' + num)
// }

// function

// function greet()
// {
//     console.log('Hello World')
// }
// greet()
// greet()
// greet()
// greet()

// function greet2(usrname)
// {
//     console.log('Hello World' + ' ' + usrname)
// }
// greet2('Qammar')
// greet2('Mehmood')
// greet2( 'Ali' )
// greet2( 'Ahmed' )

// function add(num1, num2) {
//     return num1 + num2
// }
// const sum = add(106, 20)
// console.log(sum)

// const arrowsum = (a, b) => 
// {
//     return a + b 
// }
// console.log(arrowsum(16, 20))

// const arrowsum2 = (a, b) => a + b
// console.log(arrowsum2(14, 20))


// scope   block scope and function scope and global scope

// block scope
if(true){
    const myname = 'Qammar'
    console.log(myname)
}

// function scope
function greet(){
    const myname = 'Qammar'
    console.log(myname)
}
greet()

// global scope
const myname = 'Qammar'
console.log(myname)
