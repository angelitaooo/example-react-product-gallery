import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => <Card name={product.name} />)}
      </div>
    );
  }
}

export default CardList;
