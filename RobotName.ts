export class Robot {
  private _name: string;
  private static _usedNames = new Set<string>();
  private static _namePool: string[] = [];
  private static _poolInitialized = false;
  
  private static initializePool(): void {
    if (this._poolInitialized) return;
    // start it from smaller number
    const poolSize = Math.min(10000, 676000 - this._usedNames.size);
    for (let i = 0; i < poolSize; i++) {
      let name: string;
      do {
        const l1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        const l2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        const d = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        name = `${l1}${l2}${d}`;
      } while (this._usedNames.has(name) || this._namePool.includes(name));
      
      this._namePool.push(name);
    }
    this._poolInitialized = true;
  }
  
  private static generateUniqueName(): string {
    if (Robot._usedNames.size >= 676000) {
      throw new Error('All names have been used.');
    }
    
    this.initializePool();
    
    if (this._namePool.length === 0) {
      // if pool is empty, then initialize again
      this.initializePool();
    }
    
    const name = this._namePool.pop()!;
    this._usedNames.add(name);
    return name;
  }
  
  constructor() {
    this._name = Robot.generateUniqueName();
  }
  
  public get name(): string {
    return this._name;
  }
  
  public resetName(): void {
    Robot._usedNames.delete(this._name);
    this._name = Robot.generateUniqueName();
  }
  
  public static releaseNames(): void {
    this._usedNames.clear();
    this._namePool = [];
    this._poolInitialized = false;
  }
}