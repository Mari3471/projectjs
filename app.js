import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('Hello from SPSE!');
});
app.use('/static', express.static('static'));
app.get('/', (req, res) => {
  res.write('<!DOCTYPE html>');
  res.write('<html lang="cs">');
  res.write('<head>');
  res.write('<meta charset="UTF-8">');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>SQL je na sebevrazdu</h1>');
  res.write('<a href="/stats">STATISTICS</a>');
  res.write('<br>');
  res.write('<a href="/static/Kuchari.html">Studenti v okne</a>');
  res.write('<br>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});
