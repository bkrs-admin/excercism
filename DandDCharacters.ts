export class DnDCharacter {
  hitpoints: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  
  constructor(){
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();  
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }
  
  public static generateAbilityScore(): number {
    const diceRolls:number[] = [0, 0, 0, 0]

    for (let i = 0; i < 4; i++){
      diceRolls[i] = Math.floor(Math.random() * 6) + 1;
    }
    const lowest:number = Math.min(...diceRolls);
    const score:number = diceRolls.reduce((sum, current)=> sum + current, 0) - lowest;

    return score;
    
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10 )/ 2);
  }
}