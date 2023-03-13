import Joi from "joi";

import validate from "./validate";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(250)
    .trim()
    .required(),
  password: Joi.string()
    .pattern(
      new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{0,}$")
    )
    .min(8)
    .max(255)
    .required(),
});

const validateLoginSchema = (userInputs) => validate(loginSchema, userInputs);

export default validateLoginSchema;
