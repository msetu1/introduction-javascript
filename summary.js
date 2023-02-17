// while loop and forloop of sintax
// while loop
/* num = 1;
while (num <= 5) {
    console.log(num);
    num++;
} */

// forloop
/* for (i = 1; i <= 5; i += 1) {
    console.log(i);
} */

// reverse using forloop and while loop
/* num = 10;
while (num >= 1) {
    console.log(num);
    num--;
} */

// for loop
/* for (i = 10; i >= 1; i--) {
    console.log(i);
} */
// even number and odd number
// even number is while loop
/* num = 0;
while (num <= 15) {
    console.log(num);
    num += 2;
} */
// odd number
/* num = 1;
while (num <= 15) {
    console.log(num);
    num += 2;
} */

/* for (i = 1; i <= 10; i += 2) {
    console.log(i);
} */
// break and cotinue 
numbers = [25, 67, 45, 43, 57, 79, 89, 10];
for (i = 0; i <= numbers.length; i += 1) {
    number = numbers[i];
    if (number >= 57) {
        break;
    }
    console.log(number);
}
/* items = ['keyboard', 'mouse', 'laptop', 'computer', 'monitor', 'LED'];
for (i = 0; i < items.length; i++) {
    item = items[i];
    if (item == 'computer') {
        continue;
    }
    console.log(item);
} */

