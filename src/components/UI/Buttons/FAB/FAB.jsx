import { ChangeColorButtonStyled } from "./FABStyles";

function FAB({ children, onClick }) {
    return (
      <ChangeColorButtonStyled onClick={onClick}>
        {children}
      </ChangeColorButtonStyled>
    );
  }

export default FAB
