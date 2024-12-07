// Archivos internos - Estilos
import { PaginationContainer } from "./PaginationStyles";

// Archivos internos - Componentes
import SquareButton from "../../../../components/UI/Buttons/SquareButton/SquareButton";

function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <SquareButton
          key={index}
          isSelected={currentPage === index + 1}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </SquareButton>
      ))}
    </PaginationContainer>
  );
}

export default Pagination;
