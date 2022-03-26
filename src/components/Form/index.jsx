import { ContainerForm } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import Input from "../Input";
import Button from "../Button";
import toast from "react-hot-toast";

function Form() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Required email").email("Invalid E-mail"),
    name: yup
      .string()
      .required("")
      .matches(/^[a-zA-Z]+$/i, "name with only letters"),
    password: yup
      .string()
      .required("Required password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&,]{8,}$/,
        "Ex: Abcdef!8"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "")
      .required("Required confirm password"),
    accept_terms: yup.boolean().oneOf([true], "you accept the terms of use?"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    history.push(`/login/${data.name}`);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>Register account</h1>

      <Input
        type="text"
        placeholder="Usersame"
        register={register}
        name="name"
        error={errors.name?.message}
      />

      <Input
        type="email"
        placeholder="Email"
        register={register}
        name="email"
        error={errors.email?.message}
      />

      <Input
        type="password"
        placeholder="Password"
        register={register}
        name="password"
        error={errors.password?.message}
      />

      <Input
        type="password"
        placeholder="Confirm Password"
        register={register}
        name="confirm_password"
        error={errors.confirm_password?.message}
      />

      <div className="container__checkbox">
        <Input
          type="checkbox"
          name="accept"
          register={register}
          name="accept_terms"
          error={errors.accept_terms?.message}
          message="I accept the terms of use"
        />
      </div>
      <Button type="submit" value="Create Account" />
    </ContainerForm>
  );
}

export default Form;
