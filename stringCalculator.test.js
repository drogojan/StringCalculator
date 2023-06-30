import {StringCalculator} from "./stringCalculator.js";

describe('StringCalculator', () => {
    const stringCalculator = new StringCalculator();

    it('should return 0 when give an empty string', () => {
        // Arrange
        // Act
        const sum = stringCalculator.add("");
        // Assert
        expect(sum).toEqual(0);
    })

    it('should return the number when given a single number', function () {
        expect(stringCalculator.add("4")).toEqual(4);
        expect(stringCalculator.add("10")).toEqual(10);
    });

    it('should return the sum of 2 comma-separated numbers', function () {
        expect(stringCalculator.add("1,2")).toEqual(3);
        expect(stringCalculator.add("3,4")).toEqual(7);
    });

    it('should return the sum of an arbitrary number of comma-separated numbers', function () {
        expect(stringCalculator.add("1,2,3,4,5,6,7,8,9")).toEqual(45);
        expect(stringCalculator.add("1,2,3,4")).toEqual(10);
    });
})
