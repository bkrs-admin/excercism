"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnDCharacter = void 0;
class DnDCharacter {
    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }
    static generateAbilityScore() {
        const diceRolls = [0, 0, 0, 0];
        for (let i = 0; i < 4; i++) {
            diceRolls[i] = Math.floor(Math.random() * 6) + 1;
        }
        const lowest = Math.min(...diceRolls);
        const score = diceRolls.reduce((sum, current) => sum + current, 0) - lowest;
        return score;
    }
    static getModifierFor(abilityValue) {
        return Math.floor((abilityValue - 10) / 2);
    }
}
exports.DnDCharacter = DnDCharacter;
