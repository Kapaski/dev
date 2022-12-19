import fs from 'fs'

const inputs = fs.readFileSync('input.txt').toString().split(/\r?\n/);
const xEdges = [3994992, 0]
const yEdges = [0, 0]
type SBCoords = [sx: number, sy: number, bx: number, by: number]
const locs: Array<SBCoords> = []
const sensors: {[y: string]: number[]} = {}
const beacons: {[y: string]: number[]} = {}
inputs.forEach(line => {
  const pairLoc = line.match(/Sensor at x=(-?\d+), y=(-?\d+): closest beacon is at x=(-?\d+), y=(-?\d+)/)
  
  if (pairLoc && pairLoc.length > 3 && [pairLoc[1], pairLoc[2], pairLoc[3], pairLoc[4]].filter(v => Number.isInteger(v)).length == 0) {
    
    const nLoc = [pairLoc[1], pairLoc[2], pairLoc[3], pairLoc[4]].map(v => Number(v))
    if(nLoc.length == 4) { 
      locs.push([nLoc[0], nLoc[1], nLoc[2], nLoc[3]]) 
    }
  }
})
// edge values based on coords
//console.log(locs)
//console.log(xEdges, yEdges)
const max = 4000000//20
const distance = (sx: number, sy: number, bx: number, by: number) => Math.abs(bx-sx) + Math.abs(by - sy)
const outter = (sx: number, sy: number, bx: number, by: number) => {
  const dist =  distance(sx, sy, bx, by)+ 1
  const upMost = [sx, sy - dist]
  const downMost = [sx, dist + dist]
  let found: number[] = []
  let uplx = upMost[0]
  let uprx = upMost[0]
  for ( let l = 1; l <= dist; l ++) {
    if(found.length>0) {
      return
    }
    uplx -= 1
    uprx += 1
    let isit = inOthers(uplx, upMost[1] + l, sx, sy)
    if(isit) {
      found = isit
      break
    }
    isit = inOthers(uprx, upMost[1] + l, sx, sy)
    if(isit) {
      found = isit
      break
    }
  }
  let downlx = downMost[0]
  let downrx = downMost[0]
  if (!found) {
    downlx -= 1
    downrx += 1
    for ( let l = 1; l < dist; l ++) {
      let isit = inOthers(downlx, downMost[1] - l, sx, sy)
      if(isit) {
        found = isit
        break
      }
      isit = inOthers(downrx, upMost[1] + l, sx, sy)
      if(isit) {
        found = isit
        break
      }
    }
  }
  
  return found
}

const inOthers = (x: number, y: number, sx: number, sy: number) => {
  let reachOtherSensors = false
  locs.forEach((loc, idx) => { // every sensor's coverage to row
    if( loc[0] == sx && loc[1] == sy) {
      //console.log('not checking self ', loc)
      return //skip checking self
    }
    const distance1 = distance(...loc) // other sensor's reach
    const distance2 = distance(x, y, loc[0] ,loc[1]) // this to other sensor
    if (distance2 <= distance1 ) {
      reachOtherSensors = true
      return
    }  
  })
  if(!reachOtherSensors) {
    if (x <= max && y <= max && x >= 0 && y >= 0) {
      
      console.log(`not reachOtherSensors , ${x},${y}`)
      return [x, y]
    }
    
  }
  return undefined
}

  
locs.forEach((loc, idx) => {
  const run = outter(...loc)
  if(run && run.length > 0) {
    console.log(run[0] * 4000000 + run[1])
    return 
  }
})
