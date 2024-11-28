// worker.js

async function handleRequest(req) {
  const url = new URL(req.url);

  // Check if it's the root page "/"
  if (url.pathname === "/") {
    // Check for a 'visitor' cookie to see if it's the user's first time
    const visitorCookie = req.headers.get("Cookie");
    let welcomeMessage;

    if (!visitorCookie || !visitorCookie.includes("visited=true")) {
      // If the cookie doesn't exist or the user is visiting for the first time
      welcomeMessage = `
        <html>
          <head>
            <title>devilsadvocate's Site</title>
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
                font-size: 4rem;
                font-weight: bold;
                text-transform: uppercase;
                color: #B22222;  /* Dark red */
                letter-spacing: 2px;
              }
              p {
                font-size: 1.5rem;
                color: #FF6347;  /* Light red/pinkish tone */
                margin: 20px 0;
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
              .button {
                padding: 15px 30px;
                background-color: #FF6347;  /* Red background */
                color: white;
                font-size: 1.2rem;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
              }
              .button:hover {
                background-color: #B22222;  /* Darker red on hover */
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Welcome to devilsadvocate's Site!</h1>
              <p>We're glad you're here. Please explore our site!</p>
              <button class="button" onclick="window.location.href='/explore'">Start Exploring</button>
            </div>
          </body>
        </html>
      `;
      // Set a cookie to remember the user for the next time
      const headers = {
        'Set-Cookie': 'visited=true; Max-Age=31536000; Path=/; HttpOnly;',
        'Content-Type': 'text/html'
      };
      return new Response(welcomeMessage, { headers });
    } else {
      // If the cookie exists, welcome back the user
      welcomeMessage = `
        <html>
          <head>
            <title>devilsadvocate's Site</title>
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
                font-size: 4rem;
                font-weight: bold;
                text-transform: uppercase;
                color: #B22222;  /* Dark red */
                letter-spacing: 2px;
              }
              p {
                font-size: 1.5rem;
                color: #FF6347;  /* Light red/pinkish tone */
                margin: 20px 0;
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
              .button {
                padding: 15px 30px;
                background-color: #FF6347;  /* Red background */
                color: white;
                font-size: 1.2rem;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
              }
              .button:hover {
                background-color: #B22222;  /* Darker red on hover */
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Welcome Back to devilsadvocate's Site!</h1>
              <p>It's great to see you again!</p>
              <button class="button" onclick="window.location.href='/explore'">Continue Exploring</button>
            </div>
          </body>
        </html>
      `;
      return new Response(welcomeMessage, { headers: { 'Content-Type': 'text/html' } });
    }
  }

  // Return a 404 response if the path is not recognized
  return new Response('Not Found', { status: 404 })
}

// The worker entry point
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
