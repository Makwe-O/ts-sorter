import NumberCollection from './NumberCollection';
import StringCollection from './StringCollection';
import { sortRequirements } from './interfaces/SortRequirement';

abstract class Sorter {
  abstract sort(): void;
  abstract compare(leftValue: number, rightValue: number): Boolean;
  abstract swap(leftValue: number, rightValue: number): void;
  abstract logResult(): void;
  abstract get length(): number;
}

export default Sorter;
