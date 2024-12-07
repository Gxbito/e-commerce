import { SubmitButtonStyled } from "../../Buttons/SubmitButton/SubmitButtonStyles";

function SubmitButton({ children, onClick, ...props }) {
  return (
    <SubmitButtonStyled onClick={onClick} {...props}>
      {children}
    </SubmitButtonStyled>
  );
}

export default SubmitButton;
