/**
 *  Sabqponm
    abcryxxl
    accszExk
    acctuvwj
    abdefghi
 */
import fs from 'fs'
const nodes = fs.readFileSync('input.txt').toString().split(/\r?\n/);
type Node = [coord:Coord, path: string[]]
type Coord = [a:number, b:number, nextStep: string] | null
const coords: string[][] = []
const allA: Coord[] = []
for (let k = 0; k < nodes.length; k++)  {
   const row = nodes[k]
   const rowsteps: string[] = []
   row.split('').forEach((step: string, idx: number) =>{
      rowsteps.push(step)
      if (step == 'a') {
         //console.log(step)
         allA.push(<Coord>[k, idx, step])
      }
   })
   coords.push(rowsteps)
}

const validStep = (x: number, y: number, step: string) =>  (a: number, b:number, nextStep: string) => 
      (nextStep && ((nextStep !='E' && step.charCodeAt(0) >= 'a'.charCodeAt(0) && ( nextStep.charCodeAt(0) - step.charCodeAt(0) <= 1))  || (step == 'z' && nextStep == 'E'))) ?
      <Coord>[a, b, nextStep]  : null

const findNextSteps = (x: number, y: number): [up: Coord, down: Coord,left: Coord, right: Coord] => {
   if (x!=null && y!=null) {
      const step = coords[x][y]
      if (step) {
         const validStepThis = validStep(x, y, step)
         return [
            coords[x-1]? validStepThis(x-1, y, coords[x-1][y]) : null,
            coords[x+1]? validStepThis(x+1, y, coords[x+1][y]) : null,
            coords[x]? validStepThis(x, y-1, coords[x][y-1]): null,
            coords[x]? validStepThis(x, y+1, coords[x][y+1]) : null
         ]
      }
   
   }
   
   return [null, null, null, null]
}
const toString = (node: Coord) =>  {
   if (node) {
      return `(${node[0]}_${node[1]}_${node[2]})`
   }
   return `(null)`
}


// part1
// const nextQueue: Node[] = []
// nextQueue.push([<Coord>[20, 0, 'S'], ['(0_0_S)']])

//part2


const bfs = (givenQueue: Node[]) => 
{     
      let nextQueue = [...givenQueue]
      const exhausted: Set<string> = new Set()
      const paths: string[][] = []
      while (nextQueue.length > 0) {
      const [coord, path] = <Node>nextQueue.shift()
      
      if(!coord ) {
         continue
      }
      exhausted.add(toString(coord))
      if(coord[0] == 20 && coord[1] == 148) {
      //if(coord[0] == 2 && coord[1] == 5) {   
         //console.log(`done find ${coord} queue ${nextQueue.length}`)
         paths.push(path)
         //console.log(`>>> path ${path} done`)
         break 
      }
      
      const adjecents = findNextSteps(coord[0], coord[1])
      adjecents.forEach(adjN => {
         if(!adjN) {
            return
         }
         let adj = toString(adjN)
         
         if(!exhausted.has(adj)) {
            if (!nextQueue.some(q => q[0]&&adjN&&q[0][0]==adjN[0] && q[0][1] == adjN[1])) {
               let newpath = [...path, adj]
               exhausted.add(adj)
               ///console.log(`${newpath} done ${toString(coord)}, and queue${nextQueue.map(p=>p[0])}`)
               nextQueue.push([adjN, newpath])
               
            }else {
               ///console.log(`${adj} has already been in the queue`)
            }
            
         } 
      })
   }
   return paths[0]?? []
}

// part1
// bfs()
// console.log(paths.forEach(p => console.log(p.length -1)))

//part2
const results: string[][] = []
allA.forEach(a => {
   let givenQueue = [<Node>[a, [toString(a)]]]
   console.log(`testing ${a}`)
   results.push(bfs(givenQueue))
})
console.log(results.map(r => r.length-1).filter(v=> v>0).sort((a,b)=> a>b? 1 : -1))