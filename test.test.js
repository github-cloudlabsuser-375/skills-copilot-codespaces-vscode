// Import the module or class that contains the add method
const MyClass = require('./myClass');

// Create a test suite
describe('MyClass', () => {
  let myInstance;

  // Create a setup function that runs before each test
  beforeEach(() => {
    myInstance = new MyClass();
  });

  // Write a test for the add method
  it('should add two numbers correctly', () => {
    // Arrange
    const a = 5;
    const b = 10;
    const expected = 15;

    // Act
    const result = myInstance.add(a, b);

    // Assert
    expect(result).toBe(expected);
  });
});