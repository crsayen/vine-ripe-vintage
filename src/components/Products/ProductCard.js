import React, { useState } from 'react'
import getStripe from '../../utils/stripejs'
import { useShoppingCart } from 'use-shopping-cart'

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
  backgroundColor: '#fff',
  borderRadius: '6px',
  maxWidth: '300px',
}
const buttonStyles = {
  display: 'block',
  fontSize: '13px',
  textAlign: 'center',
  color: '#000',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

const buttonDisabledStyles = {
  opacity: '0.5',
  cursor: 'not-allowed',
}

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  })
  return numberFormat.format(price)
}

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false)
  const { addItem } = useShoppingCart()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    console.log(product)
    const price = product.prices[0]
    const item = {
      name: product.name,
      id: product.id,
      image: product.images[0],
      currency: price.currency,
      price: price.unit_amount,
    }
    console.log(item)
    addItem(item)
    setLoading(false)
  }

  return (
    <div style={cardStyles}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: 'none' }}>
          <legend>
            <h4>{product.name}</h4>
          </legend>
          <img src={product.images}></img>
          <label>
            {formatPrice(
              product.prices[0].unit_amount,
              product.prices[0].currency
            )}
          </label>
        </fieldset>
        <button
          disabled={loading}
          style={
            loading
              ? { ...buttonStyles, ...buttonDisabledStyles }
              : buttonStyles
          }
        >
          Add to Cart
        </button>
      </form>
    </div>
  )
}

export default ProductCard
