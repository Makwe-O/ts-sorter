//
class SortMe {
  constructor(public value: Array<number> | string) {}

  sort(): void {
    const { length } = this.value;
    if (this.value instanceof Array) {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          if (this.value[j] > this.value[j + 1]) {
            let tmp = this.value[j];
            this.value[j] = this.value[j + 1];
            this.value[j + 1] = tmp;
          }
        }
      }
    }
    console.log(this.value);
  }
}

const arr = new SortMe([2, 3, 50, 56, 2, 667, 75, 7456, 63, 43, 3, 0, 1, 2, 3]);
arr.sort();
