// Import shapes file
const { Circle, Square, Triangle } = require("./shapes.js");

// test for a circle with a background of #d04848
describe("Circle test", () => {
  test("test for a circle with a #d04848 background", () => {
    const shape = new Circle();
    shape.setColor("#d04848");
    const svgElement = shape.getSvgElement();
    expect(svgElement).toEqual(
      '<circle cx="150" cy="100" r="50" fill="#d04848" />'
    );
  });
});

// test for a square with red background
describe("Square test", () => {
  test("test for a square with a blue background", () => {
    const shape = new Square();
    shape.setColor("blue");
    const svgElement = shape.getSvgElement();
    expect(svgElement).toEqual(
      '<rect x="50" y="0" width="200" height="200" fill="blue" />'
    );
  });
});

// test for a triangle with a green background
describe("Triangle test", () => {
  test("test for a triangle with a green background", () => {
    const shape = new Triangle();
    shape.setColor("green");
    const svgElement = shape.getSvgElement();
    expect(svgElement).toEqual(
      '<polygon points="150,20 280,180 20,180" fill="green" />'
    );
  });
});
