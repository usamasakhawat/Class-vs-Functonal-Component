import React, {Component} from "react";
import Man from "./Man";

class Person extends Component {
  
  render() {
    return(
      <div>
        <div>Name: Class Component</div>
        <div>Age: 11 Years</div>
        <Man />
      </div>
    )
  }
}

export default Person;