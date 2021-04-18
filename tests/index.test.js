const { challenge } = require('../index');

test(`challenge(x) will extract every 2nd char out of 3 from 'x.garbled' and concatenate them.`, () => {
    // Arrange
    const testObject = {
        irrelevant: 12345,
        garbled: 'WO.ep.rd.krf aaic nht teu iivnto vlgobneraralic nhggto.!N',
        useless: null
    }
    // Act
    const result = challenge(testObject);
    // Assert
    expect(typeof result).toBe('string');
    expect(result).toEqual('Opdracht volbracht!');
});

