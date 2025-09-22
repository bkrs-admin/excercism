export function decodedValue(color: string []): number {
  let result: number = 0;
  
  const color1:number = COLORS.indexOf(color[0]);
  const color2:number = COLORS.indexOf(color[1]);
  
  result = (color1 * 10 + color2);
  
  return result;
  
}

export const COLORS: string[]=[
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];