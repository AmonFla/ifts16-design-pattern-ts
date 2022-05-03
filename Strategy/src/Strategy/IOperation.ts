export interface IOperation {
  doOperation(a: number, b: number): number;
}

export enum Operations {
  ADD,
  SUB,
  MULT,
}
