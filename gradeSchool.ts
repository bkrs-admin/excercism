type RosterData = {
  [grade: number]: string[]
}

export class GradeSchool {
  private db: RosterData  = {}

  roster():RosterData {
    // an object variable to store each object from db
    const result: RosterData = {}
    
    // get roster from db, using gradestr, add it to result object using grade after sorting
    for(const gradestr in this.db){
      const grade = Number(gradestr)
      result[grade] = [...this.db[grade]].sort()
    }

    // return sorted result  
    return result
  }

  add(name: string, grade: number): void {
    // delete duplicate using key(grade) : value(s)
    for(const gradeKey in this.db){
      this.db[gradeKey] = this.db[gradeKey].filter(student => student !== name)
    }

    // if no key yet in db, then create an empty array to add a new student
    if(!this.db[grade]){
      this.db[grade] = []
    }

    // push new student to grade in db
    this.db[grade].push(name)
  }

  grade(grade:number): string[] {
    // return sorted db else empty
    return this.db[grade] ? [...this.db[grade]].sort() : []
    
  }
  
}