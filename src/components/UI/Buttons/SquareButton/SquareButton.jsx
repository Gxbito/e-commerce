import { SquareButtonStyled } from "./SquareButtonStyles";

function SquareButton({ children, onClick, isSelected, warning }) {
    return (
      <SquareButtonStyled
        onClick={onClick}
        isSelected={isSelected}
        warning={warning}
      >
        {children}
      </SquareButtonStyled>
    );
  }

export default SquareButton
