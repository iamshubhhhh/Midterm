function calculateFactorial() {
  const input = document.getElementById("userInput").value;
  const outputDiv = document.getElementById("output");

  if (input === "" || input < 0) {
    outputDiv.textContent = "Negative numbers and empty input are not allowed.";
    return;
  }

  let result = 1;
  for (let i = 1; i <= input; i++) {
    result *= i;
  }

  outputDiv.textContent = `${input}! = ${result}`;
}
