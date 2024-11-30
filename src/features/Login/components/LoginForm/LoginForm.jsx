import { useDispatch } from "react-redux";
import { useState } from "react";
import { setCurrentUser } from "../../../userSlice/userSlice";
import { loginUser } from "../../../../axios/axiosUser";
import {
  Form,
  FormTextContainer,
  FormInputContainer,
  SeparatorContainer,
  ButtonsContainer,
} from "./LoginFormStyles";
import Input from "../../../../components/UI/LoginInput";
import { SubmitButton } from "../../../../components/UI/Boton";
import { SecondaryButton } from "../../../../components/UI/Boton";
import { IoLogoGoogle, IoLogoApple } from "react-icons/io";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import useRedirect from "../../../../hooks/useRedirect";
import Span from "../../../../components/UI/Span";

function LoginForm() {
  const [send, setIsSend] = useState(false);
  const dispatch = useDispatch();
  useRedirect("/");

  const loginInitialValues = {
    email: "",
    password: "",
  };

  const regEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .matches(regEmail, "Mail no valido")
      .required("Campo Requerido"),
    password: Yup.string()
      .min(6, "Mínimo de caracteres: 6")
      .required("Campo Requerido"),
  });

  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={async (values) => {
        const user = await loginUser(values.email, values.password);
        if (user) {
          dispatch(
            setCurrentUser({
              ...user.usuario,
              token: user.token,
            })
          );
        }
      }}
    >
      {({ isValid }) => (
        <Form>
          <Span send={send}>Inicio en proceso...</Span>
          <FormTextContainer>
            <h2>Hi, Welcome Back!</h2>
            <h3>We were waiting for you!</h3>
          </FormTextContainer>
          <FormInputContainer>
            <Input
              id="email"
              label="Email address"
              name="email"
              type="text"
              placeholder="Enter email address"
            />
            <Input
              id="password"
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <h3>
              Don't have an account yet? <Link to="/register">Sign up</Link>
            </h3>
          </FormInputContainer>
          <SubmitButton
            type="submit"
            onClick={() => {
              if (isValid) {
                setIsSend(true);
              }
            }}
          >
            Log In
          </SubmitButton>
          <SeparatorContainer>
            <span />
            <h3>Or</h3>
            <span />
          </SeparatorContainer>
          <ButtonsContainer>
            <SecondaryButton>
              <IoLogoGoogle /> Continue with Google
            </SecondaryButton>
            <SecondaryButton>
              <IoLogoApple /> Continue with Apple
            </SecondaryButton>
          </ButtonsContainer>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
