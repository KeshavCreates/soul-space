// This file should be placed in the following directory:
// your-project-folder/netlify/functions/gemini.js

exports.handler = async function(event, context) {
    // We only want to handle POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    // Get the API key from your Netlify environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return { statusCode: 500, body: 'API key not found.' };
    }

    // The Gemini API endpoint
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
    // The payload from the frontend
    const payload = JSON.parse(event.body);

    try {
        // We need to use a library that supports fetch in a Node.js environment
        // 'node-fetch' is a good choice. You'll need to add it to your package.json
        const fetch = (await import('node-fetch')).default;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            // If the API returns an error, pass it back to the frontend
            const errorBody = await response.text();
            console.error('Gemini API Error:', errorBody);
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: `API request failed: ${errorBody}` })
            };
        }

        const result = await response.json();

        // Return the successful response to the frontend
        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };

    } catch (error) {
        console.error('Netlify function error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
