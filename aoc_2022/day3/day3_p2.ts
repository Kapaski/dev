import { groupCollapsed } from 'console';
import fs from 'fs';

const priority = Array.from('0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
var output = fs.readFileSync('input.txt').toString().split(/\r?\n/);

type check = {[k: string]: number}
let group: string[] = []

const toMap = (m: check, eSet: Set<string>) => {
  eSet.forEach(e => {
    if (m[e]) {
      m[e] += 1
    } else {
      m[e] = 1
    }
  })
  return m
}

let counter = 0;
output.forEach((bag, seq)=> {
  group.push(bag);
  if((seq+1)%3 == 0 ) {
    let mapCheck: check = {}
    const [c1, c2, c3] = [new Set(group[0]), new Set(group[1]), new Set(group[2])];
  
    mapCheck = toMap(mapCheck, c1);
    mapCheck = toMap(mapCheck, c2);
    mapCheck = toMap(mapCheck, c3);
    const common = Object.entries(mapCheck).find( tuple => tuple[1] == 3 )

    if (common) counter += priority.indexOf(common[0])
    group = []
    return
  }

  
});

console.log(counter)


