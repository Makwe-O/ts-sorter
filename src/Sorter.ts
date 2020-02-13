import NumberCollection from './NumberCollection';
import StringCollection from './StringCollection';
import { sortRequirements } from './interfaces/SortRequirement';

class Sorter {
  constructor(public value: sortRequirements) {}

  sort(): void {
    const { length } = this.value;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (this.value.compare(j, j + 1)) {
          this.value.swap(j, j + 1);
        }
      }
    }
    this.value.logResult();
  }
}

export default Sorter;
