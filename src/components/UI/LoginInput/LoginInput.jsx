// Bibliotecas externas
import { Field, ErrorMessage } from "formik";

// Archivos internos - Estilos
import { InputContainer, InputStyled } from "./LoginInputStyles";


function Input({ name, type, placeholder, id, label }) {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainer>
          <label htmlFor={id}>{label}</label>
          <InputStyled
            id={id}
            placeholder={placeholder}
            type={type}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />
          <ErrorMessage name={field.name}>
            {(message) => <span>{message}</span>}
          </ErrorMessage>
        </InputContainer>
      )}
    </Field>
  );
}

export default Input;
