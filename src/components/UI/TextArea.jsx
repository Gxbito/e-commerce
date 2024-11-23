import { TextAreaStyled } from "./TextAreaStyles";

function TextArea({ placeholder, name, isError, ...props }) {
  return (
    <TextAreaStyled
      placeholder={placeholder}
      name={name}
      error={isError}
      {...props}
    />
  );
}

export default TextArea;
