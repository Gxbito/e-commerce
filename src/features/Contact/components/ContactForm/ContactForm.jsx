import {
  FormStyled,
  FormTextContainer,
  FormInputContainer,
} from "./ContactFormStyles";

import TextArea from "../../../../components/UI/TextArea";
import Input from "../../../../components/UI/Input";
import { SubmitButton } from "../../../../components/UI/Boton";
import Span from "../../../../components/UI/Span";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactForm() {
  const [send, setIsSend] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Campo requerido"),
    email: Yup.string()
      .email("Ingresa un correo electronico válido")
      .required("Campo requerido"),
    comments: Yup.string()
      .max(205, "Solo se permite un máximo de 205 caracteres")
      .notRequired(),
  });

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      email: "",
      comments: "",
    },

    validationSchema,

    onSubmit: (values, { resetForm }) => {
      console.log({ values });
      console.log(errors);
      resetForm();
      setIsSend(true);
      setTimeout(() => setIsSend(false), 2000);
    },
  });

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Span send={send}>Thank you! Your message has been sent.</Span>

      <FormTextContainer>
        <h2>Have a Question? Let us know</h2>
        <h3>Default span message for contact us</h3>
      </FormTextContainer>

      <FormInputContainer>
        <Input
          id="name"
          label="Enter your name"
          name="name"
          type="text"
          placeholder="Your name"
          isError={touched.name && errors.name}
          {...getFieldProps("name")}
        />
        <Input
          id="email"
          label="Enter your email address"
          name="email"
          type="email"
          placeholder="Your email"
          isError={touched.email && errors.email}
          {...getFieldProps("email")}
        />
        <TextArea
          id="comments"
          label="Enter your comment"
          name="comments"
          placeholder="Your message"
          isError={touched.comments && errors.comments}
          {...getFieldProps("comments")}
        />
      </FormInputContainer>

      <SubmitButton type="submit" onSubmit={handleSubmit}>
        Send
      </SubmitButton>
    </FormStyled>
  );
}

export default ContactForm;
