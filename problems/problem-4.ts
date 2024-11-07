type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
  let area: number;

  if (shape.shape === "circle") {
    area = Math.PI * shape.radius * shape.radius;
  } else {
    area = shape.width * shape.height;
  }

  return parseFloat(area.toFixed(2));
}

console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
console.log(calculateShapeArea({ shape: "rectangle", width: 4, height: 6 }));
