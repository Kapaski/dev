// input = raw data
const r: number[] = [];
const list = input.split('\n')
list.reduce((acc: number[], val ) => {
  if(val !== '') {
    acc.push(Number(val))
  } else {
    const sum = acc.length > 0? acc.reduce((p,v ) => p + v) : 0
    r.push(sum)
    acc = []
  }
  return acc
}, []);
r.sort((x,y) => ( x> y) ? -1 : 1)
console.log(r[0])
console.log(r.slice(0,3).reduce((a, b) => a+b))