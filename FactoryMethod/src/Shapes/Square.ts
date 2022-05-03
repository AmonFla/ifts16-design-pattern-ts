import { Shape } from "./IShape";

export class Square implements Shape {
  public draw(): string {
    return "Square::draw()";
  }
}
