export interface sortRequirements {
  length: Number;
  compare(leftValue: number, rightValue: number): Boolean;
  swap(leftValue: number, rightValue: number): void;
  logResult(): void;
}
