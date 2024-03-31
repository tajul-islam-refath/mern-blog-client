import { useForm } from "react-hook-form";

import FormGroup from "../../../components/ui/forms/FormGroup";
import FormLabel from "../../../components/ui/forms/FormLabel";
import FormInput from "../../../components/ui/forms/FormInput";
import Form from "../../../components/ui/forms/Form";
import Button from "../../../components/ui/buttons/Button";

import { getErrorMessage } from "../../../utils/Error";

const ResetPassword = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <h1>Reset Your Password</h1>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <FormGroup>
          <FormLabel
            text="Password"
            className="signup__label"
            htmlFor="password"
          />

          <FormInput
            type="password"
            className="signup__input"
            id="password"
            name="password"
            placeholder="*******"
            register={register}
            validation={{ required: true, minLength: 8 }}
            errorMessage={getErrorMessage({
              errors: errors,
              name: "password",
              errorTypes: ["required", "minLength"],
              messages: {
                required: "Password is required",
                minLength: "Minimum 8 length required",
              },
            })}
          />
        </FormGroup>
        <Button type="submit" text="Submit" className="d-block w-100" />
      </Form>
    </div>
  );
};

export default ResetPassword;
