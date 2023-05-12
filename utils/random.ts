export const generateNumberRandom = (min = 50, max = 100): number => {

  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * difference);
  rand = rand + min;

  return rand;
}

export const generateRange = (meta:number = 100): number[] => {
  const p = meta / 10;
  const range: number[] = []
  for (let i = 1; i <= 10; i++) {
    range.push(p * i)
  }
  return range;
}