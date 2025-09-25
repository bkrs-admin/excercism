export function hey(message: string): string {
  const trimmedMessage = message.trim() // Cut off spaces at beginning or end

  const pureMessage = message.replace(/[^a-zA-Z]/g,''); // Replace with only letters

  const isYelling = /[A-Z]/.test(pureMessage) && pureMessage === pureMessage.toUpperCase(); 

  const isQuestion = trimmedMessage.endsWith('?');

  if(trimmedMessage.length === 0){
    return "Fine. Be that way!";
  }
  
  if(isYelling && isQuestion){
    return "Calm down, I know what I'm doing!";
  }
  
  if(isYelling){
    return "Whoa, chill out!";
  }

  if(isQuestion){
    return "Sure.";
  }

  return "Whatever.";
}

// T: O(n)
// S: O(n)