// const { TestWatcher } = require('@jest/core')
const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions')

test('Should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('Should return Hello, (name)', () => {
    expect(greeting('James')).toEqual("Hello, James.")

    expect(greeting('Jill')).toEqual("Hello, Jill.")
})
describe('Math Functions', () => {
    test('Should return 3 and 14', () => {
        expect(add(1,2)).toEqual(3)

        expect(add(5,9)).toEqual(14)
    })

        test('Should return 2 and 45', () => {
        expect(multiply(1,2)).toEqual(2)

        expect(multiply(5,9)).toEqual(45)
    })

    test('Should return 5 and 3', () => {
        expect(divide(10,2)).toEqual(5)

        expect(divide(27,9)).toEqual(3)
    })

    test('Should return 4 and 2', () => {
        expect(subtract(6,2)).toEqual(4)

        expect(subtract(11,9)).toEqual(2)
    })
})