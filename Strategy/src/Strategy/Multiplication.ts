import { IOperation } from "./IOperation";

export class Multiplication implements IOperation {
  public doOperation(a: number, b: number): number {
    return a * b;
  }
}
