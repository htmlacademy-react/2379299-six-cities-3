import { comma } from './const';

export function getRandomValue(value: string[]): string{
  const randomIndex = Math.floor(Math.random() * value.length);
  return value[randomIndex];
}
export function getRandomComma(value: number[]): number {
  const randomIndex = Math.floor(Math.random() * value.length);
  return value[randomIndex];
}

export function getRandomCoordinates(): number {
  const valueForComma: number = getRandomComma(comma) ;
  const result = Math.floor(Math.random() * 10000000000000000) / valueForComma ;
  return Number(result.toFixed(14));
}

export function getRandomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

