import React, { useContext } from "react";
import { CoffeeCardSmall } from "../../../components/CoffeeCardSmall";
import { OrderContext } from "../../../contexts/OrderContext";
import { IndexedCoffeeData } from "../../../database/coffee-data";
import { CartContainer, CartCard } from "./styles";

interface CartProps {
  onConfirmOrder: () => void;
}

export function Cart({ onConfirmOrder }: CartProps) {
  const { productsList, updateProductQuantity, removeProductFromCart } =
    useContext(OrderContext);

  const getOrderSubtotal = () => {
    return productsList.reduce(
      (prev, curr) => prev + curr.qty * IndexedCoffeeData[curr.id].price,
      0
    );
  };

  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>
      <CartCard>
        {productsList.map((product) => (
          <React.Fragment key={product.id}>
            <CoffeeCardSmall
              {...IndexedCoffeeData[product.id]}
              quantity={product.qty}
              onQuantityChange={updateProductQuantity}
              onRemoveClick={removeProductFromCart}
            />
            <hr />
          </React.Fragment>
        ))}
        <p>
          <span>Total de itens:</span>
          <span>{`R$ ${new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
          }).format(getOrderSubtotal())}`}</span>
        </p>
        <p>
          <span>Entrega:</span>
          <span>R$ 3,50</span>
        </p>
        <p>
          <span>Total:</span>
          <span>{`R$ ${new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
          }).format(getOrderSubtotal() + 3.5)}`}</span>
        </p>
        <button type="submit" onClick={onConfirmOrder}>
          CONFIRMAR PEDIDO
        </button>
      </CartCard>
    </CartContainer>
  );
}
