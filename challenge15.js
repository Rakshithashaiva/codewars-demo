//Basic Mathematical Operations
function basicOp(operation, value1, value2)
{
  // Code
  let result = 0
  switch(operation) {
  case '+':
    result = value1 + value2
    break
  case '-':
    result = value1 - value2
    break
  case '*':
    result = value1 * value2
    break
  case '/':
    result = value1 / value2
    break
  default:
    return "not a valid operator"
    break
  }
  return result
}