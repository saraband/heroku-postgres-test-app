import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>heroku postgres test</title>
        </head>
        <body>
            <h1>Hello world</h1>
        </body>
    </html>
  `);
});

app.listen(PORT);
