import fs from 'fs'

const instructions = fs.readFileSync('input.txt').toString().split(/\r?\n/);

let x = 1;
const noop = 'noop'
let cycles = 1;
const signal: number[] = []
for(let t = 0; t<instructions.length; t++) {
  if (cycles == 20 || cycles == 60 || cycles == 100 || cycles == 140 || cycles==180 || cycles == 220) {
    signal.push(x*cycles)
  }
  cycles++;
  if (instructions[t] == noop) {
    continue
  }
  if ( instructions[t].startsWith('addx') ) {
    if (cycles == 20 || cycles == 60 || cycles == 100 || cycles == 140 || cycles==180 || cycles == 220) {
      signal.push(x*cycles)
    }
    cycles++;
    const [opt, v ] = instructions[t].split(' ')
    x += Number(v)    
  }
 
}
// part1
//console.log(`total cycles ${cycles}`)
//console.log(`signal ${signal.reduce((a,b) => a+b)}`)

// part2

const width = 40;
const height = 6;
cycles = 0;
x = 1; // ###
const graph: string[][] = [
  [],
  [],
  [],
  [],
  [],
  [],
]
const crtDraw = (cycle: number, spriteMiddle: number) => {
  const row = Math.ceil(cycle/width)
  if (row <= height) {
    console.log('at row ', row)
    const sprite = [spriteMiddle-1, spriteMiddle, spriteMiddle +1]
    const currentDraw = graph[row-1]
    const cycleAtRow = cycle-1 - (row-1)*width
    if ( sprite.includes(cycleAtRow) ) {
      currentDraw[cycleAtRow] = '#'
    } else {
      currentDraw[cycleAtRow] = '.'
    }
  } else {
    console.log(`out of rows ${row}, cycle ${cycle}`)
  }
}
for(let t = 0; t<instructions.length; t++) {
  
  cycles++;
  crtDraw(cycles, x)
  if (instructions[t] == noop) {
    continue
  }
  if ( instructions[t].startsWith('addx') ) {
    cycles++;
    crtDraw(cycles, x)
    const [opt, v ] = instructions[t].split(' ')
    x += Number(v)    
  }
 
}

for(const row of graph) {
 console.log(row.join(''))
}