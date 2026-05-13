const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .container {
      text-align: center;
      padding: 2rem;
    }
    h1 { font-size: 4rem; font-weight: 700; margin-bottom: 1rem; }
    p { font-size: 1.25rem; opacity: 0.85; }
    .badge {
      display: inline-block;
      margin-top: 2rem;
      padding: 0.4rem 1rem;
      background: rgba(255,255,255,0.2);
      border-radius: 999px;
      font-size: 0.875rem;
      letter-spacing: 0.05em;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hello World!</h1>
    <p>Node.js app running on Vercel</p>
    <span class="badge">play-with-box</span>
  </div>
</body>
</html>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
