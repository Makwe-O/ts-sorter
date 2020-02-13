import { sortRequirements } from './interfaces/SortRequirement';
class NumberCollection implements sortRequirements {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
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
    console.log(this.data);
  }
}

export default NumberCollection;
