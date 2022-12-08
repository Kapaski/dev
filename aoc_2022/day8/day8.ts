import fs from 'fs'

const inputs = fs.readFileSync('input.txt').toString().split(/\r?\n/); 
const rows: number[][] = [] //east to west
const lines: number[][] = []// north to south
const visible: Set<string> = new Set()
const rowBoundary = inputs.length
const lineBoundary = Array.from(inputs[0]).length

inputs.forEach((row, y )=> {
  const eachrow = Array.from(row).map(t => Number(t))
  rows.push(eachrow)
  eachrow.forEach((tree: number, x) => {
    if (lines[x] && Array.isArray(lines[x])) {
      const eachLine = lines[x]
      eachLine.push(tree)
    } else {
      lines[x] = [tree]
    }
  })
})

const lookRows = (direction: number[], rowIdx:number) => {
  visible.add(`row${rowIdx}_line${0}_${direction[0]}`)
  visible.add(`row${rowIdx}_line${rowBoundary-1}_${direction[rowBoundary -1]}`)
  console.log('Boundary & input ', `row${rowIdx}_line${0}_${direction[0]}`, `row${rowIdx}_line${rowBoundary-1}_${direction[rowBoundary -1]}`, direction)
  direction.forEach((t, idx) => {
    if (idx == 0 || idx == rowBoundary -1 ) {
      return
    }
    console.log(`testing ${t} to the right ${direction.slice(idx+1, rowBoundary)} max: ${Math.max(...direction.slice(idx+1, rowBoundary))}`)
    if (t > Math.max(...direction.slice(idx+1, rowBoundary))) {
      visible.add(`row${rowIdx}_line${idx}_${t}`)
      console.log(`Right - add ${t} at ${idx}`)
      //highest to the right, now lookLeft from t
      const leftRange = direction.slice(0, idx)
      if (leftRange.length >= 2) {
        leftRange.reverse().forEach((lT, lIdx) => {
          if (lIdx+1 >= leftRange.length) {
            console.log(`skipping `, lT, lIdx)
            return
          }
          console.log(`testing ${lT} to the left ${leftRange.slice(lIdx+1, leftRange.length)} max: ${Math.max(...leftRange.slice(lIdx+1, leftRange.length))}`)
          if (lT > Math.max(...leftRange.slice(lIdx+1, leftRange.length))) {
            visible.add(`row${rowIdx}_line${idx-lIdx-1}_${lT}`)
            console.log(`Left - add ${lT} at reverseIndex  ${lIdx} from ${t}@direction[${idx}] of ${direction}`)
          }
        })
      }
    }
  })
}

const lookLines = (direction: number[], lineIdx:number) => {
  direction.forEach((t, idx) => {
    if (idx == 0 || idx == lineBoundary -1 ) {
      return
    }

    //console.log(`testing ${t} to the down ${direction.slice(idx+1, lineBoundary)} max: ${Math.max(...direction.slice(idx+1, lineBoundary))}`)
    if (t > Math.max(...direction.slice(idx+1, lineBoundary))) {
      visible.add(`row${idx}_line${lineIdx}_${t}`)
      console.log(`Down - add ${t} at ${idx}`, `row${idx}_line${lineIdx}_${t}`)
      //highest to the right, now lookLeft from t
      const leftRange = direction.slice(0, idx)
      if (leftRange.length >= 2) {
        leftRange.reverse().forEach((lT, lIdx) => {
          if (lIdx+1 >= leftRange.length) {
            console.log(`skipping `, lT, lIdx)
            return
          }
          //console.log(`testing ${lT} to the UP ${leftRange.slice(lIdx+1, leftRange.length)} max: ${Math.max(...leftRange.slice(lIdx+1, leftRange.length))}`)
          if (lT > Math.max(...leftRange.slice(lIdx+1, leftRange.length))) {
            visible.add(`row${idx-lIdx-1}_line${lineIdx}_${lT}`)
            console.log(`Up - add ${lT} at reverseIndex  ${lIdx} from ${t}@direction[${idx}] of ${direction}`, `row${idx-lIdx-1}_line${lineIdx}_${lT}`)
          }
        })
      }
    }
  })
}

for (let i = 0; i < rowBoundary; i++) {
  if (i == 0 || i == rowBoundary -1 ) {
    
    rows[i].forEach((t, idx) => {
      visible.add(`row${i}_line${idx}_${t}`)
    })
    console.log('Start - add row ')
    continue
  } else {
    lookRows(rows[i], i)
  }
}

for (let i = 1; i < rowBoundary -1; i++) {
  lines[i].forEach((t, idx) => {
    lookLines(lines[i], i)
  })
}

console.log(visible, ' - ', visible.size)
