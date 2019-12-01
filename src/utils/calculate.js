const transformNegative = ([n, d]) => [Math.abs(n) * -1, Math.abs(d)]
const isNegative = f => f.some(f => f < 0)
const toPositive = ([n,d]) => [Math.abs(n), Math.abs(d)]
export function calculate(fract1, sign, fract2) {
    if(isNegative(fract1)) fract1 = transformNegative(fract1)
    if(isNegative(fract2)) fract2 = transformNegative(fract2)
    if(sign === '-') {
        if(isNegative(fract1) && isNegative(fract2)) return calculate(fract1, '+', toPositive(fract2))
        else {
            const [n1, d1] = fract1
            const [n2, d2] = fract2
            if(d1 !== d2) return [n1*d2-n2*d1, d1*d2]
            else return [n1-n2, d1]
        }
    } else if (sign === '+') {
        const [n1, d1] = fract1
        const [n2, d2] = fract2
        if(d1 !== d2) return [n1*d2 + n2*d1, d1*d2]
        else return [n1+n2, d1]
    } else if (sign === '*') {
        const [n1, d1] = fract1
        const [n2, d2] = fract2
        return [n1*n2, d1*d2]
    } else if (sign === '/') {
        [fract2[0], fract2[1]] = [fract2[1], fract2[0]]
        return calculate(fract1, '*', fract2)
    }
}