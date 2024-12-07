// Archivos internos - Estilos
import { InputContainer, InputStyled } from "./InputStyles";

function Input({ placeholder, type, name, isError, id, label, ...props}) {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <InputStyled
        placeholder={placeholder}
        name={name}
        type={type}
        error={isError}
        {...props}
      />

      {isError && <p>{isError}</p>}
    </InputContainer>
  );
}

export default Input;
