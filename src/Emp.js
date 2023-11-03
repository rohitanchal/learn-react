import React from "react";
export default class Emp extends React.Component {
  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <h3>Email : {this.props.email}</h3>
      </>
    );
  }
}
