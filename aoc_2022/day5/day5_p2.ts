/**
 *          [C] [B] [H]                
[W]     [D] [J] [Q] [B]            
[P] [F] [Z] [F] [B] [L]            
[G] [Z] [N] [P] [J] [S] [V]        
[Z] [C] [H] [Z] [G] [T] [Z]     [C]
[V] [B] [M] [M] [C] [Q] [C] [G] [H]
[S] [V] [L] [D] [F] [F] [G] [L] [F]
[B] [J] [V] [L] [V] [G] [L] [N] [J]
 1   2   3   4   5   6   7   8   9 
example:
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

 */
import fs from 'fs'
//const test = [[], ['n', 'z'], ['d', 'c', 'm'], ['p']]
const stack1 = ['w', 'p', 'g', 'z', 'v', 's', 'b']
const stack2 = ['f', 'z', 'c', 'b', 'v', 'j']
const stack3 = ['c', 'd', 'z', 'n', 'h', 'm', 'l', 'v']
const stack4 = ['b', 'j', 'f', 'p', 'z', 'm', 'd', 'l']
const stack5 = ['h', 'q', 'b', 'j', 'g', 'c', 'f', 'v']
const stack6 = ['b', 'l', 's', 't', 'q', 'f', 'g']
const stack7 = ['v', 'z', 'c', 'g', 'l']
const stack8 = ['g', 'l', 'n']
const stack9 = ['c', 'h', 'f', 'j']

const test = [[], stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9]

const steps = fs.readFileSync('input.txt').toString().split(/\r?\n/);
const stepRegx = /move (\d+) from (\d+) to (\d+)/s
const intepretedStep = (step: string) => {
  console.log(`parsing  >${step}<`)
  const match = step.match(stepRegx)
  if(match) {
    return [ match[1], match[2], match[3]]
  }
  return ['0', '0', '0'] //never
}

steps.forEach(step => {
  const [q, s, t]: string[] = intepretedStep(step) // quantity, source, target
  let sStack = test[Number(s)]
  let tStack = test[Number(t)]
  const take = sStack.slice(0, Number(q))
  sStack = sStack.slice(Number(q))
  tStack = [...take, ...tStack]
  test[Number(s)] = sStack
  test[Number(t)] = tStack
  //console.log(test)
})
const result = test.map(s => {
  return s[0]?? ''
})
console.log(result.join(''))