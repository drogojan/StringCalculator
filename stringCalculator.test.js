import {StringCalculator} from "./stringCalculator.js";

describe('StringCalculator', () => {
    it('should return 0 when give an empty string', () => {
        // Arrange
        const stringCalculator = new StringCalculator();
        // Act
        const sum = stringCalculator.add("");
        // Assert
        expect(sum).toEqual(0);
    })

    it('should return the number when given a single number', function () {
        const stringCalculator = new StringCalculator();
        expect(stringCalculator.add("4")).toEqual(4);
        expect(stringCalculator.add("10")).toEqual(10);
    });
})
