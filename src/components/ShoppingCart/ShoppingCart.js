import React from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`

export class ShoppingCart extends React.Component {
  render() {
    return <ShoppingCartContainer>
      <h3>Carrinho:</h3>
      <CartListContainer>
        <ShoppingCartItem/>
        <ShoppingCartItem/>
        <ShoppingCartItem/>
        <ShoppingCartItem/>
      </CartListContainer>
      <p>Valor total: R$100,00</p>
    </ShoppingCartContainer>
  }
}