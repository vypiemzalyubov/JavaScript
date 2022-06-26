<<<<<<< HEAD
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {Ваши преобразования}
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age_2 = 18
let age_3 = 60

let checkAge1 = function(age_1) {
if (age_1 < age_2) {
    console.log("You don't have access cause your age is ", age_1, " it's less then", 18)
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome")
} else if (age_1 > age_3) {
console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work")
}
}
checkAge1(17)
checkAge1(18)
checkAge1(61)

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка

let age_22 = 18
let age_33 = 60

let checkAge2 = function(age_11) {
    if (typeof age_11 == 'number') {
        if (age_11 < age_22) {
            console.log("You don't have access cause your age is ", age_11, " it's less then", 18)
        } else if (age_11 >= age_22 && age_11 < age_33) {
        console.log("Welcome")
        } else if (age_11 > age_33) {
        console.log("Keep calm and look Culture channel")
        } else {
        console.log("Technical work")
        }
    } else console.log('Not a Number')
}
checkAge2(17)
checkAge2(18)
checkAge2(61)
checkAge2('aaa')
checkAge2('Hello')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

let age_222 = 18
let age_333 = 60

let checkAge3 = function(age_111) {
    if (typeof age_111 === "boolean"){
    console.log("Error")
    }
    else if (!isNaN(age_111)) {
        if (age_111 < age_222) {
            console.log("You don't have access cause your age is ", age_111, " it's less then", 18)
        } else if (age_111 >= age_222 && age_111 < age_333) {
            console.log("Welcome")
        } else if (age_111 > age_333) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
} else 
    console.log('Not a Number')
}
checkAge3(17)
checkAge3(18)
checkAge3(60)
checkAge3(61)
checkAge3('2')
checkAge3('0')
checkAge3(true)
checkAge3('Hello')

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let age_2222 = 18
let age_3333 = 60

let checkAge4 = function(age_1111) {
    age_1111 = Number(age_1111)
if (age_1111) {
    if (age_1111 < age_2222) {
        alert("You don't have access cause your age is ", age_1111, " it's less then", 18)
    } else if (age_1111 >= age_2222 && age_1111 < age_3333) {
        alert("Welcome")
    } else if (age_1111 > age_3333) {
        alert("Keep calm and look Culture channel")
    } else {
        alert("Technical work")
    }
} else alert('Not a Number')
}

let a = prompt('Enter your age')

checkAge4(a)
=======
// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

for(i = 1; i < 11; i++){
    console.log(2 ** i)
}



// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

let pow = function(counter){
    for(i = 1; i <= counter; i++){
        console.log(Math.pow(2,i))
    }
}
pow(10)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let result = " "
let smile = ":)"

for(i = 1; i < 6; i++){
    console.log(result += smile)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

<<<<<<<< HEAD:JS_HW2.js
let printSmile = function(stroka, numberOfRows){
    for(i = 1; i <= numberOfRows; i++)
    console.log(stroka.repeat(i))
}

printSmile(":(", 5)
========
checkAge4(a)
>>>>>>>> 0701b007f0986812695f544ad2f695905de7b709:JS_HW1+.js
>>>>>>> 0701b007f0986812695f544ad2f695905de7b709
