import { z } from zod;

const noNumbersSchema = z.string().regex(/^[^0-9]*$/,{message:"Field must not have number"}).nonempty();
const stringSchema = z.string().nonempty();
const emailSchema = z.email().nonempty();
const phoneSchema = z.string().regex(/^[0-9]+/).size(10);
const relationshipstatusSchema = z.number().nonempty()
const addressSchema = z.string().max(100).nonempty()
const zipcodeSchema = z.string().regex(/^[0-9]+/).size(6);



