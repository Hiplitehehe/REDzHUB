export default {
  async fetch(request) {
    const { searchParams } = new URL(request.url);

    // Retrieve the URL to bypass from the query parameter
    const linkToBypass = searchParams.get('link');
    if (!linkToBypass) {
      return new Response(JSON.stringify({ error: 'No URL provided.' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    // Replace with your API endpoint
    const apiUrl = `https://bypassunlockapi-eqyp.onrender.com/bypass`;

    try {
      const response = await fetch(`${apiUrl}?link=${encodeURIComponent(linkToBypass)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch bypass data.');
      }

      const data = await response.json();

      if (data.bypassed) {
        return new Response(JSON.stringify({ bypassed: data.bypassed }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        return new Response(JSON.stringify({ error: 'Bypass failed.' }), {
          headers: { 'Content-Type': 'application/json' },
          status: 400,
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal Server Error.' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      });
    }
  },
};
