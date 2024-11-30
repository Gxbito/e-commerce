import { FormLayoutStyled } from "./FormLayoutStyles"

function FormLayout({children}) {
  return (
    <FormLayoutStyled>
      {children}
    </FormLayoutStyled>
  )
}

export default FormLayout
