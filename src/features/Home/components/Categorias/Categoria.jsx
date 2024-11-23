import { CategoryCard } from './CategoriasStyles'

function Categoria({img, title, category}) {
  return (
    <CategoryCard>
      <img src={img} alt={category} />
      <h3>GET 30% DISCOUNT</h3>
      <h2>{title}</h2>
    </CategoryCard>
  )
}

export default Categoria
