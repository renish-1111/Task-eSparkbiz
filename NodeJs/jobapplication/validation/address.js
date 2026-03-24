var z = require("zod");

const stringSchema = z.string().max(100).nonempty();
const zipcodeSchema = z.string().regex(/^[0-9]{6}$/)
const numberSchema = z.number().min(1);

const addressSchema = z.object({
    address1: stringSchema,
    address2: stringSchema,
    state: stringSchema,
    city: stringSchema,
    zipcode: zipcodeSchema,
})

module.exports = addressSchema;

