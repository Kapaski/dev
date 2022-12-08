import fs from 'fs'

const inputs = fs.readFileSync('input.txt').toString().split(/\r?\n/); 
const rowBoundary = inputs.length
const lineBoundary = Array.from(inputs[0]).length
const coords: {[x_y:string]: number} = {}
inputs.forEach((row, y )=> {
  const eachrow = Array.from(row).map(t => Number(t))
  eachrow.forEach((t,x) => {
    coords[`${x}_${y}`] = t
  })
})
console.log(`boundary ${rowBoundary}, ${lineBoundary}`)
console.log(`${Object.keys(coords).length}`)
// start traverse the coords to visit every value in the map
const score: {[coord: string]: number} = {};
const treeMap: {[coord: string]: number[][]} = {};
Object.keys(coords).forEach(coord => {
  const xx = Number(coord.split('_')[0])
  const yy = Number(coord.split('_')[1])
  const currentTree = coords[coord]
  let visible: number = 1
  const trees: number[][] = []
  //look right
  let x = xx;
  let y = yy
  const visibleR: number[] = []
  while((x+1) < rowBoundary) {
    x += 1;
    const nextTree = coords[`${x}_${y}`]
    
      visibleR.push(nextTree)
      if(currentTree <= nextTree) {
        break
      }
    
  }
  visible = visible * visibleR.length
  trees.push(visibleR)
  // look left
  x = xx;
  y = yy
  const visibleL: number[] = []
  while(x > 0) {
    x--;
    const nextTree = coords[`${x}_${y}`]
    
      visibleL.push(nextTree)
      if(currentTree <= nextTree) {
        break
      }
    
  }
  visible = visible * visibleL.length
  trees.push(visibleL)
  // look down
  x = xx;
  y = yy
  const visibleD: number[] = []
  while((y+1) < lineBoundary) {
    y++;
    const nextTree = coords[`${x}_${y}`]
    
      visibleD.push(nextTree)
      if(currentTree <= nextTree) {
        break
      }
    
  }
  visible = visible * visibleD.length
  trees.push(visibleD)
  // look up
  x = xx;
  y = yy
  const visibleU: number[] = []
  while(y > 0) {
    y--;
    const nextTree = coords[`${x}_${y}`]
    
      visibleU.push(nextTree)
      if(currentTree <= nextTree) {
        break
      }
    
  }
  visible = visible * visibleU.length
  trees.push(visibleU)
  score[`${coord}_${currentTree}`] = visible
  treeMap[`${coord}_${currentTree}`] = trees
})

const highest = Math.max(...Object.values(score))
Object.entries(score).forEach(coord => {
  if (coord[1] == highest) {
    console.log(coord[0], ' is highest ', highest, ' ', treeMap[coord[0]])
    treeMap[coord[0]].forEach(d => {
      console.log(d.length)
    }
    )
    return
  }
})
console.log(Object.entries(score).length)