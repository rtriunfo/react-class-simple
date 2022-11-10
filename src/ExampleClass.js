import React from "react";

import "./ExampleClass.css";

class ExampleClass extends React.Component {
  render() {
    return (
      <h1 className="center">
        It's me here I'm a Class <br />
        Name : {this.props.blah[0].me} <br />
        Age : {this.props.blah[0].age}
        <br />
        Sex : {this.props.blah[0].sex}
      </h1>
    );
  }
}

export default ExampleClass;
