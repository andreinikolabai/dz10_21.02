const n = prompt('Кількість чисел');
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(+prompt(`Введіть ${i+1} номер`))
}
alert(`Масив з ${n} чисел = [${arr.join(', ')}]`);

arr.sort((a, b) => a - b);
alert(`Масив після сортування = [${arr.join(', ')}]`);

arr.splice(1, 3);
alert(`Масив з ${n} чисел після видалення елементів = [${arr.join(', ')}]`);
