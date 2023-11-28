// Get the form element by its ID
const form = document.getElementById("myForm");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the value of the input field with the name "name"
  const nameInput = document.getElementById("name");
  const userName = nameInput.value;

  // Get the greeting paragraph element
  const greetingElement = document.getElementById("greeting");

  // Display the greeting
  greetingElement.innerHTML = `Hello, ${userName}!`;

  // Optionally, you can clear the input field after displaying the greeting
  nameInput.value = "";
});
