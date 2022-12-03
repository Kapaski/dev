import fs from 'fs';

const priority = Array.from('0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
var output = fs.readFileSync('input.txt').toString().split(/\r?\n/);
let all = 0;
let counter = 0;
output.forEach(bag => {
  const [c1, c2] = [new Set(Array.from(bag.slice(0,bag.length/2))), new Set(Array.from(bag.slice( bag.length/2)))];
  let common: string[] = [];
  c1.forEach(p => { 
    if (c2.has(p)) { 
      common.push(p); 
      all += priority.indexOf(p)
      counter += 1
    }
  });
  
});
console.log(all)
console.log(counter)


