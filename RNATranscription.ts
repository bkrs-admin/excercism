export function toRna(word: string): string {
  
  const mySet = new Set<string>();
  mySet.add("C")
  mySet.add("G")
  mySet.add("A")
  mySet.add("T")
  
  let result:string = "";
  
  for(let i = 0; i < word.length; i++){
    if (!mySet.has(word[i])){
      throw new Error("Invalid input DNA.")
    }
  }

  for(let i = 0; i < word.length; i++){
    if (word[i] == "C") {
      result = result + "G"
    } else if (word[i] == "G"){
      result = result + "C"
    } else if (word[i] == "A"){
      result = result + "U"
    } else if (word[i] == "T"){
      result = result + "A"
    }   
  }
  
  return result; 
}