// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

var a = 4;
a = a + 1;
const name = function (a) {
  console.log(a);
};

const name2 = (a) => {
  console.log(a);
};

//JS-object-rotation = JSON
console.log(name2(a));

app.get('/', (req, res) => {
  res.write('<!DOCTYPE html>');
  res.write('<html lang="cs">');
  res.write('<head>');
  res.write('<meta charset="UTF-8">');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>SQL je na sebevrazdu</h1>');
  res.write('<a href="/stats">STATISTICS</a>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});
console.log(a);
console.log(`toto je muj vypis`);
console.log(`Hello Node.js v${a}!`);
