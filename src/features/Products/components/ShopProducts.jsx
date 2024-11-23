import { useState } from "react";
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
} from "./ShopProductsStyles";
import Selector from "../../../components/UI/Selector";
import Checkbox from "../../../components/UI/Checkbox";
import { SquareButton } from "../../../components/UI/Boton";
import Input from "../../../components/UI/Input";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosList, IoMdApps } from "react-icons/io";
import { productos } from "../../../data/productos";
import ProductCard from "../../../components/UI/Card";
import MiniCard from "../../../components/UI/MiniCard";

function ShopProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("All Products");
  const [activeButton, setActiveButton] = useState(null);
  const [showMiniCard, setShowMiniCard] = useState(null);
  const [visibleMiniCard, setVisibleMiniCard] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const [isOpen, setIsOpen] = useState({
    gender: false,
    brand: false,
    season: false,
  });
  const [filters, setFilters] = useState({
    gender: [],
    brand: [],
    season: [],
  });

  const handleButtonClick = () => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
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

  const handleAddToCart = (product) => {
    setShowMiniCard({ ...product });

    setVisibleMiniCard(true);

    setTimeout(() => {
      setVisibleMiniCard(false);
      setShowMiniCard(null);
    }, 5000);
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
              isActive={activeButton === "list"}
              onClick={() => handleButtonClick("list")}
            >
              <IoIosList />
            </SquareButton>
            <SquareButton>
              <IoMdApps
                isActive={activeButton === "square"}
                onClick={() => handleButtonClick("square")}
              />
            </SquareButton>
          </Options>
        </OptionsContainer>

        <ProductsContainer>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
            />
          ))}

          <MiniCard
            img={showMiniCard?.img}
            title={showMiniCard?.title}
            price={showMiniCard?.price}
            category={showMiniCard?.category}
            visibleMiniCard={visibleMiniCard}
          />
        </ProductsContainer>
      </ItemsOptionsContainer>
    </ProductShopWrapper>
  );
}

export default ShopProducts;
