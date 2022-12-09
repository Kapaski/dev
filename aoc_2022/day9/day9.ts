import fs from 'fs'

const moves = fs.readFileSync('input.txt').toString().split(/\r?\n/);
type coord = [x: number, y: number]
const coordsHead: Array<coord> = [[0,0]]
const coordsTail: Array<coord> = [[0,0]]

const turns: {[d: string]: [number, number]} = {
  'R': [0, 1],
  'L': [0, -1],
  'U': [1, 1],
  'D': [1, -1]
}
const includeCoord = (coords: Array<coord>, coord: coord) => {
  return coords.some(c => 
    c[0] == coord[0] && c[1] == coord[1]
  )
}
const checkHead = (cHead: coord, cTail:coord) => {
  const up = [cTail[0], cTail[1] + 1 ]
  const down = [cTail[0], cTail[1] - 1 ] 
  const right = [cTail[0]+1, cTail[1] ]
  const left = [cTail[0] - 1, cTail[1] ]
  const upright = [cTail[0]+1, cTail[1]+1]
  const upleft = [cTail[0]-1, cTail[1]+1]
  const downright = [cTail[0]+1, cTail[1]-1]
  const downleft = [cTail[0]-1, cTail[1]-1]
  const aroundTail = [cTail, up, down, right, left, upright, upleft, downright, downleft]
  if (includeCoord(<coord[]>aroundTail, cHead)) {
    return cTail
  } else {
    //all diagnal
    if(includeCoord([ [upright[0]+1, upright[1] ], [upright[0], upright[1]+1] ], cHead)){
      return upright
    } 
    if(includeCoord([ [upleft[0]-1, upleft[1] ], [upleft[0], upleft[1]+1] ], cHead)){
      return upleft
    } 
    if(includeCoord([ [downright[0]+1, downright[1] ], [downright[0], downright[1]-1] ], cHead)){
      return downright
    } 
    if(includeCoord([ [downleft[0]-1, downleft[1] ], [downleft[0], downleft[1]-1] ], cHead)){
      return downleft
    }
    // all straight 
    if(includeCoord([ [up[0], up[1]+1 ] ], cHead)){
      return up
    }
    if(includeCoord([ [down[0], down[1]-1 ] ], cHead)){
      return down
    }
    if(includeCoord([ [right[0]+1, right[1] ] ], cHead)){
      return right
    }
    if(includeCoord([ [left[0]-1, left[1] ] ], cHead)){
      return left
    } 
    console.log('this should be reached ', cHead, cTail)
  }
  
  return cTail
}
let overallsteps = 0
for(const move of moves) {
  const [d, s] = move.split(' ')
  const moveDir = turns[d.toString()]
  const steps = Number(s)
  
  //move to direction
  for(let k=1+overallsteps; k<=steps+overallsteps; k++) {
    const newHeadCoord = <coord>[...coordsHead[k-1]]
    newHeadCoord[moveDir[0]] += moveDir[1]
    coordsHead.push(newHeadCoord)
    
    const newTailCoord = checkHead(newHeadCoord, coordsTail[k-1])
    coordsTail.push( <coord>newTailCoord )
  } 
  overallsteps += steps    
}

//console.log(coordsHead)
//console.log(coordsTail)
const uniqueStop = new Set<string>(coordsTail.map(a => `${a[0]}_${a[1]}`))
console.log(overallsteps)
console.log(uniqueStop.size)