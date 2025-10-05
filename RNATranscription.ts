export function toRna(DNA: string) {
  let dnaSequence: string[] = ["G", "C", "T", "A"]
  
  let rnaComplement: string = "";
  
  for(let i = 0; i < DNA.length; i++){
    
    if (!dnaSequence.includes(DNA[i])){
      throw new Error("Invalid input DNA.")
    }
    
    if (DNA[i] == 'G'){
      rnaComplement += 'C'
    } else if (DNA[i] == 'C') {
      rnaComplement += 'G'
    } else if (DNA[i] == 'T') {
      rnaComplement += 'A'
    } else if (DNA[i] == 'A') {
      rnaComplement += 'U'
    }
  }
  
  return rnaComplement; 
}
