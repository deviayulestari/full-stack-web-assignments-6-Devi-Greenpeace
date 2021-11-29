import React from 'react';

const TodoList = ({ todos }) => {
  // console.log(todos);
  return (
    <ul>
      {
        todos.map((todo) => (
          <li>{todo.name}</li>
        ))
      }
    </ul>
  );
}

export default TodoList;