export function decodedResistorValue(param: string[]): string {
  const first: number = COLORS.indexOf(param[0]) * 10
  const second: number = COLORS.indexOf(param[1])
  const third: number = COLORS.indexOf(param[2])

  let total:number = (first + second) * exponetial(third)

  const res:string = digitToFormat(total)

  return res
}

export function exponetial(index: number): number{
  let res:number = 0;
  
  if(index === 0){
    res = 1
  } else {
    res = 10 ** index
  }
  
  return res 
}

export function digitToFormat(value: number): string{
  const KILO = 1000
  const MEGA = 1000000
  const GIGA = 1000000000
  let res: string = "";
  
  if (value >= KILO && value < MEGA){
    res = `${value/1000} kiloohms`
  } else if (value >= MEGA && value < GIGA){
    res = `${value/1000000} megaohms`
  } else if (value >= GIGA){
    res = `${value/1000000000} gigaohms`
  } else {
    res = `${value} ohms`
  }
  
  return res
}

export const COLORS: string[] = [
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
]