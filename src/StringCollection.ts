import { sortRequirements } from './interfaces/SortRequirement';

class StringCollection implements sortRequirements {
  data: string[];

  constructor(data: String) {
    this.data = data.split('');
  }

  compare(leftValue: number, rightValue: number): Boolean {
    return this.data[leftValue] > this.data[rightValue];
  }

  swap(leftValue: number, rightValue: number): void {
    let tmp = this.data[leftValue];
    this.data[leftValue] = this.data[rightValue];
    this.data[rightValue] = tmp;
  }

  get length(): number {
    return this.data.length;
  }

  logResult(): void {
    console.log(this.data.join(''));
  }
}

export default StringCollection;
