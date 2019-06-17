import React, {Component} from 'react';
import './App.css';
import * as requests from './requests';
import CardList from './components/CardList';
import CategoryList from './components/CategoryList';
import Modal from './components/Modal';
// export default function App() {
//   // Here as an example to get you started with requests.js
//   React.useEffect(() => {
//     (async () => {
//       const categories = await requests.getCategories();
//       const products = await requests.getProducts({
//         categoryId: categories[0].id,
//       });
//       const product = await requests.getProduct(products[0].id);
//       console.log('Example request: categories', categories);
//       console.log('Example request: products', products);
//       console.log('Example request: product', product);
//     })();
//   }, []);

class App extends Component {
  state = {
    products: [],
    categories: [],
    activeCategory: 0,
    showModal: false,
    product: '',
  };

  async componentDidMount() {
    const categories = await requests.getCategories();
    const products = await requests.getProducts({
      categoryId: categories[0].id,
    });
    const product = await requests.getProduct(products[0].id);
    this.setState({
      categories,
      products,
    });
    console.log(categories);
    console.log(products);
  }

  getProductCategory = async id => {
    const products = await requests.getProducts({
      categoryId: this.state.categories[id - 1].id,
    });
    this.setState({products, activeCategory: id});
  };

  toggleModal = id => {
    this.setState({
      showModal: !this.state.showModal,
      product: this.state.products[id - 1],
    });
  };

  onClose = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  filterByMinPrice = () => {
    const min = this.state.products.sort(function(a, b) {
      const min = a.price;
      const max = b.price;
      return min - max;
    });
    this.setState({products: min});
  };

  filterByMaxPrice = () => {
    const max = this.state.products.sort(function(a, b) {
      const min = a.price;
      const max = b.price;
      return max - min;
    });
    this.setState({products: max});
  };

  render() {
    return (
      <div className="App">
        <section className="main-content">
          <div>
            <CategoryList
              getCategoryList={this.getProductCategory}
              categories={this.state.categories}
              showActiveCategory={this.state.activeCategory}
            />
            <button onClick={this.filterByMinPrice}>Min</button>
            <button onClick={this.filterByMaxPrice}>Max</button>
          </div>
          <CardList
            products={this.state.products}
            onToggleModal={this.toggleModal}
          />
          <Modal open={this.state.showModal} onClose={this.onClose}>
            <div className="modal-item-detail">
              <h3>{this.state.product.name}</h3>
              <p>{this.state.product.description}</p>
              <p>${this.state.product.price}</p>
            </div>
          </Modal>
        </section>
      </div>
    );
  }
}

export default App;
