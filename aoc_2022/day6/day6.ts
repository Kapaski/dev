import fs from 'fs'

const testInput = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;
const input = fs.readFileSync('input.txt').toString()
const decode = Array.from(input)
let decodeBook: string[] = []
let seq = 0;
//part1 counter
const counterPart1 = 4;
//part2 counter
const counterPart2 = 14;
decode.forEach(s => {
  if(decodeBook.length === counterPart1) {
    return
  }
  seq ++;
  if(decodeBook.includes(s)) {
    decodeBook = decodeBook.slice(decodeBook.lastIndexOf(s)+1)
    
  }
  decodeBook.push(s)
  console.log('ongoing ', s, decodeBook) 
  
})
console.log(decodeBook)
console.log(seq)