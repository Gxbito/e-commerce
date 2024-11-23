import { InputContainer, InputStyled } from "./InputStyles";

function Input({ placeholder, type, name, isError, ...props }) {
  return (
    <InputContainer>
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
