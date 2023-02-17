// while loop
// num = 0
// while (num < 5) {
//     console.log('Hello')
//     num += 1;
// }
// forloop
/* console.log('simple for loop');
for (i = 0; i < 5; i += 1) {
    console.log(i);

} */
// for loop is even Number
/* for (i = 0; i < 20; i += 2) {
    console.log(i);
} */

// for loop is odd number
/* for (i = 1; i < 20; i += 2) {
    console.log(i);
} */
/* numbers = [45, 76, 87, 65, 34, 87, 25, 24, 25];
for (i = 0; i < numbers.length; i += 1) {
    number = numbers[i]
    console.log(number);
} */

/* items = ['keyboard', 'mouse', 'laptop', 'computer', 'monitor', 'LED'];
for (i = 0; i < items.length; i++) {
    item = items[i];
    console.log(item);
} */
items = ['keyboard', 'mouse', 'laptop', 'computer', 'monitor', 'LED'];
for (i = 0; i < items.length; i++) {
    item = items[i];
    if (item == 'computer') {
        break;
    }
    console.log(item);
}

