var z = require("zod");

const stringSchema = z.string().nonempty();
const dateSchema = z.refine((value) => {
    const date = new Date(value);
    const now = new Date();
    return date < now;
}, { message: "date is not more than current date" });


const experienceSchema = z.object({
    company_name: stringSchema,
    designation: stringSchema,
    from_date: dateSchema,
    to_date: dateSchema
}).refine(date =>
    new Date(date.from_date) <= new Date(date.to_date)
    , {
        message: "error in date",
        path: ["to_date"]
    })

console.log(experienceSchema.parse({
    company_name: "stringSchema",
    designation: 'stringSchema',
    from_date: "2022-02-02",
    to_date: "2022-02-02"
}))


module.exports = experienceSchema;

