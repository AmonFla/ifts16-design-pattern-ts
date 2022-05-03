import { Shape } from "./Shapes/IShape";
import { ShapeFactory } from "./Shapes/ShapeFactory";

const shapeFactory = new ShapeFactory();

let shape = shapeFactory.getShape("circle");
if (shape) {
  console.log(shape.draw());
}

shape = shapeFactory.getShape("rectangle");
if (shape) {
  console.log(shape.draw());
}

shape = shapeFactory.getShape("square");
if (shape) {
  console.log(shape.draw());
}
