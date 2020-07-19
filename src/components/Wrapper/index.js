import React from "react";
import "./style.css";

function Wrapper(props) {
  return (<div>
  <h1 className="title">Employee Directory</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Employee Photo</th>
        <th scope="col">Name</th>
        <th scope="col">Occupation</th>
        <th scope="col">Location</th>
      </tr>
    </thead>
    {props.children}
  </table>
  </div>)
}

export default Wrapper;
