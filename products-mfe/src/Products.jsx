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
    <div className="mfe-card">
      <span className="card-label">Catálogo</span>
      <h2>Produtos disponíveis</h2>
      <p className="card-text">Lista de produtos de exemplo. Adicione itens ao carrinho para ver a comunicação entre microfrontends.</p>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div>
              <h3>{product.name}</h3>
              <p className="product-meta">Preço unitário</p>
            </div>
            <div className="actions">
              <span className="product-price">${product.price.toFixed(2)}</span>
              <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Adicionar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
