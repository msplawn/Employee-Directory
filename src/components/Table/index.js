import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <tbody>
    <tr>
      <td><img src={props.image}></img></td>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.location}</td>
    </tr>
  </tbody>
  );
}

export default FriendCard;
