

//1
function max(x, y) {
    if(x>y) {
        return x;
    } else {
        return y;
    }
}

console.log("Question 1: max(2,3) = " + max(2,3));

//2
function maxofThree(x, y, z){
    if(x>y && x>z){
        return x;
    } else if(y>x&&y>z){
        return y;
    } else {
        return z;
    }
}

console.log("Question 2: maxofThree((2,3,1) = " + maxofThree(2,3,1));

//3
function isVowel(c) {
    const vowels = ['e', 'a', 'i', 'u', 'o'];
    for(let i=0;i<vowels.length; i++){
        if(c==vowels[i]){
            return true;
        }
    }
    return false;
}

console.log("Question 3: isVowel('a') = " + isVowel('a'));
console.log("Question 3: isVowel('p') = " + isVowel('p'));

//4
function sum(arr) {
    let sum=0;
    arr.forEach(a => sum+=a);
    return sum;
}

console.log("Question 4: sum([1,2,3,4]) = " + sum([1,2,3,4]));

function multiply(arr) {
    let multiply=1;
    arr.forEach(a => multiply*=a);
    return multiply;
}

console.log("Question 4: multiply([1,2,3,4]) = " +  multiply([1,2,3,4]));

//5
function reverse(s) {
    let result='';
    for(let i=s.length-1;i>=0;i--){
        result+=s.charAt(i);
    }
    return result;
}

console.log("Question 5: reverse(\"phan anh\") = " + reverse("phan anh"));


//6
function findLongestWord(arr) {
    let length=0;
    arr.forEach(s => {
        if(s.length > length){
            length = s.length;
        }
    });
    return length;
}

console.log("Question 6: findLongestWord([\"phan\", \"anh\", \"nguyen\"]) = " + findLongestWord(["phan", "anh", "nguyen"]));

//7
function filterLongWords(arr, i) {
    return arr.filter(e => {
        return e.length > i;
    });
}

console.log("Question 7: filterLongWords([\"phan\", \"anh\", \"nguyen\"]) = " +  filterLongWords(["phan", "anh", "nguyen"], 3));

//8
function computeSumOfSquares(arr) {
    let sum=0;
    arr.forEach(n => {
        sum += n*n;
    });
    return sum;
}

console.log("Question 8: computeSumOfSquares([1,2,3]) = " + computeSumOfSquares([1,2,3]));

//9
function printOddNumbersOnly(arr) {
    arr.forEach(n => {
        if(n%2!=0){
            console.log(n);
        }
    });
}

console.log("Question 9: printOddNumbersOnly([1,2,3,4,5]) = ");
printOddNumbersOnly([1,2,3,4,5]);

//10
function computeSumOfSquaresOfEvensOnly(arr) {
    let sum=0;
    arr.forEach(n => {
        if(n%2==0){
            sum += n*n;
        }
    });
    return sum;
}

console.log("Question 10: computeSumOfSquaresOfEvensOnly([1,2,3,4,5]) = " + computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));

//11
function sum2(arr) {
    return arr.reduce((total, value) => {
        return total + value;
    });
}

console.log("Question 11: sum2([1,2,3,4]) = " + sum2([1,2,3,4]));

function multiply2(arr) {
    return arr.reduce((total, value) => {
        return total * value;
    });
}

console.log("Question 11: multiply2([1,2,3,4]) = " + multiply2([1,2,3,4]));

//12
function findSecondBiggest(arr) {
    let max = arr[0];
    let second = Number.MIN_VALUE;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            second = max;
            max = arr[i];
        } else if (arr[i] > second) {
            second = arr[i];
        }
    }
    return second;
}

console.log("Question 12: findSecondBiggest([1,2,3,4,5]) = " + findSecondBiggest([1,2,3,4,5]));
console.log("Question 12: findSecondBiggest([19,9,11,0,12]) = " + findSecondBiggest([19,9,11,0,12]));

//13
function printFibo(n, a, b) {
    let print="";
    if(n==1) {
        print = a;
    } else if(n==2){
        print = a + "," + b;
    } else {
        let arr = [a,b];
        print = a + "," + b;
        for(let i=2;i<n;i++){
            arr[i] = arr[i-1] + arr[i-2];
            print += "," + arr[i];
        }
    }
    return print;
}

console.log("Question 13: printFibo(1,0,1) = " + printFibo(1,0,1));
console.log("Question 13: printFibo(2,0,1) = " + printFibo(2,0,1));
console.log("Question 13: printFibo(3,0,1) = " + printFibo(3,0,1));
console.log("Question 13: printFibo(6,0,1) = " + printFibo(6,0,1));
console.log("Question 13: printFibo(10,0,1) = " + printFibo(10,0,1));

//reverse in-place
function reverse2(s) {
    for(let i=0; i<s.length-1; i++){
        s = s.substring(0, i) + s.substr(s.length-1, 1) + s.substring(i, s.length-1);
    }
    return s;
}
console.log("Reverse in-place: reverse2(\"phan anh\") = " + reverse2("phan anh"));