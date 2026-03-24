var z = require("zod");

const noNumbersSchema = z.string().regex(/^[^0-9]*$/, { message: "Field must not have number" }).nonempty();
const stringSchema = z.string().nonempty();
const emailSchema = z.email().nonempty();
const phoneSchema = z.string().regex(/^[0-9]{10}$/)
const numberSchema = z.number().min(1)
const bodSchema = z.refine((value) => new Date() - new Date(value) > 18 * 365 * 24 * 60 * 60 * 1000, { message: "Date of Birth must be at least 18 years ago" });

const basicdetailSchema = z.object({
    fname: noNumbersSchema,
    lname: noNumbersSchema,
    email: emailSchema,
    phone: phoneSchema,
    gender: stringSchema,
    relationshipstatus: numberSchema,
    designation: stringSchema,
    bod: bodSchema,
});


module.exports = basicdetailSchema;

