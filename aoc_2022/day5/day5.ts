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
const testdata = [[], ['n', 'z'].reverse(), ['d', 'c', 'm'].reverse(), ['p']]
const stack1 = ['w', 'p', 'g', 'z', 'v', 's', 'b'].reverse()
const stack2 = ['f', 'z', 'c', 'b', 'v', 'j'].reverse()
const stack3 = ['c', 'd', 'z', 'n', 'h', 'm', 'l', 'v'].reverse()
const stack4 = ['b', 'j', 'f', 'p', 'z', 'm', 'd', 'l'].reverse()
const stack5 = ['h', 'q', 'b', 'j', 'g', 'c', 'f', 'v'].reverse()
const stack6 = ['b', 'l', 's', 't', 'q', 'f', 'g'].reverse()
const stack7 = ['v', 'z', 'c', 'g', 'l'].reverse()
const stack8 = ['g', 'l', 'n'].reverse()
const stack9 = ['c', 'h', 'f', 'j'].reverse()

const test = [[], stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9]

const steps = fs.readFileSync('input.txt').toString().split(/\r?\n/);
const stepRegx = /move (\d+) from (\d+) to (\d+)/s
const intepretedStep = (step: string) => {
  //console.log(`parsing  >${step}<`)
  const match = step.match(stepRegx)
  if(match) {
    return [ match[1], match[2], match[3]]
  }
  return ['0', '0', '0'] //never
}

steps.forEach(step => {
  const [q, s, t]: string[] = intepretedStep(step) // quantity, source, target
  for(let i = 0; i < Number(q); i++) {
    const sStack = test[Number(s)]
    const tStack = test[Number(t)]
    if(sStack.length < 1) {
      console.log('sStack is empty ', s, sStack)
      continue
    }
    const take = sStack.pop()?? 'what'
    
    tStack.push(take)
    
  }
  
  
  
})
const result = test.map(s => {
  return s.pop()?? ''
})
console.log(result.join(''))