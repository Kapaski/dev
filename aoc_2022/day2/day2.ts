const input = `
C Z
C X
B Z
A X
A Z
C Z
A Y
C Z
C Z
A X
C Y
A Z
B Z
C Z
C Z
B Z
C Z
B Z
C Z
A X
C Z
C Z
A X
C Z
B Z
B Z
C Z
C Z
B Z
A X
A X
C Z
C Z
A X
B Z
B Z
B Z
A X
A X
A X
B Z
C Z
C Z
C Z
B Z
C X
B Z
B Z
A X
C Z
C Z
B Z
A Y
A Z
C X
A X
C Z
C Z
B Z
C Z
C Z
C X
C Z
A X
B Z
B Z
C X
C Z
B Z
B Z
C Z
B Z
B Z
C Z
B Z
A Z
A X
C Z
B X
B Z
C Z
C Z
A Z
B Z
C Z
B Z
B Y
A Z
C Z
B Z
A X
A Y
C Z
B Z
B Z
A X
B Z
A Z
B Z
C Z
C Y
C Z
B Z
C Z
C Z
C Z
C X
B Z
B Z
B Z
B Z
A X
C Z
C Z
A X
C Z
B Z
B Z
C Z
C Z
C Z
A X
B Z
C Z
B Z
B Z
C X
A Z
B Z
C Z
A X
A X
A X
B Z
B Z
B Z
B Z
B Z
B Z
C Z
B X
C Z
C Z
B X
C Z
C Y
A X
C Z
A Z
A X
B Z
B Z
B Z
C Z
C X
A Z
C Z
C Y
A Y
A X
B Z
B X
C Z
A Z
C Z
B Z
B Z
A X
B Z
A X
C Y
B Z
B Y
A Z
B Z
A X
C Z
A X
C Z
B Z
A Z
B Z
A Y
C Z
C Z
C Z
B X
C Z
A X
B X
B Z
C Z
A X
B Z
B Z
A Z
B Y
B Z
B Z
C Z
C Z
B Z
C Z
B Z
A X
B X
A X
C Y
B Z
C Z
C Z
C Z
B Z
B Z
C Z
A X
A Y
C Z
B Z
B Z
C Z
B Y
C Z
B Z
C Z
B Z
B Z
C X
B Z
A Z
A X
A X
C Z
B Z
C Z
C Z
C Z
B Z
A Y
C Z
C Z
C Z
B Z
C Z
B Z
A X
C Z
B X
C Z
A X
B X
A Z
B Z
B X
A X
C Z
A Y
A Y
C X
C Z
C Z
A X
A Y
B Z
A Z
B Z
A X
C Z
B X
B Z
B Z
B Z
B Z
C Y
B Z
B Z
B Z
A Z
A Y
C Z
C Z
B Z
A Z
A X
A Y
C Z
B X
C Z
A X
A Z
B Z
A X
A X
C X
A X
A X
A Z
C Z
B Z
C Z
C Z
B Z
B Z
A Y
B Z
B Z
C Z
B Z
A Y
A X
B Z
C Z
B Z
A X
C Z
C Z
C Z
B Z
A Z
C Z
C Z
B Z
C X
B Z
B Z
B Z
A Y
A X
B Z
C Z
C Z
A Z
B Y
C Z
B Z
B Z
B Z
A X
A X
C Z
C Z
A X
C Z
B Z
A X
B Z
A X
B Z
B Z
A X
A X
C Z
A Y
A Z
B Y
C Z
C Z
B Y
A Z
C Z
B Z
C Z
C Z
B Z
C Z
A Y
C Z
A X
B X
C Z
A Y
B Z
B Z
C Z
B Z
A X
B Z
B Z
B Z
B Z
B Z
A Z
B Z
B Y
C Z
B Z
C Z
C X
B Z
B Z
B Z
B Z
A X
B Z
B Z
C Z
B Z
A X
A X
A Z
C Z
C Z
A X
A X
C Z
C Z
C Z
A Y
C Z
B Z
C Z
C Z
A Y
C Z
B Z
C X
A X
C Z
C Z
C Z
C Z
A X
C Z
C Z
A Y
C Z
C X
A X
C Z
B Z
C Z
A Z
B Z
B X
A Z
C Z
C Z
A X
C X
B Z
A Y
C Z
A X
B Z
C Z
A X
B Z
A X
C Z
C Y
B Z
A Y
B Z
B Z
B Z
B Z
A X
B Z
B Y
C Z
C Z
B Z
B Z
C Z
B Y
B Z
B Z
B X
B Z
C Z
B Z
A Y
A X
A X
C Z
C X
C Z
B Z
A Z
C Z
C Z
B Z
A Y
C Y
A X
A X
A X
B Z
A X
B Z
B Z
A Y
B Y
C Z
B Z
B Z
C Z
A X
A X
C Z
A Z
B Z
B X
B Z
B Z
A Y
C Z
B Z
A X
C X
C Z
C Z
B Z
A Z
C Z
C Z
C Z
C Z
C Z
C Y
C Z
B Z
B X
C Z
B Z
B Z
B Z
B Z
C Z
B Z
C X
C Z
B X
C Z
A Y
C Z
B Z
B Z
B Y
C Z
A X
B Z
C Z
C Y
A Y
A X
C Z
B Z
C Z
B Z
A X
A Y
A Y
B Y
C Z
C Z
C Z
B Z
C Z
A X
B Z
B X
B Z
C Z
C Z
B Z
B Z
B Z
B Z
A X
A Z
A Y
B Z
B X
B Z
C Y
B Y
B Z
B Z
B Z
C Y
C Z
B Z
A X
A X
A X
C Z
A Y
B Z
B Z
B Z
B Z
A X
B Z
B Z
C Z
B Z
A X
A X
A X
C Z
C Z
B Z
C Z
C Z
C X
B Z
C Z
C Z
B Z
A Y
B Z
B Z
C Z
C X
C Y
A X
C Z
A X
C Z
C Z
C Z
B Z
B Z
A Y
B Z
B Z
C Z
C X
C Z
B Z
B Z
B Z
C X
B Y
B X
A Z
C Z
B Z
A Z
B Y
B Z
A X
B Z
B Y
B Y
B Z
C Z
A X
C Z
B Z
C Z
C Z
A X
C Y
A Z
B Z
C Z
C Z
A X
B Y
C Z
C Z
A Z
C Z
B Z
B Z
C Z
B Z
A X
B Z
A Y
B Z
C Z
B Z
C Z
B Z
A Y
A X
A Y
C X
C Z
A X
C Z
A Z
C Z
C Z
A Z
C Z
A Z
B Z
C Z
B Z
A Z
B Z
B Z
A X
A Y
A X
C X
B Z
C Z
B Z
A X
C Z
B Z
A X
C Z
A X
C Y
A Y
C Z
C X
B Z
B Z
A X
C Z
B Y
C Z
A Y
B X
C Z
A X
B Z
C Z
C Z
C Z
B Z
B Z
A Z
C Z
A Y
B Z
B Z
A Y
B Z
B Z
B Z
C Z
B Z
C Z
A X
B Z
B Z
C Y
C Z
A X
C Z
C Z
C Z
C Y
C Z
A Z
B Z
B Z
C Z
B X
B Z
B Z
A Z
A X
C Z
C X
C Z
A Y
B Z
C Z
B Z
C Z
C Z
C X
B Z
B X
A Z
B Z
B Y
C Z
C X
C Z
A Z
C Z
B Z
C Z
C Z
C Y
C X
C Y
A Z
C X
A X
C Y
B Y
A Z
B Y
C Z
C Z
C Z
B Z
C Z
A X
C Z
A X
B Z
C Z
C Z
A Y
B Z
C Z
C Z
C Z
A X
B Z
C Z
B Z
C Z
B Z
B X
B Z
C Z
B Z
B Z
A Z
A Y
B Z
B Z
B Z
C Z
B Z
B Z
B Z
A Y
C Z
A X
C Z
A X
B X
C Z
B Z
B Z
B Z
C Z
C Z
C X
B Z
B Z
C Z
B Z
C X
A X
B Y
A X
A Z
B Z
C Z
B Z
C X
B X
A Z
C Z
C Z
C Z
A Z
B X
C Z
B Z
A X
B Z
C Z
A X
B Z
C Z
C Z
B Z
C Z
C Z
B Z
C Z
A Z
C Z
A Y
B Z
B Z
B Z
C Z
A Y
C Z
B Z
C Z
B Z
A Z
C Y
C Z
C Z
A X
C Z
B Y
C Z
B Z
A Z
B Z
C Z
B Z
C Y
B Z
C Z
C Z
B Z
C Z
C Z
C Z
C Z
C Z
A X
A Z
A Y
A Y
C Z
A X
A Z
B Z
A Y
A X
B X
C Z
A Y
B Z
B Z
B Z
B Z
A Z
C Z
A X
B Y
C Y
C Y
C Z
C X
A X
A Y
B Z
A Z
A X
C Z
C Z
B Z
C Z
A Y
B Z
A X
C X
A X
B Z
C Z
C Z
A Y
A X
B Z
B Z
B Z
C Z
B Z
B Z
B Z
B X
C Y
C Z
C Z
B X
B Z
B Z
C Z
A X
B Z
B Z
B Z
A Z
B Z
B Z
B Z
C Z
A X
C Y
C Z
B Z
B Z
B X
A Z
A X
B Z
B Z
A Y
B Z
B Z
C Z
C Z
C X
B X
B Z
C Z
C Z
A X
C Z
A Z
C Z
C Y
A X
B Z
A X
A X
C Z
B X
C Z
A X
C Z
C Z
C Z
A Y
A X
C Z
A Z
C Z
B Z
C Y
C Z
B Z
A Y
C Z
B X
A X
B Z
C Z
A X
B X
B Y
B Z
B Z
A Y
B Z
B X
B Y
B Z
C Z
C Z
A Z
A X
C Z
A Z
C Z
A X
C Z
C Z
B Z
B Z
C Z
C X
C Z
A X
C Z
B Z
C Z
A X
A X
A X
C Z
C Z
A Z
C Z
B Z
A X
B Z
B X
C Z
B Z
C Z
B Z
B X
C Z
A Z
A Z
C Z
B Z
B Z
B Z
C Z
C X
B Z
A X
B Z
B Z
C Z
B Z
C Z
B Z
B X
C Z
C Z
A X
C Z
C Z
B Z
A X
C Y
B Z
C Z
A Y
B Z
C Z
A X
B Z
C Z
C X
A Z
C Z
C Y
B Z
B Z
A X
B Z
B Z
A Z
C Z
B Z
A X
A Z
B Z
B Z
C Z
C Z
A X
A Y
B Z
B Z
A Y
A X
C Z
A Y
A X
C Z
C Z
B Z
A X
C Z
A X
C Z
B X
C Z
B Z
C Y
B Z
C Y
C Z
B Z
B Z
A Y
C Z
C Y
A X
B Z
B Z
A X
B Z
B Z
B Z
A X
A Y
C Z
C Z
C X
B X
A X
A X
B Z
A X
B Z
B Z
B Z
B X
C Z
C Z
B Z
C Z
C Z
A X
B Z
C Z
C Z
C Z
C Z
B Z
C Z
C Z
B Z
B Z
A X
C Z
B Z
C Z
C Z
C Z
B Z
A X
C Z
A Y
B Z
C Z
C Z
C Z
A X
B Z
C Y
C Z
C X
B Z
B Z
B Z
A Z
C Y
B Z
B Z
B Z
C Z
C Y
A X
B Z
B Z
C Y
C Z
A X
A Z
C X
C X
A Z
B X
A X
C Z
C Z
B Z
C Z
B Y
C Z
C Z
B Z
B Z
A Z
B Z
B Z
A X
C Z
B X
B Y
B Z
C Y
C Z
B Z
A Z
C Z
C Z
B Z
C Z
A Z
C Z
A X
C Z
C Z
A Z
C X
C Z
A X
C Z
A X
C Z
A X
A Z
B Z
C Z
C Z
C Z
A X
A Z
C Z
C Y
A Y
C Y
C Z
B Y
A X
C Z
B Z
C Z
C Z
B Z
C Z
B Z
C X
C Z
B Z
C Z
A X
A X
A X
B Z
B Z
B Z
A X
A Z
B Z
C Z
C Z
A X
A Y
C Z
A X
C Z
A Y
A X
A Z
A Z
C Z
C Z
B Y
C Z
A X
B Z
A Z
B Z
C Z
A X
C X
B Z
B Z
C Z
C Z
A X
B Z
C Z
B Z
A X
B Z
C Y
A X
B Z
B Z
C Z
C Z
A X
B Z
B Z
C Z
B Z
C Z
A X
C Z
C Z
B Z
A X
C Z
B Z
B X
C Z
C Y
B X
A Z
A Z
C Z
A Y
B X
B Z
C Z
C Z
C Z
A Z
C Z
C Z
C Y
C Z
B Z
A Z
A Z
C X
C Z
B Y
C Z
C Z
C X
B Y
A X
C X
A Y
C Z
A Y
C Y
A X
B Z
C Z
B Z
A X
A X
C Z
B Z
A X
C Z
A Y
C X
B Z
C Z
C Z
A X
C Z
C Z
A X
C Y
A X
A X
C Z
B Z
A X
A X
C Z
A X
C Z
B Z
A Z
C Z
B X
C Z
C Z
B Z
A Y
A X
C Y
B Z
B Z
B Z
A X
A Z
C Z
C Z
C Z
A Z
B Z
C Z
A Z
B Z
C Z
A X
A X
B Z
A X
C Z
C Z
B Z
C X
B Z
A X
A X
C Z
C Z
B Z
A X
A Y
B Z
A X
C Z
C Z
A X
A Y
A X
C X
A Y
A X
B Z
C Y
B Z
C Z
C Z
B Z
C Z
C Z
C X
C Z
C X
B Z
B Z
C Z
B X
C Z
B Z
C Z
C Z
A Y
B X
A X
A Y
A X
B Z
C Z
C Z
A X
C Y
B Z
B Z
B Z
B Z
A X
C Z
A X
B Z
C Z
A Z
C X
B X
C Z
B Y
A Z
A Y
A X
C Z
B X
B Z
A Z
A X
A Z
C Z
B Z
C Z
A X
B Z
C Z
B Z
B Z
C Z
B X
B Z
A X
A X
A X
B Z
B Z
B Z
A X
C Z
C Y
B Z
B X
C Z
C Y
B Z
A X
C Z
C X
A X
B Z
C Z
A Z
B X
B Z
A X
C Z
B Z
B Z
B X
A Y
C Y
B Z
C Z
C X
C Z
B Z
C Z
A X
A X
B Z
A X
B Z
B Z
C Z
C Z
A X
B Z
C Y
B Z
C Z
C Z
C Z
B Z
B X
C Z
C Z
C Z
B Z
B Z
C Z
A X
A Y
B Z
C Z
A Z
B X
B Z
C Z
C Z
B Z
C X
B Z
C Z
A X
B Z
A X
B Z
B Z
C X
A Y
C Z
C Z
A X
B Y
C Z
B X
C Z
B Z
A Z
A X
A X
A Z
A X
A X
C Z
C Z
C Z
C Z
B Z
A Y
B Z
B Z
C Z
B Z
C Z
C Z
B Z
B X
A Y
C Z
C Z
B Z
B Z
C Z
B Z
B Z
C Z
C Z
A Z
C Z
B Z
B Z
C Z
C Z
C Y
C Z
A Y
B Y
C Z
A X
B Z
C Z
A Y
B Z
B Z
B Z
C Z
C Z
A X
A X
C Z
C X
B Z
C X
A Z
C Z
B Z
C Z
C Z
C X
B Z
C Z
B Z
C Z
A X
C X
C Z
C Z
B Z
C Z
C Z
B Z
B Z
A X
C Z
C Z
B Z
A X
A X
C Z
A Y
B Z
C Z
C Z
C Z
B X
C Z
C Y
B Z
B Z
C Y
A X
A Y
C Z
A Z
B Z
A X
B Z
C Y
B Z
C Z
B Z
B Z
B Z
A X
C Z
B Z
C Z
C Z
C Y
C Z
A Y
C Z
C Y
A Z
B Z
C Z
A X
B Z
B Z
C Z
C X
A X
C Z
A Z
A X
C Z
A Z
C Z
B Z
A Z
C Z
B Z
B Z
B X
B Z
C Z
A X
C Z
B Z
B Z
A X
B Z
C Z
B Y
A X
A Z
C Z
B Y
A Z
A Y
C X
B Z
B Z
C X
C Y
A X
A Y
C Z
A X
A Z
B Z
B Z
A X
A X
C Z
A X
C X
A X
C Z
A X
B Z
C Z
B Z
B Z
A X
C Z
B Z
B Z
B Z
A X
C Z
A X
B Z
C X
B Z
A Z
A X
C X
C Y
B Z
C Z
C X
B Z
A X
C Z
B Z
A X
B Z
A Z
C Z
B Z
C X
B Z
C Z
A Z
A X
A X
A Y
A X
C Z
B Z
C Z
A X
C Z
C Z
B Z
C Z
C Z
C Z
C Z
C Z
C Z
B Z
B Z
B Z
B Z
B Z
C Z
B Z
B X
C Z
B Y
B Z
C Y
A Z
B Z
A Z
B Z
C Z
C Z
C Z
B Z
A X
C Z
A X
B Y
C Z
C X
B Y
A X
C Z
C Z
A Y
A X
B Z
A Y
B Z
C Z
C Z
A X
B Z
B Z
C Y
C Z
B Z
C Z
B X
C Z
B Z
B X
A Y
A X
C Z
B Z
B Z
C Z
B Z
A Y
C Z
A Y
B Z
C Z
B Z
A Z
B Z
C Z
C Z
A Z
C Z
C X
A Y
A X
C Z
B Z
C Z
C Y
C Z
C Z
B Z
C Z
C Z
B Z
C X
B Y
C Z
B Z
A X
C Z
B Z
B Z
A Y
C Z
C Z
B X
B Z
C Z
A Z
C Z
A Z
C Z
C Z
B Z
C X
B Y
C Z
C Y
C Z
C Z
C Z
A X
A X
B Z
C Z
C Z
B Z
C Z
A X
C Z
C Y
A X
B Z
B Z
A X
A Y
B Z
B X
A X
C Z
C Z
B Z
A Z
B Z
B Z
C Y
A Y
B X
C Z
A Z
A Z
B Z
A Z
C Y
B Z
B Z
C Z
A X
C Z
C Z
B Z
B Z
C Z
C Z
C Z
A Y
B Z
C Z
A Z
C Z
A X
B Z
C Z
A Y
B Z
B Y
C Z
B Z
C Z
C X
A X
B Z
B Z
C Z
A X
A X
B Z
C Z
B Z
C Z
B X
B Z
B Z
B Z
C Z
B Z
B Z
C Z
A X
A X
C Z
B Y
A X
A Z
B Z
B Z
B Z
C X
B X
B Z
C Z
A X
A Z
B X
A Z
B Z
C Z
A Y
C Z
B Y
B Z
B Y
C Z
A Z
C Z
B Z
C Z
C Z
A X
A X
B Z
B Z
B X
B Y
A X
C Z
B Z
C Z
B X
C Z
B Z
C Y
C Z
B Z
A X
A Z
B Y
A X
B Z
A X
C Z
B Z
C Z
B Z
C Z
C Z
A X
C Z
B Z
B Z
A X
B Y
C Z
B Z
C X
B Z
C Z
B Z
B Z
B Z
C X
B X
C Z
A X
B Z
B Z
B Z
C X
B Z
C Z
B Z
A X
C Z
C Z
B X
C Y
C Z
B Z
B Y
C Z
B X
C Z
A Z
C Z
C Z
B Z
B Z
A Z
A X
B Z
C X
B Z
C Z
B Z
C Z
C Z
B Z
A X
B Z
C Z
C Z
C Z
C Z
A Y
B Z
B Z
C Z
B Z
C Z
C Z
B Z
A Y
C Z
C Z
C X
B Z
A X
B Z
C Z
C Z
C Y
B X
C Z
B X
B Z
B X
A X
A X
A Y
A Y
A Z
A Z
C Z
C Z
C Z
C Z
C Z
A X
A X
C X
B Z
B Z
C Z
C Z
A X
C Z
A X
B Z
C X
B Z
C Z
B Z
B Z
B Z
C Z
C Z
A X
A X
C Z
C Z
A X
A Y
B Z
A Z
A X
C Z
B Z
C Z
C Z
A X
A X
C Z
A X
B Z
C Z
C Z
A Z
C Z
C Z
A X
B Z
A X
B Z
C Z
B Z
C Z
C Y
A Z
A X
C Z
B Z
C X
A Z
B Z
B Z
C Z
A X
B Z
A X
C Z
B Z
B Z
B Z
B Z
A Z
B Z
B Z
C Z
A X
B Z
C Z
C Z
C Y
A X
A X
B Z
C Z
C Z
B Z
C Z
C Y
C Y
A X
C Z
C Z
A X
B Z
B Z
C Z
A Y
A Y
C Z
B Z
C X
B Z
B Z
C Z
A X
B Z
A X
C Z
C Z
A X
B Y
C Z
B X
C Z
C Z
B Z
A X
B Z
A Y
C Z
C X
A X
A Y
C Z
B Y
B Z
B Z
B Z
A Z
B Z
C Z
B Z
B X
B Z
C Z
B Z
C Z
B Z
A X
B Z
A Z
C Z
B X
A X
C Z
B Z
C Z
A Z
A X
B Z
B Z
B Z
B Z
C Z
B Z
C Z
B Z
B Z
B Z
B Z
C Z
C Z
C Y
A Y
C Z
C Z
B Z
B X
A X
C Z
A Y
C Y
C X
C Z
C Z
B Z
B Z
C X
A Z
B Z
C Z
C Z
A X
C X
B Z
B Z
A X
B X
B Z
C Z
B Z
C Z
C Y
B Z
B Z
B Z
C Z
A Z
C Z
C X
C Z
B Z
B Z
A Y
B Z
C X
C Z
A X
C Z
B Z
A X
C Z
A Y
B Z
B Z
A X
B Z
B Z
C Z
B Z
B Z
C Z
B X
B Z
B Z
A Y
C Z
B Z
C Z
B Y
C Z
A X
C X
A X
C Z
A Z
A Y
C Z
C Z
A Y
B Z
B X
C Z
A X
B Z
C Z
C Z
C Z
B Z
A Y
A Y
C X
B Y
C Z
B Z
A X
C Z
A Z
B Z
A X
B X
A Z
B Y
A Z
A Y
B Z
B Z
A Z
B Z
A Z
B Z
B Z
C Z
A Z
C Z
C Z
C Z
A Z
C Z
B Z
A X
B Z
A X
A X
B Z
B Z
C Z
B Z
A X
C X
B Z
C Z
C Z
C Y
C Z
C Z
B Z
B Z
C Z
B Y
A X
C Z
C Z
C Z
C Z
C Z
C Z
B Z
B Z
C Z
C Z
A X
C Z
C Z
A X
B Z
B Z
C Z
B Z
C Z
B Z
B Z
B Z
B Z
C Z
C Z
`;

