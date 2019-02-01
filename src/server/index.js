import express from 'express';
import database, { sequelize } from './models';
import path from 'path';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../../public')));

app.get('/images', (req, res) => {
  database.image.findAll().then((results) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(results));
  })
})

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>heroku postgres test</title>
        </head>
        <body>
            <div id='root'></div>
            <script src='/bundle.js' async defer></script>
        </body>
    </html>
  `);
});

app.listen(PORT);
