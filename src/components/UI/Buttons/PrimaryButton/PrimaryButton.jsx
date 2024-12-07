import { PrimaryButtonStyled } from "./PrimaryButtonStyles";

function PrimaryButton({ children, onClick }) {
  return (
    <PrimaryButtonStyled type="submit" onClick={onClick}>
      {children}
    </PrimaryButtonStyled>
  );
}

export default PrimaryButton
