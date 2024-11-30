import { TextAreaStyled, TextAreaContainer } from "./TextAreaStyles";

function TextArea({ placeholder, name, isError, id, label, ...props }) {
  return (
    <TextAreaContainer>
      <label htmlFor={id}>{label}</label>
      <TextAreaStyled
        id={id}
        placeholder={placeholder}
        name={name}
        error={isError}
        {...props}
      />
    </TextAreaContainer>
  );
}

export default TextArea;
