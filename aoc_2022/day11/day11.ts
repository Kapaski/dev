/**
 * Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3
 */
    class Monkey {
      name: string;
      inspected: number = 0;
      startingItems: number[];
      operation: (x: number) => number;
      test: (x: number) => boolean;
      eitherMonkey: [number, number] = [-1, -1];
      constructor(
        name: string,
        startingItems: number[],
        operation: (x: number) => number,
        test: (x: number) => boolean,
        eitherMonkey: [number, number] = [-1, -1],
      ) {
        this.name = name;
        this.startingItems = startingItems;
        this.operation = operation;
        this.test = test;
        this.eitherMonkey = eitherMonkey;
      }
      
      catchOne(x: number) {
        this.startingItems.push(x)
      }
    
      throwOne() {
        this.startingItems = this.startingItems.slice(1)
      }
    
      calm(x: number) {
        return Math.floor(x/3);
      }
      calmpt2(x: number) {
        const monkeysTests = [19, 13, 5, 7, 17, 2, 3, 11]
        let mod = Object.values(monkeysTests).reduce(
          (acc: number, t) => (acc *= t),
          1
        );
        return x%mod;
      }
    
      throwTo(item: number): number { 
        if(this.test(item)) {
            return this.eitherMonkey[0]
          }
        return this.eitherMonkey[1]
      }
    
      inspect(): {toMonkey: number, item: number} {
        let item = this.startingItems[0]
        item = this.operation(item)
        //item = this.calm(item)
        item = this.calmpt2(item)
        const toMonkey = this.throwTo(item)
        //console.log(`monkey${this.name} throw to monkey${toMonkey} with item ${item}`)
        this.throwOne()
        this.inspected += 1
        return {
          toMonkey,
          item
        }
      }
    }
    
    const m0 = new Monkey(
      '0',
      [93, 98],
      (x: number) => x * 17,
      (x: number) => x % 19 === 0,
      [5, 3]
    )
    
    const m1 = new Monkey(
      '1',
      [95, 72, 98, 82, 86],
      (x: number) => x + 5,
      (x: number) => x % 13 === 0,
      [7, 6]
    )
    
    const m2 = new Monkey(
      '2',
      [85, 62, 82, 86, 70, 65, 83, 76],
      (x: number) => x + 8,
      (x: number) => x % 5 === 0,
      [3, 0]
    )
    
    const m3 = new Monkey(
      '3',
      [86, 70, 71, 56],
      (x: number) => x + 1,
      (x: number) => x % 7 === 0,
      [4, 5]
    )

    const m4 = new Monkey(
      '4',
      [77, 71, 86, 52, 81, 67],
      (x: number) => x + 4,
      (x: number) => x % 17 === 0,
      [1, 6]
    )

    const m5 = new Monkey(
      '5',
      [89, 87, 60, 78, 54, 77, 98],
      (x: number) => x * 7,
      (x: number) => x % 2 === 0,
      [1, 4]
    )

    const m6 = new Monkey(
      '6',
      [69, 65, 63],
      (x: number) => x + 6,
      (x: number) => x % 3 === 0,
      [7, 2]
    )

    const m7 = new Monkey(
      '7',
      [89],
      (x: number) => x * x,
      (x: number) => x % 11 === 0,
      [0, 2]
    )
    
    const monkeys = [m0, m1, m2, m3, m4, m5, m6, m7]
    for (let r = 0; r < 10000; r++) { // round
      for (let m = 0; m < 8; m++) {
        const items = monkeys[m].startingItems
        if (items.length == 0) {
          console.log(`monkey${m} has nothing, continue`)
          continue
        }
        for (let i = 0; i < items.length; i++) {
          const {toMonkey, item} = monkeys[m].inspect()
          monkeys[toMonkey].catchOne(item)
        }
      }
    }
    
    const sortedMonkeys = monkeys.map((m: Monkey) => { return {name: m.name, inspected: m.inspected}}).sort((a, b) => a.inspected > b.inspected ? -1: 1)
    console.log(`${JSON.stringify(
      sortedMonkeys
    )
    }`)
    
    console.log('part1 ', sortedMonkeys[0].inspected * sortedMonkeys[1].inspected)