import fs from 'fs'

const moves = fs.readFileSync('testinput2.txt').toString().split(/\r?\n/);
type coord = [x: number, y: number]
const rope:Array<Array<coord>> = []
const lengthOfRope = 10
for(let i = 0; i < lengthOfRope; i++) {
  rope[i] = [[0,0]]
}
const turns: {[d: string]: [number, number]} = {
  'R': [0, 1],
  'L': [0, -1],
  'U': [1, 1],
  'D': [1, -1]
}
const includeCoord = (coords: Array<coord>, coord: coord) => {
  //console.log('checking ', coords, ' of ', coord)
  return coords.some(c => 
    c[0] == coord[0] && c[1] == coord[1]
  )
}

const checkHead = (cHead: coord, cTail:coord, forTail: number, dir: string): [newKnotCoord: coord, moveWithHead: boolean, ddir?: string] => {
  const up = [cTail[0], cTail[1] + 1 ]
  const down = [cTail[0], cTail[1] - 1 ] 
  const right = [cTail[0]+1, cTail[1] ]
  const left = [cTail[0] - 1, cTail[1] ]
  const upright = [cTail[0]+1, cTail[1]+1]
  const upleft = [cTail[0]-1, cTail[1]+1]
  const downright = [cTail[0]+1, cTail[1]-1]
  const downleft = [cTail[0]-1, cTail[1]-1]
  const aroundTail = [cTail, up, down, right, left]
  const aroundTip = [upright, upleft, downright, downleft]
  if (includeCoord(<coord[]>aroundTail, cHead)) {
    return [ cTail, false, 'NA' ]
  } else {
    if (includeCoord(<coord[]>aroundTip, cHead) ) {
      return [ cTail, false, 'NA' ]
    }
    
    //all chase diagnal
    if(includeCoord([ [upright[0]+1, upright[1] ], [upright[0], upright[1]+1], [upright[0]+1, upright[1]+1]], cHead)){
      if (forTail == 1) { console.log('move chase upright ', upright, 'for ', forTail) }
      return [ <coord>upright, true, 'UR' ]
    } 
    if(includeCoord([ [upleft[0]-1, upleft[1] ], [upleft[0], upleft[1]+1], [upleft[0]-1, upleft[1]+1] ], cHead)){
      if (forTail == 1) { console.log('move chase upleft ', upleft, 'for ', forTail) }
      return [ <coord>upleft, true, 'UL' ]
    } 
    if(includeCoord([ [downright[0]+1, downright[1] ], [downright[0], downright[1]-1], [downright[0]+1, downright[1]-1] ], cHead)){
      if (forTail == 1) { console.log('move chase downright ', downright, 'for ', forTail) }
      return [ <coord>downright, true, 'DR' ]
    } 
    if(includeCoord([ [downleft[0]-1, downleft[1] ], [downleft[0], downleft[1]-1], [downleft[0]-1, downleft[1]-1] ], cHead)){
      if (forTail == 1) { console.log('move chase downleft ', downleft, 'for ', forTail) }
      return [ <coord>downleft, true, 'DL' ]
    }

    
    // all straight 
    if(includeCoord([ [up[0], up[1]+1 ] ], cHead)){

      if (forTail == 1) { console.log('move chase up ', up, 'for ', forTail) }
      return [ <coord>up, false, 'NA' ]
    }
    if(includeCoord([ [down[0], down[1]-1 ] ], cHead)){
      if (forTail == 1) { console.log('move chase down ', down, 'for ', forTail) }
      return [ <coord>down, false, 'NA' ]
    }
    if(includeCoord([ [right[0]+1, right[1] ] ], cHead)){
      if (forTail == 1) { console.log('move chase right ', right, 'for ', forTail) }
      
      return [ <coord>right, false, 'NA' ]
    }
    if(includeCoord([ [left[0]-1, left[1] ] ], cHead)){
      if (forTail == 1) { console.log('move chase left ', left, 'for ', forTail) }
      return [ <coord>left, false, 'NA' ]
    } 
    
    console.log('shouldnt reach here', cHead, cTail)
  }
  
  return [ cTail, false, 'NA' ]
}
let overallsteps = 0
for(const move of moves) {
  const [d, s] = move.split(' ')
  const moveDir = turns[d.toString()]
  const steps = Number(s)

  //move to direction
  console.log(`doing - ${steps} with ${d}, totalSteps${overallsteps}, rope.length${rope[9].length}`)
  for(let k=overallsteps; k<steps+overallsteps; k++) {
    for(let j = 0; j < lengthOfRope - 1; j++) { // each rope knots
      const forTailKnot = (j+1)
      let newHeadCoord = <coord>[...rope[j][k]]
      
      if (j == 0) {
        
        newHeadCoord[moveDir[0]] += moveDir[1]
        rope[j].push(newHeadCoord)
        
      } else {
        newHeadCoord = <coord>[...rope[j][k+1]]
      }
      
      let currentTail = <coord>[...rope[j+1][k]]
      
      const [newKnotCoord, moveWithHead, ddir] = checkHead(newHeadCoord, currentTail, forTailKnot, d.toString())
      
      
      rope[j+1].push( <coord>newKnotCoord )
      
      // 
      
      //console.log(newHeadCoord, nextKnotCoord)
    }
  } 
  overallsteps += steps    
}

const uniqueStop = new Set(rope[9].map(a => `${a[0]}_${a[1]}`))
console.log(rope[9])
console.log(overallsteps)
console.log(uniqueStop.size)


