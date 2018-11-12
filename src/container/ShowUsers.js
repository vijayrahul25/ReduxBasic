import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/userActions";

class ShowUsers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h2>UserList</h2>

        {this.props.users.map((person, index) => (
          <p key={index}>
            Hello, {person.username} from {person.city}!
          </p>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.userReducer.users
  };
}

export default connect(mapStateToProps)(ShowUsers);
