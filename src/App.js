import React from 'react';
import s from './App.module.scss';
import CartContext from './context/CartContext/CartContext';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import ProductContainer from './containers/ProductContainer/ProductContainer';

class App extends React.Component {

  updateCart = amount => {
    this.setState({cartValue: this.state.cartValue + amount});
  }

  state = {
    cartValue: 0,
    updateCart: this.updateCart,
  }

  componentWillUnmount() {
    // See note in Cart.jsx for why were're resetting the value
    this.setState({ cartValue: 0 });
  }

  render() {
    return (
    <div className={s.App} data-testid="app-Root">
    <CartContext.Provider value={this.state}>
      <Header />
      <main className={s.main} data-testid="app-Main">
        <ProductContainer />
      </main>
      <Footer />
    </CartContext.Provider>
    </div>
  );
  } 
}

export default App;