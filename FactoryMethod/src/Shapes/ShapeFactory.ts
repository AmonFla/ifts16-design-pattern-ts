import { Circle } from "./Circle";
import { Shape } from "./IShape";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

export class ShapeFactory {
  public getShape(type: string): Shape | undefined {
    switch (type) {
      case "circle":
        return new Circle();
        break;
      case "rectangle":
        return new Rectangle();
        break;
      case "square":
        return new Square();
        break;
    }
    return undefined;
  }
}
