// Bibliotecas externas
import { useState } from "react";
import { IoIosList, IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

// Archivos internos - Estilos
import {
  SelectorStyled,
  SelectorOptionContainer,
  Option,
} from "./SelectorStyles";

function Selector({ onSelectChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All products");

  const toggleOptions = () => setIsOpen((prev) => !prev);

  const optionHandler = (option) => {
    setSelectedOption(option);
    onSelectChange(option);
    setIsOpen(false);
  };
  return (
    <div style={{ position: "relative" }}>
      <SelectorStyled onClick={toggleOptions}>
        {selectedOption}
        <span>
          {isOpen ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </span>
      </SelectorStyled>

      <SelectorOptionContainer isOpen={isOpen}>
        <Option onClick={() => optionHandler("All products")}>
          {" "}
          <IoIosList /> All products
        </Option>
        <Option onClick={() => optionHandler("Lowest to Highest")}>
          <IoIosTrendingUp />
          Lowest to Highest
        </Option>
        <Option onClick={() => optionHandler("Highest to Lowest")}>
          <IoIosTrendingDown />
          Highest to Lowest
        </Option>
      </SelectorOptionContainer>
    </div>
  );
}

export default Selector;
