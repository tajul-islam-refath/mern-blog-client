export const userProfileValidation = (form) => {
  let error = {};
  if (!form.name) {
    error.name = "Name is required";
  } else if (!form.title) {
    error.title = "Title is required";
  } else if (!form.bio) {
    error.bio = "Bio is required";
  }

  const isError = Object.keys(error).length != 0 ? true : false;
  return {
    isError,
    error,
  };
};
