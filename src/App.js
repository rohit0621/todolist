import React, { Component } from "react";
import TodoContainer from "./TodoContainer";
import { connect } from "react-redux";
import { addTodoAction, fetchingTodosAction } from "./redux/actions";

class App extends Component {
  state = {
    id: 1,
    name: "hello",
    completed: false,
    edit: false,
  };

  componentDidMount() {
    this.props.fetchingTodosAction();
  }
  // callBackendAPI = async () => {
  //   const response = await fetch("/todos");
  //   const body = await response.json();
  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   console.log(body, "@## body");
  //   return body;
  // };

  render() {
    return (
      <div>
        <TodoContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    apiAction: (data) => dispatch(addTodoAction(data)),
    fetchingTodosAction: () => dispatch(fetchingTodosAction()),
  };
};

export default connect(null, mapDispatchToProps)(App);
