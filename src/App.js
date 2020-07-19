import React from "react";
import FriendCard from "./components/Table";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends

  };

 handleRemove = (id)=> {
    const friends= this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends: friends });

  }
  render () {
    return ( 
    <Wrapper>
      { this.state.friends.map (friend => (
      <FriendCard key={friend.id} {...friend} handleRemove={this.handleRemove}/>
      ))}
      </Wrapper>
    );
      }
    }
  
  

export default App;
