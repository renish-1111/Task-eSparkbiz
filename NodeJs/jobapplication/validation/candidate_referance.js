var z = require("zod");

const stringSchema = z.string().nonempty();
const phoneSchema = z.string().regex(/^[0-9]{10}$/);
const noNumbersSchema = z.string().regex(/^[^0-9]*$/, { message: "Field must not have number" }).nonempty();

const candidate_referanceSchema = z.object({
    referance_name: noNumbersSchema,
    referance_contact: phoneSchema,
    referance_relation: noNumbersSchema,
});

console.log(candidate_referanceSchema.parse({
    referance_name: 'noNumbersSchema',
    referance_contact: '9687400141',
    referance_relation: 'noNumbersSchema',
}))


module.exports = candidate_referanceSchema;

