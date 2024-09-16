const fib = require('./fib')

test('fib(1) = 0', () => {
    expect(fib(1)).toBe(0)
})

test('fib(7) = 8', () => {
    expect(fib(7)).toBe(8)
})
test('fib(32) = 0', () => {
    expect(fib(32)).toBe(1346269)
})