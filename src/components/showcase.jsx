import React, { Component } from "react";

class AddItem extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  AddItem = () => {
    if (this.state.value) {
      this.props.addToShowcase(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <div className="d-flax my-3">
        <input
          type="text"
          className="form-control my-2"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          onClick={this.AddItem}
          className="btn btn-sm btn-primary btn-block"
        >
          Add Item
        </button>
      </div>
    );
  }
}

const ItemList = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map(lang => (
        <li className="list-group-item" key={lang}>
          {lang}
        </li>
      ))}
    </ul>
  );
};

//main class
function Showcase({ user, addToShowcase }) {
  return (
    <div>
      <h3> {user.name}Showcase:</h3>
      <AddItem addToShowcase={addToShowcase} />
      <ItemList items={user.languages} />
    </div>
  );
}
export default Showcase;
