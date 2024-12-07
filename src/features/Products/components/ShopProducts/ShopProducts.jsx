// Bibliotecas externas
import { useState } from "react";
import { IoIosList, IoMdApps } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// Archivos internos - Estilos
import {
  ProductShopWrapper,
  DataFiltersContainer,
  PriceFilterContainer,
  CategoriesContainer,
  CategoryTitle,
  ItemsOptionsContainer,
  OptionsContainer,
  Options,
  ProductsContainer,
  CategoryOptionsContainer,
  ModalBackground,
} from "./ShopProductsStyles";

// Archivos internos - Componentes y Datos
import Pagination from "../Pagination/Pagination";
import Selector from "../../../../components/UI/Selector/Selector";
import Checkbox from "../../../../components/UI/Checkbox/Checkbox";
import SquareButton from "../../../../components/UI/Buttons/SquareButton/SquareButton";
import Input from "../../../../components/UI/Input/Input";
import ProductCard from "../../../../components/UI/ProductCard/ProductCard";
import ProductMiniCard from "../../../../components/UI/ProductMiniCard/ProductMiniCard";
import ProductModal from "../../../../components/UI/ProductModal/ProductModal";
import { productos } from "../../../../data/productos";

function ShopProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("All Products");
  const [showMiniCard, setShowMiniCard] = useState(null);
  const [visibleMiniCard, setVisibleMiniCard] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [showModal, setShowModal] = useState(false);
  const [productModal, setProductModal] = useState(null);
  const [activeButton, setActiveButton] = useState("square");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const [isOpen, setIsOpen] = useState({
    gender: true,
    brand: true,
    season: true,
  });
  const [filters, setFilters] = useState({
    gender: [],
    brand: [],
    season: [],
  });

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const categoryHandler = (category) => {
    setIsOpen((state) => ({
      ...state,
      [category]: !state[category],
    }));
  };

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => {
      const currentCategory = prevFilters[category];
      const isSelected = currentCategory.includes(value);

      return {
        ...prevFilters,
        [category]: isSelected
          ? currentCategory.filter((item) => item !== value)
          : [...currentCategory, value],
      };
    });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShowModal = (product) => {
    setProductModal(product);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = (product) => {
    setShowMiniCard({ ...product });
    setShowModal(false);
    setVisibleMiniCard(true);

    setTimeout(() => {
      setVisibleMiniCard(false);
      setShowMiniCard(null);
    }, 3000);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortOptionHandler = (option) => {
    setSortOption(option);
  };

  const sortedProducts = [...productos].sort((a, b) => {
    if (sortOption === "Lowest to Highest") {
      return a.price - b.price;
    } else if (sortOption === "Highest to Lowest") {
      return b.price - a.price;
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) => {
    const { gender, brand, season } = filters;
    const matchesGender =
      gender.length === 0 || gender.includes(product.category);
    const matchesBrand = brand.length === 0 || brand.includes(product.brand);
    const matchesSeason =
      season.length === 0 || season.includes(product.season);
    const matchesSearch =
      product.title && product.title.toLowerCase().includes(searchTerm);

    const price = parseFloat(product.price);
    const minPrice = parseFloat(priceRange.min) || 0;
    const maxPrice = parseFloat(priceRange.max) || Infinity;

    const matchesPrice = price >= minPrice && price <= maxPrice;

    return (
      matchesGender &&
      matchesBrand &&
      matchesSeason &&
      matchesSearch &&
      matchesPrice
    );
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <ProductShopWrapper>
      <DataFiltersContainer>
        <h2>PRODUCTS</h2>

        <PriceFilterContainer>
          <h3>Fixed Price</h3>
          <Input
            type="number"
            name="min"
            value={priceRange.min}
            placeholder="Min Price"
            onChange={handlePriceChange}
          />
          <Input
            type="number"
            name="max"
            value={priceRange.max}
            placeholder="Max Price"
            onChange={handlePriceChange}
          />
        </PriceFilterContainer>

        <CategoriesContainer>
          <CategoryTitle onClick={() => categoryHandler("gender")}>
            <h3>GENDER</h3>
            <MdOutlineKeyboardArrowDown />
          </CategoryTitle>
          <CategoryOptionsContainer isOpen={isOpen.gender}>
            <Checkbox
              checked={filters.gender.includes("Women")}
              onChange={() => handleFilterChange("gender", "Women")}
            >
              Woman
            </Checkbox>
            <Checkbox
              checked={filters.gender.includes("Men")}
              onChange={() => handleFilterChange("gender", "Men")}
            >
              Man
            </Checkbox>
            <Checkbox
              checked={filters.gender.includes("Kids")}
              onChange={() => handleFilterChange("gender", "Kids")}
            >
              Kids
            </Checkbox>
          </CategoryOptionsContainer>

          <CategoryTitle onClick={() => categoryHandler("brand")}>
            <h3>BRAND</h3>
            <MdOutlineKeyboardArrowDown />
          </CategoryTitle>
          <CategoryOptionsContainer isOpen={isOpen.brand}>
            <Checkbox
              checked={filters.brand.includes("GlamWear")}
              onChange={() => handleFilterChange("brand", "GlamWear")}
            >
              GlamWear
            </Checkbox>
            <Checkbox
              checked={filters.brand.includes("Elegance & Co.")}
              onChange={() => handleFilterChange("brand", "Elegance & Co.")}
            >
              Elegance & Co.
            </Checkbox>
            <Checkbox
              checked={filters.brand.includes("UrbanStyle")}
              onChange={() => handleFilterChange("brand", "UrbanStyle")}
            >
              UrbanStyle
            </Checkbox>
            <Checkbox
              checked={filters.brand.includes("CasualFit")}
              onChange={() => handleFilterChange("brand", "CasualFit")}
            >
              CasualFit
            </Checkbox>
          </CategoryOptionsContainer>

          <CategoryTitle onClick={() => categoryHandler("season")}>
            <h3>SEASON</h3>
            <MdOutlineKeyboardArrowDown />
          </CategoryTitle>
          <CategoryOptionsContainer isOpen={isOpen.season}>
            <Checkbox
              checked={filters.season.includes("Winter")}
              onChange={() => handleFilterChange("season", "Winter")}
            >
              Winter
            </Checkbox>
            <Checkbox
              checked={filters.season.includes("Summer")}
              onChange={() => handleFilterChange("season", "Summer")}
            >
              Summer
            </Checkbox>
            <Checkbox
              checked={filters.season.includes("Spring")}
              onChange={() => handleFilterChange("season", "Spring")}
            >
              Spring
            </Checkbox>
            <Checkbox
              checked={filters.season.includes("Fall")}
              onChange={() => handleFilterChange("season", "Fall")}
            >
              Fall
            </Checkbox>
          </CategoryOptionsContainer>
        </CategoriesContainer>
      </DataFiltersContainer>

      <ItemsOptionsContainer>
        <OptionsContainer>
          <Options>
            <Selector onSelectChange={sortOptionHandler} />
            <Input value={searchTerm} onChange={handleSearchChange} />
          </Options>

          <Options>
            <SquareButton
              isSelected={activeButton === "list"}
              onClick={() => handleButtonClick("list")}
            >
              <IoIosList />
            </SquareButton>
            <SquareButton
              isSelected={activeButton === "square"}
              onClick={() => handleButtonClick("square")}
            >
              <IoMdApps />
            </SquareButton>
          </Options>
        </OptionsContainer>

        <ProductsContainer activeStyle={activeButton}>
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onShow={handleShowModal}
              activeStyle={activeButton}
            />
          ))}

          <ProductMiniCard
            img={showMiniCard?.img}
            title={showMiniCard?.title}
            price={showMiniCard?.price}
            category={showMiniCard?.category}
            visibleMiniCard={visibleMiniCard}
          />

          <ProductModal
            id={productModal?.id}
            img={productModal?.img}
            title={productModal?.title}
            brand={productModal?.brand}
            price={productModal?.price}
            category={productModal?.category}
            sizes={productModal?.size || {}}
            showModal={showModal}
            onAddToCart={handleAddToCart}
            hideModal={handleHideModal}
          />
        </ProductsContainer>
        <ModalBackground showModal={showModal} />
        <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        />
      </ItemsOptionsContainer>
    </ProductShopWrapper>
  );
}

export default ShopProducts;
