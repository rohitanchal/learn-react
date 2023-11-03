import React from "react";
export default class Emp extends React.Component {
  render() {
    return (
        <div>
        <h1>Hello {this.props.names}</h1>
        <h3>Email : {this.props.email}</h3>
      </div>
    );
  }
}
