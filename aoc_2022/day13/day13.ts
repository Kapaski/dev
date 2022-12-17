import fs from 'fs'
const pairs = fs.readFileSync('input.txt').toString().split(/\s\r?\n/);
const corrects: number[] = []
type Input = number | number[] | string | null | undefined | any

// Damn 0 checks again!!
const safeZero = (v: Input) => {
  if (typeof v === 'number') { 
    return v >= 0 ? true : false
  }
  return v ? true: false
}
const check = (l: Input, r: Input): number => {
  if (typeof l === 'string') {
    l = JSON.parse(l)
  }
  if(typeof r === 'string') {
    r = JSON.parse(r)
  }
  //console.log(l, ' vs ', r)
  if(l && r && Array.isArray(l) && Array.isArray(r)) {
    const left = l
    const right = r
    
    const lgth = l.length > r.length ? l.length : r.length
    //console.log(`compare length ${lgth}`)
    for(let k = 0; k < lgth; k ++) {

      if(safeZero(left[k]) && safeZero(right[k]) ) {
        if (Number.isInteger(left[k]) && Number.isInteger(right[k])) { // number vs. number
          if(Number(left[k]) > Number(right[k])) {
            //console.log(`${(Number(left[k]))} > ${(Number(right[k]))}`)
            return 2
          } else if (Number(left[k]) < Number(right[k])){
            //console.log(`${(Number(left[k]))} < ${(Number(right[k]))}`)
            return 1
          } else {
            ////console.log('draw')
            continue
          }
        } else if ([left[k], right[k]].filter(lr => Array.isArray(lr)).length == 2) { // array vs. array
            const res = check(left[k], right[k])
            if (res ==1 || res == 2) { return res } else { continue }

        } else if ([left[k], right[k]].filter(lr => Array.isArray(lr)).length == 1) { // number vs. array
          if(Number.isInteger(left[k])) { 
            const res = check(`[${left[k]}]`, right[k])
            if (res ==1 || res == 2) { return res } else { continue }
          } else if (Number.isInteger(right[k])) {
            const res = check(left[k], `[${right[k]}]`)
            if (res ==1 || res == 2) { return res } else { continue }
          }

        }
      } else if(!safeZero(left[k]) && safeZero(right[k])) {
        //console.log('left run out ->1', right[k])
        return 1
      } else if(safeZero(left[k]) && !safeZero(right[k])) {
        //console.log(left[k], 'right run out ->2')
        return 2
      } else {
        //console.log('both out of items ', left[k] +'' + right[k])
        return 3
      }
    }
    //console.log(`loop through and no idea`)
    return 3
    
  } else {
   //console.log(`both are out of items reach out here ${l} vs. ${r}`)
    
    return 3
  }
}


pairs.forEach((p, idx) => {
  let [left, right] = p.split(/\r?\n/)
  const r = check(left, right)
  console.log(`${idx} -> ${r}`)
  if(r == 1) {
    corrects.push(idx+1)
  }
})
console.log(corrects)
console.log(corrects.reduce((a, b) => a + b))