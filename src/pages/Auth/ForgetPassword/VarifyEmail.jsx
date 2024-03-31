import { useForm } from "react-hook-form";

import FormGroup from "../../../components/ui/forms/FormGroup";
import FormLabel from "../../../components/ui/forms/FormLabel";
import FormInput from "../../../components/ui/forms/FormInput";
import Form from "../../../components/ui/forms/Form";
import Button from "../../../components/ui/buttons/Button";

import { getErrorMessage } from "../../../utils/Error";

const VarifyEmail = ({ onEmailSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <h1>Verify Your Email</h1>
      <Form onSubmit={handleSubmit(onEmailSubmit)}>
        <FormGroup>
          <FormLabel text="Email" className="signup__label" htmlFor="email" />

          <FormInput
            type="email"
            className="signup__input"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            register={register}
            validation={{ required: true, email: true }}
            errorMessage={getErrorMessage({
              errors: errors,
              name: "email",
              errorTypes: ["required", "email"],
              messages: {
                required: "Email is required",
                email: "Valid email is required",
              },
            })}
          />
        </FormGroup>
        <Button type="submit" text="Send" className="d-block w-100" />
      </Form>
    </div>
  );
};

export default VarifyEmail;
