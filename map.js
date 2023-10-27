const numbers = [23, 34, 45, 56];
const output = [];
for (const number of numbers) {
    const res = number / 2;
    output.push(res);
}
//console.log(output);

//const magic = number => number * 2;
//const outpu = numbers.map(number => number * 2);
const y = numbers.map(x => x * 2);
console.log(y);
