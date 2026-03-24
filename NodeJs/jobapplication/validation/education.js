var z = require("zod");

const passing_yearSchema = z.string()
    .length(4)
    .refine((val) => {
        const num = parseInt(val, 10);
        return num >= 1950 && num <= new Date().getFullYear() + 1;
    }, { message: `Year must be between 1900 and ${new Date().getFullYear() + 1}` })
    .nonempty();

const percentageSchema = z.string()
    .regex(/^\d+$/).transform(Number).refine((n) => n >= 0 && n <= 100, {
        message: 'Number must be between 0 and 100'
    })

const noNumbersSchema = z.string()
    .regex(/^[^0-9]*$/, { message: "Field must not have number" })
    .nonempty();

const educationSchema = z.object({
    degree_name: noNumbersSchema,
    university: noNumbersSchema,
    passing_year: passing_yearSchema,
    percentage: percentageSchema
})

console.log(educationSchema.parse({
    degree_name: "noNumbersSchema",
    university: "noNumbersSchema",
    passing_year: "2015",
    percentage: "100"
}))

module.exports = educationSchema;