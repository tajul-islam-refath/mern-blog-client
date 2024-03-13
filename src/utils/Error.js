export const getErrorMessage = ({
  errors = [],
  name,
  errorTypes = [],
  messages = {},
}) => {
  if (errors[name]?.type && errorTypes.includes(errors[name]?.type)) {
    return messages[errors[name]?.type];
  }
  return null;
};