const tuples = input.split('\n').filter((v) => !!v);

const theirs: { [p: string]: number } = {
  A: 1,
  B: 2,
  C: 3,
};

const yours: { [p: string]: number } = {
  X: 1,
  Y: 2,
  Z: 3,
};

const rule: { [p: string]: number } = {
  'A X': 3,
  'A Y': 6,
  'A Z': 0,
  'B X': 0,
  'B Y': 3,
  'B Z': 6,
  'C X': 6,
  'C Y': 0,
  'C Z': 3,
};

const matches = tuples.map((play) => {
  const base = rule[play];
  const [o, y] = play.split(' '); // opponent's, yours
  const plus = yours[y];
  return base + plus;
});

// part 1
console.log(
  'part1: ',
  matches.reduce((a, b) => a + b),
);

const tobe: { [p: string]: number } = {
  X: 0,
  Y: 3,
  Z: 6,
};
const keyOfRules = Object.keys(rule);

const plottedMatches = tuples.map((play) => {
  const [o, y] = play.split(' '); // opponent's, yours
  const base = tobe[y];
  const useKey = keyOfRules.find(
    (k) => k.split(' ')[0] == o && rule[k] == base,
  );

  if (useKey) {
    const plus = yours[useKey.split(' ')[1]];
    return plus + base;
  }

  return 0;
});
// part2
console.log(
  'part2: ',
  plottedMatches.reduce((a, b) => a + b),
);