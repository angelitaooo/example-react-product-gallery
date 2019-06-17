import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    return (
      <div className="products">
        <h1 className="products-title">All Products</h1>
        <div className="card-list">
          {this.props.products.map(product => (
            <Card
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images.medium}
              onToggleModal={this.props.onToggleModal}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
