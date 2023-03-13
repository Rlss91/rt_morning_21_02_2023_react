const validate = (schema, userInput) => {
  const { error } = schema.validate(userInput, { abortEarly: false });
  if (error) {
    let errorObj = {};
    for (let item of error.details) {
      if (!errorObj[item.context.key]) {
        /*
          check if key not exists and if so
          create the key and set it to be empty array
        */
        errorObj[item.context.key] = [];
      }
      errorObj[item.context.key] = [
        ...errorObj[item.context.key],
        item.message,
      ];
    }
    return errorObj;
  } else {
    return null;
  }
};
export default validate;
