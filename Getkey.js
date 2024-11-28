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

  // Style the key to make it bigger
  keyDisplay.style.fontSize = '3rem';  // Increase font size for bigger key
  keyDisplay.style.fontWeight = 'bold';  // Optionally, make it bold for emphasis
  keyDisplay.style.color = '#FF6347';  // Color to match the theme
}
