
export function getRandomValue(value: string[]): string{
  const randomIndex = Math.floor(Math.random() * value.length);
  return value[randomIndex];
}
