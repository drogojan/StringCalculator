export class StringCalculator {
    add(numbers) {
        if(numbers === "") {
            return 0;
        }
        if(numbers.includes(',')) {
            const values = numbers.split(",");
            const intValues = values.map(v => parseInt(v));
            const sum = intValues.reduce((total, item) => total + item);
            return sum;
        }
        return parseInt(numbers);
    }
}
