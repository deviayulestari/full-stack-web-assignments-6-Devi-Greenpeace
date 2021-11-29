import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 1
  const b = 2
  const expected = 3
  
  // Act
  const got = Add(a, b)
  
  // Assert
  expect(got).toBe(expected)

})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 6
  const b = 2
  const expected = 4
  
  // Act
  const got = Substract(a, b)
  
  // Assert
  expect(got).toBe(expected)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 10
  const b = 2
  const expected = 20
  
  // Act
  const got = Multiplication(a, b)

  // Assert
  expect(got).toBe(expected)

})