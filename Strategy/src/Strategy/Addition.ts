import { IOperation } from "./IOperation";

export class Addition implements IOperation {
  public doOperation(a: number, b: number): number {
    return a + b;
  }
}
