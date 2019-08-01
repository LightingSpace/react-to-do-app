import React, { useState } from 'react';
// two belowe from https://www.npmjs.com/package/react-icons
import { FaTrashRestore } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
// tylko tak mozna importowac jednak styled modyles nie dzialaja
//import styles from '/Styler.css';

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

export default () => {
  let [task, setTask] = useState('');
  let [taskList, setTaskList] = useState([]);
  function changeTask(e) {
    setTask((task = e.target.value));
    console.log(task);
  }

  function addTask() {
    setTaskList([...taskList, task]);
    setTask((task = ''));
    console.log(taskList);
  }

  function randomNum() {
    //  return (Math.random() * 1000).toFixed(0);
    return 'ds';
  }

  function removeItem(index) {
    //console.log(index.target.parentNode.id);
    const indexToRemove = index.currentTarget.parentNode.id;
    console.log('TO wskazuje index :', index.currentTarget);
    console.log('Index to remove : ', indexToRemove);
    setTaskList(taskList.filter((elem, index) => index != indexToRemove));
    console.log('Show taskList : ', taskList);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Your First To-DO app</h1>
      <hr />
      <Input onChange={e => changeTask(e)} value={task} />
      <Button onClick={addTask}>Add Task</Button>
      <ul>
        {taskList.map((task, index) => (
          <li title="Remove item from todo list" id={index}>
            {task}
            <div
              style={{ display: 'inline-block', cursor: 'pointer' }}
              onClick={index => removeItem(index)}
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
};
