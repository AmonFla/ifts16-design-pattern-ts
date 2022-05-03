import { Shape } from "./IShape";

export class Rectangle implements Shape {
  public draw(): string {
    return "Rectangle::draw()";
  }
}
