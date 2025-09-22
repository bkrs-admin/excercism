export const colorCode = (color: string): number => {
  const index = COLORS.indexOf(color)
  return index != -1 ? index : 0;
}

export const COLORS = [
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