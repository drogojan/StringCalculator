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
})
