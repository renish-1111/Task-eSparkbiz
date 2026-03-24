const z = require("zod")
const colors = z.literal(["red", "green", "blue"]);

console.log(colors.parse("white"));
