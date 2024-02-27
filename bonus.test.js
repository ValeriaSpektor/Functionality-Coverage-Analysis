const calculateBonus = require('./script_test.js');

test('>=50', () => {
    expect(calculateBonus(1,50)).toEqual(50);
});

test('<50', () => {
    expect(calculateBonus(20,30)).toEqual(50);
})