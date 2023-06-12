// Put your solution here
let arrayToTest = [4,233,4,6,7,8,88,2.2,3.44,111.3];
function divideArray(numbers){
    let evenNums = [];
    let oddNums = [];
        for(let i =0; i < numbers.length;i++){
            if(numbers[i] % 2 === 0){
                console.log('Even number')
                evenNums.push(numbers[i]);
            }
            if(numbers[i] % 2 !== 0){
                oddNums.push(numbers[i]);
                console.log('odd number')
            }
        }
        console.log(evenNums.sort(function(a, b){return a-b;}));
        console.log(oddNums.sort(function(a, b){return a-b;}));
}

divideArray(arrayToTest);