function calculateAreaJs(shape, dimensions) {
    switch (shape.toLowerCase()) {
        case "square":
            if (!dimensions.side) {
                throw new Error("Square requires a 'side' property in dimensions");
            }
            return dimensions.side * dimensions.side;
        case "rectangle":
            if (!dimensions.length || !dimensions.width) {
                throw new Error("Rectangle requires 'length' and 'width' properties in dimensions");
            }
            return dimensions.length * dimensions.width;
        case "circle":
            if (!dimensions.radius) {
                throw new Error("Circle requires a 'radius' property in dimensions");
            }
            return Math.PI * dimensions.radius * dimensions.radius;
        default:
            throw new Error("Invalid shape provided");
    }
}

const squareAreaJs = calculateAreaJs("square", { side: 5 });
const rectangleAreaJs = calculateAreaJs("rectangle", { length: 10, width: 4 });
const circleAreaJs = calculateAreaJs("circle", { radius: 3 });
console.log("Square area:", squareAreaJs);
console.log("Rectangle area:", rectangleAreaJs);
console.log("Circle area:", circleAreaJs);
