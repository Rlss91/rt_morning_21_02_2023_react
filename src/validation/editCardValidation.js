import Joi from "joi";

import validate from "./validate";

const idSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

const editCardSchema = Joi.object({});

const validateIdSchema = (userInputs) => validate(idSchema, userInputs);

export default validateIdSchema;
