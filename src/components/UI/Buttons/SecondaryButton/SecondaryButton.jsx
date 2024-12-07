import { SecondaryButtonStyled } from "./SecondaryButtonStyles";

function SecondaryButton({ children, onClick }) {
  return (
    <SecondaryButtonStyled onClick={onClick}>{children}</SecondaryButtonStyled>
  );
}

export default SecondaryButton;
