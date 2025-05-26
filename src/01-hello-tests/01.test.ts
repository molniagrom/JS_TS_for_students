import {expect, test} from 'vitest'
import {mult, splitIntoWords, sum} from './01'

test('should return correct sum of two positive numbers', () => {
    expect(sum(2, 3)).toBe(5)
})

test('should return correct mult of two positive numbers', () => {
    expect(mult(2, 3)).toBe(6)
})

test('The sentence must be divided into words', () => {
    expect(splitIntoWords("I am Frontend developer")).toEqual(
        ['i', 'am', 'frontend', 'developer']
    )
})

