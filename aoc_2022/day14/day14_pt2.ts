import fs from 'fs'
const rockPaths = fs.readFileSync('input.txt').toString().split(/\r?\n/);

const lines = rockPaths.map(p => {
  const path = p.split(' -> ')
  const linePath: Set<string> = new Set()
  for(let i = 0; i < path.length; i++) {
    if (!path[i+1]){
      continue
    }
    
    const [x1, y1] = path[i].split(',').map(n => Number(n))
    const [x2, y2] = path[i+1].split(',').map(n => Number(n))
   
    if (typeof x1 == 'number' && typeof x2 == 'number' && typeof y1 == 'number' && typeof y2 == 'number' && x1 == x2 ) {
      const sorted = [y1, y2].sort((a, b) => a < b ? -1 : 1)
      for(let k1 = sorted[0]; k1 <= sorted[1]; k1++) {
        ////console.log('add ', k1, y1, y2, k1 <= y2, typeof k1, typeof y2)
        linePath.add(`${x1},${k1}`)
      }
    }
    if (typeof x1 == 'number' && typeof x2 == 'number' && typeof y1 == 'number' && typeof y2 == 'number' && y1 == y2) {
      const sorted = [x1, x2].sort((a, b) => a < b ? -1 : 1)
      for (let k =sorted[0]; k <= sorted[1]; k++) {
        ////console.log('add ', k, y1, y2, k <= y2, typeof k, typeof y2)
        linePath.add(`${k},${y1}`)
      }
    }

  }
  return linePath
})
////console.log(lines)
let xBoundary: number[] = [500, 500]
let yBoundary: number[] = [0, 0]

const rockMap: {[yy: string]: number[]} = {}

lines.forEach(line => {
  line.forEach(l => {
    const [x, y] = l.split(',').map(n => Number(n))
    if (typeof x == 'number'){
      if( rockMap[String(y)]) {
        rockMap[String(y)].push(x)
      } else {
         rockMap[String(y)] = [x]
      }
    }
    

    if(x < xBoundary[0]) {
      xBoundary[0] = x
    }
    if (x > xBoundary[1]) {
      xBoundary[1] = x
    }
    if (y > yBoundary[1]) {
      yBoundary[1] = y
    }
  })
})



//console.log(xBoundary, yBoundary)
const sandMap: {[y: string]: number[]} = {}

// roll and check next tile
const roll = (x: number, y: number): number[] => {
  
    // previous sand
 
  if (sandMap[String(y+1)]?.includes( x)) {
    // sand: can roll down left - no down left sand, no left rock, no down left rock
    if ((y+1 < yBoundary[1] +2) && !sandMap[String(y+1)]?.includes( x-1) && !rockMap[String(y+1)]?.includes(x-1)){
      console.log('have sand - roll to down left ', x-1, y+1)
      return roll(x-1, y+1)
    // sand can roll down right - no down right san, no right rock, no down right rock
    } else if ((y+1 < yBoundary[1] +2) && !sandMap[String(y+1)]?.includes( x+1) && !rockMap[String(y+1)]?.includes(x+1)) {
      console.log('have sand - roll to down right ', x+1, y+1)
      return roll(x+1, y+1)
    } else {
      // sand rest
      if (x == 500 && y==0) {
        console.log('reached top')
        return [x, y, 1]
      }
      console.log('rest sand ', x, y)
      return [x, y]
    }
  }
    // rock?
   if(y+1 == yBoundary[1]+2) {
    console.log('touched floor, rest ', x, y)
    return [x,y]
   }
   if(rockMap[String(y+1)]?.includes(x)) {
      // rock - can roll down left
      if((y+1 < yBoundary[1] +2) && !rockMap[String(y+1)]?.includes(x-1) && !sandMap[String(y+1)]?.includes(x-1)) {
        console.log('have rock - roll to down left ', x-1, y+1)
        return roll(x-1, y+1)
      // can roll down right
      } else if ((y+1 < yBoundary[1] +2) && !rockMap[String(y+1)]?.includes(x+1) && !sandMap[String(y+1)]?.includes(x+1)) { 
        console.log('have rock - roll to down right ', x+1, y+1)
        return roll(x+1, y+1)
      } else {
        // rest
        console.log('rest rock - ', x, y)
        return [x, y]
      }
   } 


  // no sand, no rock
  
    return roll(x, y+1)
  
  
   
}
let round = 0
for(let s = 1; s <= 39999; s++) {
  const x = 500
  
    const stable = roll(x, 0)
    if(stable.length >=2) {
      //console.log(stable, s)
      if(sandMap[stable[1]]) {
        sandMap[stable[1]].push(stable[0])
      } else {
        sandMap[stable[1]] = [stable[0]]
      }
      if (stable[2]) {
        round = s
        break
      } 
    } 
    
    continue
  
}

for(let yy = 0; yy <= yBoundary[1]+2; yy++) {
  let row = ''
  for(let xx = xBoundary[0]-300; xx<=xBoundary[1]+300; xx++) {
    if (xx == 500 && yy == 0) {
      row += 'o'
      continue
    }
    if(rockMap[yy] && rockMap[yy].some(x => Number(x) == xx)) {
      row += '#'
    } else if(sandMap[yy] && sandMap[yy].some(x => x == xx)) {
      row += 'o'
    } else {
      row += '.'
    }

  }
  console.log(row)
}

console.log('after ',round)