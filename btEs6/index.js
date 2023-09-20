// bài 1

let a = -2
let b = 50
document.write(`Bài 1 <br> a = ${a}; b = ${b}<br>`)
const checkPrime = (num) => {
    if(num < 2) {
        document.write(`${num} không phải là số nguyên tố <br>`) }
     else{
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
    }


const listPrimes = (a, b) => {
    const primeArr = []
    for (let num = a; num <= b; num++) {
        if (checkPrime(num)) {
            primeArr.push(num)
        }
    }
    return primeArr
}
document.write(`<br>Số nguyên tố trong khoảng (${a}; ${b}) :<br>${listPrimes(a, b)}<br><br>`)

// bài 2
document.write('Bài 2 <br>')
let input = 1230
document.write(`Input: ${input}<br>`)

const reverseNumber = (number) => {
    let reversed = String(number)
    return Number(reversed.split('').reverse().join(''))
}

document.write(`Output: ${reverseNumber(input)}<br><br>`)
console.log(reverseNumber(input))

//bài 3
document.write('Bài 3<br>')
const arrTest = [-1, -100, 9]
document.write(`Array = [${arrTest}]<br>`)

const sumLargest = (array) => {

    let isSame = arrTest.every(item => item === arrTest[0])
    //console.log(isSame)

    if (isSame) {
        document.write(`Tổng hai phần tử lớn nhất trong mảng: ${arrTest[0] * 2}<br>`)
    } 
    else {
        let largestNum = array[0]
        let secondLargeNum
        for (let i = 0; i < array.length; i++) {
            if (array[i] > largestNum) {
                secondLargeNum = largestNum
                largestNum = array[i]
            } else if (array[i] > secondLargeNum && array[i] < largestNum) {
                secondLargeNum = array[i]
            }
        }
        document.write(`Hai phần tử lớn nhất: ${largestNum}; ${secondLargeNum}<br>`)
        return largestNum + secondLargeNum
    }

}
document.write(`Tổng : ${sumLargest(arrTest)}<br><br>`)

// bài 4
document.write('Bài 4 <br>')
const arr1 = [1,-4,9,0]
const arr2 = [7, 8, 5]
const sort = ((a, b) => a - b)
const arrSort = (arr1.concat(arr2)).sort()
// console.log(arrSort)
document.write(`array 1: [${arr1}]<br> array 2: [${arr2}]<br>Nối và sắp xếp mảng: [${arrSort}]<br>`)
if (arrSort.length % 2 !== 0) {
    // console.log(arrSort[Math.floor(arrSort.length / 2)])
    document.write(`-> ${arrSort[Math.floor(arrSort.length / 2)]}`)
} else {
    // console.log(arrSort[arrSort.length / 2 - 1], arrSort[(arrSort.length / 2)])
    document.write(`-> ${arrSort[arrSort.length / 2 - 1]}, ${arrSort[(arrSort.length / 2)]}`)
} 


