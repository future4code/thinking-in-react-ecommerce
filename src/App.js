import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const products = [
  {
    id: 1,
    name: 'Produto legal',
    price: 123,
    photo: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 200,
    photo: 'https://picsum.photos/200/200?a=2'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 30,
    photo: 'https://picsum.photos/200/200?a=3'
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 10,
    photo: 'https://picsum.photos/200/200?a=4'
  }
]

class App extends React.Component {
  state = {
    minFilter: 100,
    maxFilter: 1000,
    nameFilter: 'Produto',
    productsInCart: [
      {
        id: 4,
        name: 'Produto 4',
        price: 10,
        photo: 'https://picsum.photos/200/200?a=4',
        quantity: 1
      },
      {
        id: 3,
        name: 'Produto 3',
        price: 30,
        photo: 'https://picsum.photos/200/200?a=3',
        quantity: 2
      }
    ]
  }

  render() {
    return (
      <AppContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
        />
        <Products
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
        />
        <ShoppingCart
          productsInCart={this.state.productsInCart}
        />
      </AppContainer>
    );
  }
}

export default App;
