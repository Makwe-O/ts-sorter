import Sorter from './Sorter';
import { sortRequirements } from './interfaces/SortRequirement';
class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
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

  sort(): void {
    const { length } = this.data;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
    this.logResult();
  }
}

export default NumberCollection;
