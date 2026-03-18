var  z  = require("zod");

const noNumbersSchema = z.string().regex(/^[^0-9]*$/, { message: "Field must not have number" }).nonempty();
const stringSchema = z.string().nonempty();
const emailSchema = z.email().nonempty();
const phoneSchema = z.string().regex(/^[0-9]+/)
const relationshipstatusSchema = z.number()
const addressSchema = z.string().max(100).nonempty()
const zipcodeSchema = z.string().regex(/^[0-9]+/)
const bodSchema = z.string().refine((value) => {
    const date = new Date(value);
    const now = new Date();
    return date < now;
}, { message: "Date of Birth must be in the past" });

const basicdetailSchema = z.object({
    fname: noNumbersSchema,
    lname: noNumbersSchema,
    email: emailSchema,
    phone: phoneSchema,
    gender: stringSchema,
    relationshipstatus: relationshipstatusSchema,
    designation: stringSchema,
    bod: bodSchema,
});

module.exports = basicdetailSchema;

