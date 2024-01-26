import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('with empty state', () => {
        expect(getCounterValue({})).toBe(0)
    })

    test('with filled state', () => {
        expect(getCounterValue({
            counter: {
                value: 100,
            }
        })).toBe(100)
    })
})