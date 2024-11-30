import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../../userSlice/userSlice";
import { createUser } from "../../../../axios/axiosUser";
import {
  FormStyled,
  FormTextContainer,
  FormInputContainer,
  SeparatorContainer,
  ButtonsContainer,
} from "./RegisterFormStyles";
import { SubmitButton } from "../../../../components/UI/Boton";
import Input from "../../../../components/UI/LoginInput";
import { SecondaryButton } from "../../../../components/UI/Boton";
import { IoLogoGoogle, IoLogoApple } from "react-icons/io";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Span from "../../../../components/UI/Span";

function RegisterForm() {
  const [send, setIsSend] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerInitialValues = {
    name: "",
    email: "",
    password: "",
  };

  const registerValidationSchema = Yup.object({
    name: Yup.string().required("Campo Requerido"),
    email: Yup.string().email("Correo no válido").required("Campo Requerido"),
    password: Yup.string()
      .min(6, "Mínimo de caracteres: 6")
      .required("Campo Requerido"),
  });

  return (
    <Formik
      initialValues={registerInitialValues}
      validationSchema={registerValidationSchema}
      onSubmit={async (values, actions) => {
        try {
          const user = await createUser(
            values.name,
            values.email,
            values.password
          );
          actions.resetForm();
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
            navigate("/login");
          }
        } catch (error) {
          console.error("Error en el registro:", error);
          actions.setFieldError(
            "general",
            "Hubo un problema al crear tu cuenta"
          );
        } finally {
          actions.setSubmitting(false);
        }
      }}
    >
      {({ isValid }) => (
        <FormStyled>
          <Span send={send}>Registro en proceso...</Span>
          <FormTextContainer>
            <h2>Welcome to Trendsetter Threads</h2>
            <h3>Join our fashion community today!</h3>
          </FormTextContainer>
          <FormInputContainer>
            <Input
              id="name"
              label="Name"
              name="name"
              type="text"
              placeholder="Enter name"
            />
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
              Already have an account? <Link to="/login">Log In</Link>
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
            Create Account
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
        </FormStyled>
      )}
    </Formik>
  );
}

export default RegisterForm;
