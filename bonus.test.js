const calculateBonus = require('./script_test.js');

test('>=50', () => {
    expect(calculateBonus(1,50)).toEqual(50);
});

test('<50', () => {
    expect(calculateBonus(20,30)).toEqual(50);
});

test('0', () => {
    expect(calculateBonus(0,0)).toEqual(0);
});

test('>50', () => {
    expect(calculateBonus(1,50)).toEqual(50);
});

test('negative number', () => {
    expect(calculateBonus(-1,15)).toEqual(0);
})