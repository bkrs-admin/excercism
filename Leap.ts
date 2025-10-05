export function isLeap(year: number): boolean {
  let flag: boolean = true;
  
  if (year % 4 != 0){
    flag = false;
  } else if (year % 400 != 0 && year % 100 == 0){
    flag = false;
  }

  return flag
}