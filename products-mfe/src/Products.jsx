import React from "react"
import { eventBus } from "shell/eventBus"
import { EVENTS } from "shell/events"

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 30 }
]

export default function Products() {

  function handleAddToCart(product) {
    eventBus.emit(EVENTS.ADD_TO_CART, product)
  }

  return (

    <div style={{ border: "2px solid blue", padding: 20 }}>

      <h2>Products Microfrontend</h2>

      {products.map(product => (

        <div key={product.id} style={{ marginBottom: 10 }}>

          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>

        </div>

      ))}

    </div>

  )

}