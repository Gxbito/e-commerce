import CheckoutSummary from "./Components/Checkout/CheckoutSummary"
import Layout from "./Components/Layout/Layout"
import Shopping from "./Components/Shopping/Shopping"

function CartPage() {
  return (
    <Layout>
      <Shopping/>
      <CheckoutSummary/>
    </Layout>
    
  )
}

export default CartPage
