import React, { Component } from 'react';
import { Dropdown, DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }
  filterItem = (item) => {
    const { search, type } = this.state;
    if (type === "all" || type === item.type.toLowerCase()) {
      return item.name.toLowerCase().search(search) !== -1;    
    }
    return false;
  }
  handleTypeSelect = (eventKey) => {
    this.setState({ type: eventKey });  
  }

  render(){
    return (
        <div className = "filter-list">
          <h1>Produce Search</h1>
          <DropdownButton id="typeDropdown" title={"Type"}>
            <Dropdown.Item eventKey="all" onSelect={this.handleTypeSelect}>All</Dropdown.Item>
            <Dropdown.Item eventKey="fruit" onSelect={this.handleTypeSelect}>Fruit</Dropdown.Item>
            <Dropdown.Item eventKey="vegetable" onSelect={this.handleTypeSelect}>Vegetable</Dropdown.Item>
          </DropdownButton> 
          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
