let empInfo: [string, number, number, boolean] = ["Jatin", 101, 75000, true];

let empInfo2:readonly [name: string, id: number] = ["jatin", 101];

let empInfo3: readonly[string, number, ...string[], number] = ["Jatin", 101, "JS", "TS", 75000];

// DESTRUCTURING of Tuple
let [empName, empid, skill1, skill2] = empInfo3;