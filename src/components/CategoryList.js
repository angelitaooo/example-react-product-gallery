import React, {Component} from 'react';
import {connect} from 'react-redux';

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

const mapStateToProps = state => {
  console.log(state);
  return {categories: state.categories};
};
export default connect(
  mapStateToProps,
  null
)(CategoryList);
