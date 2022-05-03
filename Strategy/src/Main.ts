import { AritmeticOperation } from "./Strategy/ArtimeticOperation";

const operation = "addition";
const a = 10;
const b = 5;

const context: AritmeticOperation = new AritmeticOperation(operation);
console.log(context.do(a, b));
