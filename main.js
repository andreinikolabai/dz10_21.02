const n = prompt('Кількість чисел');
const arr = [];
let i;

for (i = 0; i < n; i++) {
    arr.push(+prompt(`Введіть ${i+1} номер`))
    arr.sort((a, b) => a - b);
}
arr.splice(2, 3, arr);

alert('Масив з ' + n + ' чисел = [' + arr.join(', ') + ']')