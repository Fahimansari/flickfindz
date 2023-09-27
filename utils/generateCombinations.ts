
import * as fs from 'fs'; // This code is used in the process of creating the Movies database

function getCombinations(arrays: string[][]): string[][] {
    function combine(arrays: string[][], current: string[], index: number): void {
      if (index === arrays.length) {
        result.push([...current]);
        return;
      }
  
      for (let i = 0; i < arrays[index].length; i++) {
        current.push(arrays[index][i]);
        combine(arrays, current, index + 1);
        current.pop();
      }
    }
  
    const result: string[][] = [];
    combine(arrays, [], 0);
    return result;
  }
  
  // Example usage:
  const A: string[] = ['Action', 'Comedy', 'Thriller'];
  const B: string[] = ['Contemporary', 'Historical', 'Futuristic'];
  const C: string[] = ['Fast-paced and Action-Packed', 'Balanced with action and dialogue', 'Slow and character-driven'];
  const D: string[] = ['Light-hearted and Comedic', 'Dark and Gritty', 'Suspenseful and Intense'];
  
  const arrays:string[][] = [A, B, C, D];
  const combinations: string[][] = getCombinations(arrays);
  console.log(combinations);
  
  const jsonFileName = `temp/combinations.json`;
fs.writeFileSync(jsonFileName, JSON.stringify(combinations, null, 2));

console.log(`JSON file '${jsonFileName}' has been written.`);