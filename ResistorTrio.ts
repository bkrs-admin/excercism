export function decodedResistorValue(code: string[]): string {
  const COLOR_MAP = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
  };

  const firstDigit = COLOR_MAP[code[0] as keyof typeof COLOR_MAP];
  const secondDigit = COLOR_MAP[code[1] as keyof typeof COLOR_MAP];
  const multiplier = COLOR_MAP[code[2] as keyof typeof COLOR_MAP];
  

  let value = (firstDigit * 10 + secondDigit) * Math.pow(10, multiplier)
  
  if (value >= 1_000_000_000) {
    return `${value / 1_000_000_000} gigaohms`;
  }
  if (value >= 1_000_000) {
    return `${value / 1_000_000} megaohms`;
  }
  if (value >= 1_000) {
    return `${value / 1_000} kiloohms`;
  }

  return `${value} ohms`;
  
}
