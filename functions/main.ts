function calculateAreaTs(shape: string, dimensions: { [key: string]: number }): number {
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

const squareAreaTs = calculateAreaTs("square", { side: 5 });
const rectangleAreaTs = calculateAreaTs("rectangle", { length: 10, width: 4 });
const circleAreaTs = calculateAreaTs("circle", { radius: 3 });

console.log("Square area:", squareAreaTs);
console.log("Rectangle area:", rectangleAreaTs);
console.log("Circle area:", circleAreaTs);