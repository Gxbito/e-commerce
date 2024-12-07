// Archivos internos - Estilos
import {
  BurguerMenuContainer,
  BurguerOptionsContainer,
} from "./BurguerMenuStyles";

function BurguerMenu({isVisible, children}) {
  return (
    <BurguerMenuContainer isVisible={isVisible}>
      <BurguerOptionsContainer>
        {children}
      </BurguerOptionsContainer>
    </BurguerMenuContainer>
  );
}

export default BurguerMenu;
