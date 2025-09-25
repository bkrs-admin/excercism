// Original Solution
export function isPangram(word: string) :boolean {
  function isAlpha(str: string): boolean {
    return /^[A-Za-z]+$/.test(str);
  }
  
  const h_map: Map<string, number> = new Map(); // Keys are strings, values are numbers

    // edge case 
  if (word === ''){
    return false;
  }

  let lower = word.toLowerCase();
  
  for(let i = 0; i < word.length; i++){
    if (isAlpha(lower[i])){
      h_map.set(lower[i], 1);
    }
  }

  if (h_map.size < 26){
    return false;    
  }

  return true;  
}

// T: O(n)
// S: O(1)


// Optimized Solution - cleaner
export function isPangram(word: string) :boolean {
  // edge case
  if (word.length < 26){
    return false;
  }

  const sett = new Set<string>();
  const lowerLetter = word.toLowerCase();

  for (const char of lowerLetter){
    if (char >= 'a' && char <= 'z'){
      sett.add(char);
    }
  }

  return sett.size === 26
}