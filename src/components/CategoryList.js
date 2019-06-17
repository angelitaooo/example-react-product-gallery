import React, {Component} from 'react';

class CategoryList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.categories.map(category => (
            <li
              key={category.id}
              onClick={() => this.props.getCategoryList(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
