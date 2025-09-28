export class Matrix {

  private _matrixStrings: string[];
  
  constructor(str: string) {
    this._matrixStrings = str.split("\n");
  };

  get rows(): number[][] {
    return this._matrixStrings.map(rowStrings => rowStrings.split(" ").map(Number));
  };

  get columns(): number[][] {
    const rowsData: number[][] = this.rows;

    if (rowsData.length === 0 || rowsData[0].length === 0){
      return [];
    };

    return rowsData[0].map((_, i)=>{
      return rowsData.map(row => row[i]);
    });
  }
}


