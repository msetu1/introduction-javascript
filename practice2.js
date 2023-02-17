// array
/* fruits = ['apple', 'banana', 'orange'];
bananaIndex = fruits.indexOf('banana');
console.log(bananaIndex);
fruits[1] = 'mango'
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);
 */
// grad marks
marks = 85;

// if-else using largest and number
// largest number
num1 = 13;
num2 = 79;
num3 = 45;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }

}
else {
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}
// isosceles
side1 = 9;
side2 = 8;
side3 = 9;
if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('isosceles');
}