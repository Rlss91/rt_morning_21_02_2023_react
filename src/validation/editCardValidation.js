import Joi from "joi";

import validate from "./validate";

const idSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

const editCardSchema = Joi.object({
  couseName: Joi.string().min(3).max(255),
  category: Joi.string().min(3).max(255),
  lecturer: Joi.string().min(3).max(255),
  description: Joi.string().min(3).max(255),
});

const validateIdSchema = (userInputs) => validate(idSchema, userInputs);
const validateEditCardSchema = (userInputs) =>
  validate(editCardSchema, userInputs);

export { validateIdSchema, validateEditCardSchema };
