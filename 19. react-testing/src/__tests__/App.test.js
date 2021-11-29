import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const todos = [{
    id: 1,
    name: "Learn JSX",
    isComplete: false
  },
  {
    id: 2,
    name: "Build awesome react app",
    isComplete: false
  },
  {
    id: 3,
    name: "Ship it",
    isComplete: false
  }]

  const inputTodo = [{
    id: 4,
    name: "Doing group project",
    isComplete: false
  }]

  const outputExpected = [inputTodo, ...todos]
  const expected = JSON.stringify(outputExpected)

  // Act
  const outputGot = AddTodo(todos, inputTodo)
  const got = JSON.stringify(outputGot)

  // Assert
  expect(got).toBe(expected)
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const todos = [{
    id: 1,
    name: "Learn JSX",
    isComplete: false
  },
  {
    id: 2,
    name: "Build awesome react app",
    isComplete: false
  },
  {
    id: 3,
    name: "Ship it",
    isComplete: false
  }]

  const inputTodo = [{
    id: 4,
    name: "Doing group project",
    isComplete: false
  }]

  const expectedTodos = [{
    id: 1,
    name: "Learn JSX",
    isComplete: false
  },
  {
    id: 2,
    name: "Build awesome react app",
    isComplete: false
  },
  {
    id: 3,
    name: "Ship it",
    isComplete: false
  }]

  // Act
  AddTodo(todos, inputTodo)
  const testInput = todos
  const expected = JSON.stringify(expectedTodos) === JSON.stringify(testInput)

  // Assert
  expect(true).toBe(expected)
})