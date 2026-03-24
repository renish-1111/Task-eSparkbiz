var z = require("zod");

const noNumbersSchema = z.string().regex(/^[^0-9]*$/, { message: "Field must not have number" }).nonempty();
const numberStringSchema = z.string().regex(/^[0-9]/).min(1)
const numberSchema = z.number().min(1)

const prefrenceSchema = z.object({
    preferd_location: noNumbersSchema,
    department: numberSchema,
    notice_period: numberStringSchema,
    expacted_ctc: numberStringSchema,
    current_ctc: numberStringSchema,
});

console.log(prefrenceSchema.parse({
    preferd_location: "rajkot, surat",
    department: 2,
    notice_period: "3",
    expacted_ctc: "360000",
    current_ctc: "700000",
}));



module.exports = prefrenceSchema;
