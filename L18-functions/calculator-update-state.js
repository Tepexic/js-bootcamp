let state = 0
// so we can update it within the functions:
const sum = a => state += a
const sub = a => state -= a
const mul = a => state *= a
const div = a => state /= a
const clr = () => state = 0

state = sum(2)
state = sum(10)
state = div(6)
clr()
state = sum(2)