// worker.js

async function handleRequest(req) {
  const url = new URL(req.url);

  // Serve the CSS file when requested
  if (url.pathname === "/assets/style.css") {
    const css = await fetch("https://raw.githubusercontent.com/yourrepo/style.css");
    const cssText = await css.text();
    return new Response(cssText, {
      headers: { "Content-Type": "text/css" },
    });
  }

  // Serve the home page when the user accesses the root "/"
  if (url.pathname === "/") {
    const homePage = `
      <html>
        <head>
          <title>Welcome to devilsadvocate's Site</title>
          <link rel="stylesheet" href="/assets/style.css">
        </head>
        <body>
          <div class="water"></div> <!-- Water animation -->
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
          <link rel="stylesheet" href="/assets/style.css">
        </head>
        <body>
          <div class="water"></div> <!-- Water animation -->
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
  return new Response('Not Found', { status: 404 })
}

// The worker entry point
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});
