import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class GPSelectInput extends Component {
  constructor(props) {
    super(props);
  }

  //On the change event for the select box pass the selected value back to the parent
  handleChange = (event) => {
    let selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
  };

  render() {
    let arrayOfData = this.props.arrayOfData;
    let options = arrayOfData.map((data) => (
      <option key={data.id} value={data.id}>
        {data.name}
      </option>
    ));

    return (
      <div>
        <Form.Select
          className="border border_color mb-2 mt-3 form-select"
          aria-label="Default select example"
          onChange={this.handleChange}
        >
          {options}
        </Form.Select>
      </div>
    );
  }
}

export default GPSelectInput;
