import React, { useState } from 'react';
// two belowe from https://www.npmjs.com/package/react-icons
import { FaTrashRestore } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
// tylko tak mozna importowac jednak styled modyles nie dzialaja
//import styles from '/Styler.css';

import { connect } from 'react-redux';

import '/Styler.css';

//import Icon from "react-native-vector-icons/Fonts/Ionicons.ttf";
//const MyIcon = <Icon name="rocket" size={30} color="#900" />;

const Input = styled.input`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = styled.button`
  color: white;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: palevioletred;
  margin: 1rem;
  transition: all 500ms;
  :hover {
    cursor: pointer;
    color: palevioletred;
    background-color: white;
  }
`;

function App(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Your First To-DO app</h1>
      <hr />
      <Input onChange={e => props.changeTask(e)} value={props.task} />
      <Button onClick={props.addTask}>Add Task</Button>
      <ul>
        {props.taskList.map((task, index) => (
          <li title="Remove item from todo list" id={index}>
            {task}
            <div
              style={{ display: 'inline-block', cursor: 'pointer' }}
              onClick={index => props.removeItem(index)}
            >
              <IconContext.Provider
                value={{
                  color: 'blue',
                  className: 'global-class-name'
                }}
              >
                <FaTrashRestore />
              </IconContext.Provider>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const stateToProps = state => {
  return {
    task: state.task,
    taskList: state.taskList
  };
};

const dispatchToProps = dispatch => {
  return {
    addTask: () => dispatch({ type: 'Add_Task' }),
    changeTask: e => dispatch({ type: 'Change_Task', value: e }),
    removeItem: e => dispatch({ type: 'Remove_Item', value: e })
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(App);
