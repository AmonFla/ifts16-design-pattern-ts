import { Shape } from "./IShape";

export class Circle implements Shape {
  public draw(): string {
    return "Circle::draw()";
  }
}
