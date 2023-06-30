export class StringCalculator {
    add(numbers) {
        if(numbers === "") {
            return 0;
        }
        if(numbers.includes(',')) {
            const values = numbers.split(",");
            return parseInt(values[0]) + parseInt(values[1]);
        }
        return parseInt(numbers);
    }
}
