const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'assets' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Set up a route to render HTML
app.get('/', (req, res) => {
    // Send the HTML code as a response
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
