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

  const totalValue = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="mfe-card">
      <span className="card-label">Carrinho</span>
      <h2>Resumo do carrinho</h2>
      <p className="card-text">Carrinho funcional que recebe eventos de produtos adicionados por outros microfrontends.</p>
      {cartItems.length === 0 ? (
        <p className="empty-state">Seu carrinho está vazio. Adicione produtos para testar o fluxo.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p className="cart-meta">Preço unitário</p>
                </div>
                <div className="actions">
                  <span className="cart-price">${item.price.toFixed(2)}</span>
                  <button className="btn btn-secondary" onClick={() => handleRemoveFromCart({ detail: item })}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>{cartItems.length} item(s) no carrinho</p>
            <p className="total-price">Total: ${totalValue.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  )
}
