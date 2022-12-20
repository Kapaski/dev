import fs from 'fs'

const inputs = fs.readFileSync('testinput.txt').toString().split(/\r?\n/);

class Valve {
  name: string;
  connect: string[];
  rate: number;
  last: number = 0;
  released = () => {
    return this.rate * this.last
  }
  constructor(name: string, connect: string[], rate: number) {
    this.name = name;
    this.connect = connect.map(v => v.trim());
    this.rate = rate;
  }
}

const valves: Valve[] = []

inputs.forEach(input => {
  const mg = input.match(/Valve (\w+) has flow rate=(\d+); tunnel[s]? lead[s]? to valve[s]? (.*)/)
  if (mg && mg[1] != null && mg[2] != null && mg[3] != null) {
    valves.push(new Valve(mg[1], mg[3].split(','), Number(mg[2])))
  }

})

const findV = (name: string|undefined|null) => {
  if(!name) {
    throw new Error('empty name given')
  }
  const currentV = valves.find(v => v.name == name)
  if (!currentV) { throw new Error(`invalid valve name ${name}`)}
  return currentV
}
const dfs = (start: string) => {
  let visited: string[] = []
  const startV = findV(start)
  let queue: Array<[name: string, path: string]> = []
  queue = queue.concat(startV.connect.map(v => [v, v]))
  visited = visited.concat(startV.connect)
  let tick = 0;
  while(queue.length > 0 && tick <=60) {
    const goto = queue.pop() // [ depth vertex -> other branch]
      if (goto) {
      const currentV = findV(goto[0])
      const pathIn = goto[1]
      tick += 1
      if(currentV.rate > 0) {
        //tick += 1
      }
      for(const v of currentV.connect) {
        // v should'nt be equal to goto[0]'s parent, to avoid  A -> B -> A
         if (visited.some(p => p && p == pathIn) && !visited.some(p => p && p == `${pathIn}_${v}`)) {
          const path = visited.find(p => p == pathIn)
        
          if(path && ((path.split('_').length > 1 && path.split('_').reverse()[1] != v) || path.split('_').length == 1)){
            //console.log(path, '  existing, will overwrite into ', `${path}_${v}`)
            visited[visited.indexOf(path)] = `${path}_${v}`
            queue.push([v, `${pathIn}_${v}`])
          }
          
        } 
      }
    }
  }
  return {
    visited: visited,
    tick,
  }
}
console.log(dfs('AA'))