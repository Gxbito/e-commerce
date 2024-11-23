import { LayoutStyled } from "./LayoutStyles"

function Layout({children}) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  )
}

export default Layout
