const n = prompt('Кількість чисел');
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(+prompt(`Введіть ${i+1} номер`))
}

arr.sort((a, b) => a - b);

alert(`Масив з ${n} чисел після сортування = [${arr.join(', ')}]`);
arr.splice(2, 3);

alert(`Масив з ${n} чисел після видалення елементів = [${arr.join(', ')}]`);