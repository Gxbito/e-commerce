// Bibliotecas externas
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoLogoGoogle, IoLogoApple } from "react-icons/io";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

// Archivos internos - Estilos
import {
  Form,
  FormTextContainer,
  FormInputContainer,
  SeparatorContainer,
  ButtonsContainer,
} from "./LoginFormStyles";

// Archivos internos - Componentes
import SubmitButton from "../../../../components/UI/Buttons/SubmitButton/SubmitButton"
import Input from "../../../../components/UI/LoginInput/LoginInput";
import SecondaryButton from "../../../../components/UI/Buttons/SecondaryButton/SecondaryButton";
import MessageSpan from "../../../../components/UI/MessageSpan/MessageSpan";

// Archivos internos - Funcionalidad
import { setCurrentUser } from "../../../UserSlice/userSlice";
import { loginUser } from "../../../../axios/axiosUser";
import useRedirect from "../../../../hooks/useRedirect";

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
          <MessageSpan send={send}>Inicio en proceso...</MessageSpan>
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
