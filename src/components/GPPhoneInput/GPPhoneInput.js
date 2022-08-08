import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class GPPhoneInput extends Component {
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
        <div className="input-group mt-3">
          <select
            className="form-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
            onChange={this.handleChange}
          >
            {options}
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
          />
        </div>
      </div>
    );
  }
}

export default GPPhoneInput;
