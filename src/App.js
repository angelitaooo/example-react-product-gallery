import React, {Component} from 'react';
import './App.css';
import * as requests from './requests';
import CardList from './components/CardList';
import CategoryList from './components/CategoryList';
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
    this.setState({products});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CategoryList
            getCategoryList={this.getProductCategory}
            categories={this.state.categories}
          />
          <CardList products={this.state.products} />
        </header>
      </div>
    );
  }
}

export default App;
