// worker.js

async function handleRequest(req) {
  const url = new URL(req.url);

  // Serve the home page when the user accesses the root "/"
  if (url.pathname === "/") {
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
              background-color: #222222;
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
            h1 {
              font-size: 3rem;
              color: #FF6347;
              font-weight: bold;
            }
            .container {
              padding: 40px;
              background-color: rgba(0, 0, 0, 0.7);
              border-radius: 10px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
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
            <h1>Welcome to devilsadvocate's Site</h1>
            <p>We're glad you're here! Explore all the cool features!</p>
            <button class="button" onclick="window.location.href='/explore'">Go to Explore</button>
          </div>
        </body>
      </html>
    `;
    return new Response(homePage, { headers: { 'Content-Type': 'text/html' } });
  }

  // Serve the explore page when the user accesses "/explore"
  if (url.pathname === "/explore") {
    const explorePage = `
      <html>
        <head>
          <title>Explore devilsadvocate's Site</title>
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
              animation: fadeIn 1s ease-out;
            }
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
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
            <h1>Explore devilsadvocate's Site!</h1>
            <p>Now that you're here, check out all the cool features and content we have for you!</p>
            <button class="button" onclick="window.location.href='/'">Go Back to Home</button>
          </div>
        </body>
      </html>
    `;
    return new Response(explorePage, { headers: { 'Content-Type': 'text/html' } });
  }

  // Return a 404 response if the path is not recognized
  return new Response('Not Found', { status: 404 });
}

// The worker entry point
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
