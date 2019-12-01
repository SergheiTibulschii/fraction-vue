import { calculate } from './calculate'
const priority = {'+': 'low', '-': 'low', "/": 'high', '*': 'high'}

export let prioritizeSigns = signs => signs.map((s, i) => ({
	i,
	s,
  p: priority[s]
}))
export let sortSigns = signs => Array.from(signs).sort((a,b) => {
	if(a.p === b.p) return a.i < b.i ? -1 : 1
  else return a.p === 'high' ? -1 : 1
})
export let mergeFractionsAndSigns = (fractions, signs) => fractions.reduce((r, x, i) => {
	if(i === 0) {
  	r.push(x)
    return r
  }
  return [...r,signs.shift(), x]
},[])

export function operate(merged, sortedSigns) {
    const {s} = sortedSigns.shift()
    const signIndex = merged.indexOf(s)
    const keyIndex = signIndex-1
    const operands = merged.splice(keyIndex, 3)
    const result = calculate(...operands)

    merged.splice(keyIndex, 0, result)
    
    return merged.length === 1 ? result : operate(merged, sortedSigns)
}

export function process(fractions, signs) {
    const data = JSON.parse(fractions)
    const merged = mergeFractionsAndSigns(data, Array.from(signs))
    const prioritizedSigns = prioritizeSigns(signs)
    const sortedByPriority = sortSigns(prioritizedSigns)
    const result = operate(merged, sortedByPriority)
    return result
}