
function printEven(stopNumber){
    let evenArray = [];
    for (let i = 0; i < stopNumber; i++) {
        if (i % 2  == 0){
            evenArray.push(i)
        }
    }

    console.log('Even Numbers: ' + evenArray)
}

function fibonacci(stopNum){
    let n1 = 0, n2 = 1, nextTerm;

    nextTerm = n1 + n2;

    while (nextTerm <= stopNum) {
        console.log(nextTerm);

        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}

function arrayAvg(intArray){
    total = 0
    for (let i = 0; i < intArray.length; i++) {
        total += intArray[i]
    }
    return total/(intArray.length)
}

function findMax(intArray){
    max = intArray[0]

    for (let i = 0; i < intArray.length; i++) {
        if (intArray[i] > max) {
            max = intArray[i]
        }
    }

    return max
}


function findMin(intArray){
    min = intArray[0]

    for (let i = 0; i < intArray.length; i++) {
        if (intArray[i] < min) {
            min = intArray[i]
        }
    }

    return min
}

function numberOfVowels(word) {
    count = 0
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == 'a' || word.charAt(i) == 'e' || word.charAt(i) == 'i' || word.charAt(i) == 'o' || word.charAt(i) == 'u'){
            count += 1;
        }
    }
    return count;
}

function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function getZipCode(city) {
    switch (city) {
        case 'Cape Town': console.log('Zip Code: ' + 3201); break;
        case 'San Antonio': console.log('Zip Code: ' + 78258); break;
        default: console.log('Unknown City'); break;
    }
}

function sortStr(strArray) {
    return strArray.sort();
}

function ASCsortDESC(intArray, order){
    if(order == "ASC"){
        return intArray.sort();
    } else {
        return intArray.sort().reverse;
    }
}

function reverseNum(num) {
    strNum = num.toString();
    reverseNum = ''

    for (let i = strNum.length - 1; i >= 0; --i) {
        reverseNum += strNum.charAt(i)
    }

    return parseInt(reverseNum);
}

function capital(word) {
    return word.toUpperCase()
}

function numberOfOcurrencies(word, letter){
    count = 0
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === letter) {
            count += 1
        }
    }
    return count
}

function getStringIndex(strArray, target){
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] === target){
            return i
        }
    }
}

function getNumIndex(numArray, target){
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] === target){
            return i
        }
    }
}

function getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    return today = mm + '/' + dd + '/' + yyyy;
}

function greaterThanTen(intArray) {
    tenPlus = []
    for (let i = 0; i < intArray.length; i++) {
        if (intArray[i] >= 10){
            tenPlus.push(intArray[i]);
        }
    }
    return tenPlus
}

console.log(printEven(7));