// worker.js
async function handleRequest(req) {
  const url = new URL(req.url);

  // Serve the homepage when the user accesses "/"
  if (url.pathname === "/") {
    const indexPage = await fetch("https://raw.githubusercontent.com/Hiplitehehe/REDzHUB/main/index.html");
    const indexHTML = await indexPage.text();
    return new Response(indexHTML, {
      headers: { "Content-Type": "text/html" }
    });
  }

  // Return a 404 response if the path is not recognized
  return new Response('Not Found', { status: 404 });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
