import { IOperation } from "./IOperation";

export class Subtraction implements IOperation {
  public doOperation(a: number, b: number): number {
    return a - b;
  }
}
