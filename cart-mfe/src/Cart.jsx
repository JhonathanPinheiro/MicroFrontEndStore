import React, { useEffect, useState } from "react"
import { eventBus } from "shell/eventBus"
import { EVENTS } from "shell/events"

export default function Cart() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (event) => {
    setCartItems(prevItems => [...prevItems, event.detail])
  }
  const handleRemoveFromCart = (event) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== event.detail.id))
  }

  useEffect(() => {

    eventBus.on(EVENTS.ADD_TO_CART, handleAddToCart)

    return () => {
      eventBus.off(EVENTS.ADD_TO_CART, handleAddToCart)
    }
  }, [])

  return (

    <div style={{border:"2px solid blue", padding:20}}>

      <h2>Cart Microfrontend</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <button onClick={() => handleRemoveFromCart({ detail: item })}>Remove</button>
            </li>
          ))}
        </ul>
      )}

    </div>

  )

}