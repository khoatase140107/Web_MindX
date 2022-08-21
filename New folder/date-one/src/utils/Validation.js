export function checkValidate(data) {
  let hasError = false;
  for (const key in data) {
    if (data[key].value === null || data[key].value.length === 0) {
      const error = `Please enter a valid ${key}!`;
      data[key].error = error;
      hasError = true;
    }
  }
  return { hasError, data };
}
