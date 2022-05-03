import { Addition } from "./Addition";
import { IOperation } from "./IOperation";
import { Multiplication } from "./Multiplication";
import { Subtraction } from "./Substraction";

export class AritmeticOperation {
  private strategy: IOperation | undefined;

  public constructor(strategy: string) {
    switch (strategy) {
      case "addition":
        this.strategy = new Addition();
        break;
      case "substraction":
        this.strategy = new Subtraction();
        break;
      case "multiplicaction":
        this.strategy = new Multiplication();
        break;
    }
  }

  public do(a: number, b: number): number | undefined {
    if (this.strategy) {
      return this.strategy.doOperation(a, b);
    } else {
      return undefined;
    }
  }
}
