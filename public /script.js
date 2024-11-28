document.getElementById('bypassButton').addEventListener('click', function () {
  const apiUrl = 'https://bypass.example.com/bypass'; // Update to your Worker URL
  const linkToBypass = document.getElementById('urlInput').value.trim();
  const resultContainer = document.getElementById('resultContainer');
  const resultText = document.getElementById('resultText');
  const copyButton = document.getElementById('copyButton');
  const openButton = document.getElementById('openButton');

  if (linkToBypass === '') {
    alert('Please enter a URL to bypass.');
    return;
  }

  resultContainer.classList.remove('hidden');
  resultText.textContent = 'Processing...';

  copyButton.classList.add('hidden');
  openButton.classList.add('hidden');

  fetch(`${apiUrl}?link=${encodeURIComponent(linkToBypass)}`)
    .then(response => response.json())
    .then(data => {
      if (data.bypassed) {
        resultText.textContent = data.bypassed;
        copyButton.classList.remove('hidden');
        openButton.classList.remove('hidden');

        copyButton.addEventListener('click', () => {
          navigator.clipboard.writeText(data.bypassed);
          alert('URL copied to clipboard!');
        });

        openButton.addEventListener('click', () => {
          window.open(data.bypassed, '_blank');
        });
      } else {
        resultText.textContent = 'Bypass failed.';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resultText.textContent = 'An error occurred while processing.';
    });
});
