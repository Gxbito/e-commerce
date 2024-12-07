// Bibliotecas externas
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoLogoGoogle, IoLogoApple } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

// Archivos internos - Estilos
import {
  FormStyled,
  FormTextContainer,
  FormInputContainer,
  SeparatorContainer,
  ButtonsContainer,
} from "./RegisterFormStyles";

// Archivos internos - Componentes
import SubmitButton from "../../../../components/UI/Buttons/SubmitButton/SubmitButton"
import Input from "../../../../components/UI/LoginInput/LoginInput";
import MessageSpan from "../../../../components/UI/MessageSpan/MessageSpan";

// Archivos internos - Funcionalidad
import { setCurrentUser } from "../../../UserSlice/userSlice";
import { createUser } from "../../../../axios/axiosUser";

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
          <MessageSpan send={send}>Registro en proceso...</MessageSpan>
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
