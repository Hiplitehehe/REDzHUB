async function handleRequest(req) {
  const url = new URL(req.url);

  // Serve the home page when the user accesses "/"
  if (url.pathname === "/") {
    // Your home page HTML content
    const homePage = `
      <html>
        <head>
          <title>Welcome to devilsadvocate's Site</title>
          <style>
            body {
              font-family: 'Roboto', sans-serif;
              margin: 0;
              padding: 0;
              height: 100%;
              background: linear-gradient(135deg, #8B0000, #FF6347);
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
            }
            h1 {
              font-size: 3rem;
              font-weight: bold;
              text-transform: uppercase;
              color: #B22222;
              letter-spacing: 2px;
              text-align: center;
            }
            .container {
              background-color: rgba(0, 0, 0, 0.7);
              padding: 40px 60px;
              border-radius: 15px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
              text-align: center;
            }
            p {
              font-size: 1.2rem;
              color: #FF6347;
              margin: 20px 0;
            }
            .button {
              padding: 15px 30px;
              background-color: #FF6347;
              color: white;
              font-size: 1.2rem;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
            .button:hover {
              background-color: #B22222;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to devilsadvocate's Site!</h1>
            <p>Explore our features, resources, and content.</p>
            <button class="button" onclick="window.location.href='/explore'">Explore</button>
            <br><br>
            <button class="button" onclick="getKey()">Get Key</button> <!-- New Get Key Button -->
            <p id="keyDisplay"></p> <!-- This paragraph will display the key -->
          </div>
          <script src="/Getkey.js"></script> <!-- Link to the Getkey.js file -->
        </body>
      </html>
    `;
    return new Response(homePage, { headers: { 'Content-Type': 'text/html' } });
  }

  // Serve the explore page when the user accesses "/explore"
  if (url.pathname === "/explore") {
    const explorePage = await fetch('https://raw.githubusercontent.com/Hiplitehehe/Bhhhhh/91d828c55482273382db607e2ba53523c8e488d1/Explore.html');
    return new Response(await explorePage.text(), {
      headers: { 'Content-Type': 'text/html' }
    });
  }

  // Serve the Getkey.js file
  if (url.pathname === "/Getkey.js") {
    const getKeyScript = `
      function getKey() {
        const key = 'KH-Adfwb7901+Habksjaiq';  // Static key you want to display

        // Create or find the key display element and set its content
        let keyDisplay = document.getElementById('keyDisplay');
        if (!keyDisplay) {
          keyDisplay = document.createElement('p');
          keyDisplay.id = 'keyDisplay';
          document.body.appendChild(keyDisplay);
        }

        keyDisplay.textContent = \` key is: \${key}\`;
      }
    `;
    return new Response(getKeyScript, { headers: { 'Content-Type': 'application/javascript' } });
  }

  // Return a 404 response if the path is not recognized
  return new Response('Not Found', { status: 404 });
}

// The worker entry point
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
