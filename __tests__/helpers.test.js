const {format_plural} = require('../utils/helpers')

test('format_plural() returns a pluralized word', () => {
    const word1 = format_plural('cat', 1);
    const word2 = format_plural('dog', 2);
  
    expect(word1).toBe('cat');
    expect(word2).toBe('dogs');
  
});