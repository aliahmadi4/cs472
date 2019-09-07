function max(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
function maxOfThree(n1, n2, n3) {
    if (n1 > n2) {
        if (n1 > n3) {
            return n1;
        } else {
            return n3;
        }
    } else {
        if (n2 > n3) {
            return n2;
        } else {
            return n3;
        }
    }
}
function isVowel(s) {
    if (s === 'A' || s === 'E' || s === 'I' || s === 'O' || s === 'U' || s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
        return true;
    } else {
        return false;
    }
}
function sum(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
}
function multiply(n) {
    let res = n[0];
    for (let i = 1; i < n.length; i++) {
        res *= n[i];
    }
    return res;
}
function reverse(s) {
    let rev = "";
    for (let i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }
    return rev;
}
function findLongestWord(arr) {
    let len = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > len) {
            len = arr[i].length;
        }
    }
    return len;
}
function filterLongWords(arr, i) {
    let resArr = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].length > i) {
            resArr.push(arr[j]);
        }
    }
    return resArr;
}

const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
});

const c = a.filter(function (elem, i, array) {
    return elem === 3;
});

const d = a.reduce(function (preValue, elem, i, array) {
    return preValue * elem;
});





function myFunctionTest(expected, function2test) {
    let result = function2test();

    if (Array.isArray(expected)) {
        expected = expected.toString();
    }
    if (Array.isArray(result)) {
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}



console.log("Expected output of max(3,4) is 4  " + myFunctionTest(4, function () {
    return max(3,4);
}));

console.log("Expected output of maxOfThree(3,4,1) is 4  " + myFunctionTest(4, function () {
    return maxOfThree(3,4,1);
}));

console.log("Expected output of isVowel('b') is false  " + myFunctionTest(false, function () {
    return isVowel('b');
}));

console.log("Expected output of sum([1,5,8]) is 14  " + myFunctionTest(14, function () {
    return sum([1,5,8]);
}));

console.log("Expected output of multiply([1,2,4]) is 8  " + myFunctionTest(8, function () {
    return multiply([1,2,4]);
}));

console.log("Expected output of reverse('Ali Mohammad') is 'dammahoM ilA'  " + myFunctionTest('dammahoM ilA', function () {
    return reverse('Ali Mohammad');
}));

console.log("Expected output of findLongestWord(['Ali', 'Mohammad', 'Mike']) is 8 " + myFunctionTest(8, function () {
    return findLongestWord(['Ali', 'Mohammad', 'Mike']);
}));

console.log("Expected output of filterLongWords(['Ali', 'Mohammad', 'Mike'],3) is ['Mohammad', 'Mike'] " + myFunctionTest(['Mohammad', 'Mike'], function () {
    return filterLongWords(['Ali', 'Mohammad', 'Mike'],3);
}));

console.log("Expected output of  [1, 3, 5, 3, 3] multiply by 10 is [10,30,50,30,30] " + myFunctionTest([10,30,50,30,30], function () {
    return b;
}));

console.log("Expected output of  [1, 3, 5, 3, 3] which contain just 3 is [3,3,3] " + myFunctionTest([3,3,3], function () {
    return c;
}));

console.log("Expected output of [1, 3, 5, 3, 3] elements' multiplication is 135 " + myFunctionTest(135, function () {
    return d;
}));
