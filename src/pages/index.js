import React from 'react'
import SEO from '../components/seo'
import Products from '../components/Products/Products'
import Layout from '../components/layout'
import { useShoppingCart } from 'use-shopping-cart'

const IndexPage = () => {
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()

  return (
    <Layout>
      <SEO title="Index" />
      <h1>mmm... vintage</h1>
      <Products />
      <p>total: ${(totalPrice / 100).toFixed(2)}</p>
      <button onClick={() => redirectToCheckout()}>Checkout</button>
    </Layout>
  )
}
export default IndexPage
