import fs from 'fs'

const cmds = fs.readFileSync('input.txt').toString().split(/\r?\n/);

class File {
  name: string;
  size: number;
  inDir: string;
  constructor( name: string, size: number, inDir: string) {
    this.name = name;
    this.size = size;
    this.inDir = inDir;
  }
}
class Dir {
  dirs: Dir[];
  files: File[];
  name: string;
  inDir: Dir | null;
  constructor(name: string, dirs: Dir[], files: File[], inDir: Dir | null) {
    this.name = name;
    this.dirs = dirs;
    this.files = files;
    this.inDir = inDir;
  }
  findDir(dirname: string) {
    return this.dirs.find(d => d.name === dirname)
  }

  totalFileSize() {
    return this.files.reduce((t, f) => { return t += f.size}, 0)
  }
  
}

const rootDir = new Dir('/', [], [], null);
let currentDir = rootDir;
const traverseFolders = (item: string) => {
  if(item.includes('dir')) {
    const [type, name] = item.split(' ')
    const dir = new Dir(name, [], [], currentDir)
    currentDir.dirs.push(dir)
  } else if (Number.isInteger(Number(item.split(' ')[0]))) {
    const [size, name] = item.split(' ');
    
    currentDir.files.push(new File(name, Number(size), currentDir.name))
    
  } else if (item.includes('cd')) {
    const [cd, dirname] = item.split(' ')
    
    if (dirname.includes('..')) {
      if(currentDir.inDir) {
        currentDir = currentDir.inDir
      } else {
        console.log('never happen')
      }
    } else {
      const currentSubDir = currentDir.findDir(dirname?? '')
      if (currentSubDir) {
        currentDir = currentSubDir;
      } else {
        const newSubDir = new Dir(dirname, [], [], currentDir)
        currentDir.dirs.push(newSubDir)
        
        currentDir = newSubDir
      }
    }
  } else if (item == 'ls') {
    
  }
}

function path(dir: Dir): string {
  let nextName = '';
  if (dir.inDir) {
    nextName = path(dir.inDir)
  } 
  return dir.name + '_' + nextName;
}

function traverseSizes(insideDir: Dir, result: {[dirname: string]: number}) {
  if (insideDir.dirs.length > 0 ) {
    insideDir.dirs.forEach(d => {
      traverseSizes(d, result)
      return
    })
  }
  const dirpath = path(insideDir)
  
  result[dirpath] = result[dirpath]? (result[dirpath] + insideDir.totalFileSize()) : insideDir.totalFileSize()
  
  if (insideDir.inDir) {
    const parentDirpath = path(insideDir.inDir)
    result[parentDirpath] =  result[parentDirpath]? result[parentDirpath]+result[dirpath] : result[dirpath]
  }else {
    //root
  }
  return result
}



cmds.forEach((item: string, idx: number) => {
  if(idx < 2) {
    return
  }
  traverseFolders(item.replace('$', '').trim())
})

const sizes = traverseSizes(rootDir, {})

let total = 0;
Object.entries(sizes).forEach(size => {
  const [k, v] = size;
  if (v <= 100000) {
    total += v;
  }
})
// part_1
console.log('part1', total)

// part_2
let all = 0;

// root path '/_' size 40268565
const currentFree = 70000000 - sizes['/_']
const needMore = 30000000 - currentFree

const sizeVals = Object.values(sizes)
sizeVals.push(needMore)
sizeVals.sort((a,b) => a > b? 1 : -1)

console.log('part2', sizeVals[sizeVals.indexOf(needMore)+1])
