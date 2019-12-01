import { process, prioritizeSigns, sortSigns, mergeFractionsAndSigns } from '@/utils/process'

describe('process', () => {
    let signs = []
    let fractions = []

    beforeEach(() => {
        signs = ['+', '/', '-', '*']
        fractions = [
            [1,2],
            [3,6],
            [5,6],
            [7,9],
            [11,13]
        ]
    })

  it('should prioritize correctly', () => {
    const prioritizedSigns = prioritizeSigns(signs)
    expect(prioritizedSigns).toEqual([
        {s: '+', p: 'low', i: 0},
        {s: '/', p: 'high', i: 1},
        {s: '-', p: 'low', i: 2},
        {s: '*', p: 'high', i: 3}
    ])
  })

  it('sort signs by priority correctly', () => {
    const prioritizedSigns = prioritizeSigns(signs)
    const sortedSigns = sortSigns(prioritizedSigns)
    expect(sortedSigns).toEqual([
        {s: '/', p: 'high', i: 1},
        {s: '*', p: 'high', i: 3},
        {s: '+', p: 'low', i: 0},
        {s: '-', p: 'low', i: 2},
    ])
  })

  it('should merge fractions and signs correctly', () => {
    const result = mergeFractionsAndSigns(fractions, signs)
    expect(result).toEqual([
        [1,2], '+',
        [3,6], '/',
        [5,6], '-',
        [7,9], '*',
        [11,13]
    ])
  })
})
