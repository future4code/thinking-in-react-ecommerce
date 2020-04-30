import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`

const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
`

export class ProductCard extends React.Component {
  render() {
    return <CardContainer>
      <img src={'https://picsum.photos/200/200'}/>
      <CardInfo>
        <p>Produto</p>
        <p>R$100,00</p>
        <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
      </CardInfo>
    </CardContainer>
  }
}