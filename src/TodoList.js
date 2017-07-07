import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from './actions/items';

export class TodoList extends Component {
  state = { name: '' }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.props.dispatch(addItem(name));
    this.setState({ name: '' });
  }

  render() {
    const { name } = this.state;
    const { items } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleChange} 
            name='name'
            placeholder='Add Item'
            value={name}
            required
          />
          <hr />
          <ul>
            { items.map( (item, i) => 
                <li key={i}>
                  {item} {' '}
                  <span 
                    style={{color: 'red'}} 
                    onClick={ () => this.props.dispatch(removeItem(i))}
                  >
                    X
                  </span>
                </li>
              )
            }
          </ul>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(TodoList);