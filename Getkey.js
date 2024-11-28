// getkey.js
function getKey() {
  const key = 'kdnxisdj';  // Static key you want to display

  // Create or find the key display element and set its content
  let keyDisplay = document.getElementById('keyDisplay');
  if (!keyDisplay) {
    keyDisplay = document.createElement('p');
    keyDisplay.id = 'keyDisplay';
    document.body.appendChild(keyDisplay); // Optionally, append the key display to the body or any specific container
  }
  
  keyDisplay.textContent = `Your key is: ${key}`;
}
