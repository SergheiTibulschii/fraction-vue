import { calculate } from '@/utils/calculate'

describe('calculate', () => {
  it('should add correctly', () => {
    const result = calculate([1,2], '+', [1,2])
    expect(result).toEqual([2,2])
  })

  it('Addition with unequal denominators', () => {
    const result = calculate([1,2], '+', [1,5])
    expect(result).toEqual([7,10])
  })

  it('should multiply correctly', () => {
    const result = calculate([5,7], '*', [1,2])
    expect(result).toEqual([5,14])
  })

  it('should divide correctly', () => {
    const result = calculate([5,7], '/', [2,8])
    expect(result).toEqual([40,14])
  })

  it('division of the negative fractions retutns positive fractions', () => {
    const [n, d] = calculate([-5,-7], '/', [-2,-8])
    expect(n > 0).toBeTruthy()
    expect(d > 0).toBeTruthy()
  })

  it('multiplications transform negative fractions to positive', () => {
    const [n, d] = calculate([-5,-7], '*', [-1,-2])
    expect(n > 0).toBeTruthy()
    expect(d > 0).toBeTruthy()
  })

  it('should extract correctly', () => {
    const result = calculate([3, 3], '-', [2, 3])
    expect(result).toEqual([1, 3])
  })

  it('should transform negative fraction to positive', () => {
    const result = calculate([3, 3], '-', [-2, -3])
    expect(result).toEqual([5, 3])
  })

  it('should extract negative numbers correctly', () => {
    const result = calculate([-5,-7], '-', [-1,-2])
    expect(result).toEqual([-3, 14])
  })
})
