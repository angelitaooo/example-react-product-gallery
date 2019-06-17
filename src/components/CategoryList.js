import React, {Component} from 'react';

class CategoryList extends Component {
  render() {
    return (
      <div className="categories">
        <h1>All Categories</h1>
        <ul>
          {this.props.categories.map(category => (
            <li
              className={
                this.props.showActiveCategory === category.id ? 'active' : 'no'
              }
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
