export class StringCalculator {
    add(numbers) {
        if(numbers === "") {
            return 0;
        }
        while(numbers.includes("\n")){
            numbers = numbers.replace('\n', ',');
        }
        // if(numbers.includes("\n")){
        //     numbers = numbers.replace(new RegExp('\n', 'g'), ',');
        // }
        if(numbers.includes(',')) {
            const values = numbers.split(",");
            const intValues = values.map(v => parseInt(v));
            const sum = intValues.reduce((total, item) => total + item);
            return sum;
        }
        return parseInt(numbers);
    }
}
