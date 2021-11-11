import React, { Component } from "react";
import "./styles.css";

// React-Redux connect
import { connect } from "react-redux";
// Redux Actions
import { buyLaptop, buyMobile, fetchUsers } from "../Redux/actions";
export class Shop extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Welcome to VShop</h1>
        <div className="items">
          <div className="item">
            <p>Dell Inspiron Laptop</p>
            <p>Available: {this.props.numOfLaptops}</p>
            <button onClick={this.props.buyLaptop}>BUY</button>
          </div>
          <div className="item">
            <p>Redme Note 7</p>
            <p>Available: {this.props.numOfMobiles}</p>
            <button onClick={this.props.buyMobile}>BUY</button>
          </div>
          <div className="item">
            <p>Get users data</p>
            <p>Count: {this.props.users.length}</p>
            <button onClick={this.props.fetchUsers}>Call API</button>
          </div>
        </div>
      </div>
    );
  }
}
// Redux Map State to props
const mapStateToProps = (state) => {
  return {
    numOfLaptops: state.laptops.NumberofLaps,
    numOfMobiles: state.mobiles.NumberofMobile,
    users: state.users.users,
  };
};
// Redux Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyLaptop: () => dispatch(buyLaptop()),
    buyMobile: () => dispatch(buyMobile()),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

// Redux Connect to Shop Component
/*Connect is a Higher Order Component (HOC), which means it will take components as argument and will return a fresh brand new component with whatever changes we will do by using the given components as arguments. Here we are taking Shop component and mapping the state and dispatch actions to Props of the Shop component*/
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
