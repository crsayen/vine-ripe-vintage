/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import getStripe from './src/utils/stripejs'
import { CartProvider } from 'use-shopping-cart'

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider
      stripe={async () => await getStripe()}
      successUrl="stripe.com"
      cancelUrl="stripe.com"
      currency="USD"
      allowedCountries={['US']}
      billingAddressCollection={true}
    >
      {element}
    </CartProvider>
  )
}
