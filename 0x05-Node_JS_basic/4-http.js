const http = require('http')

const app = http.createServer(function (req, res) {
  res.write('Hello Holberton School!');
  res.end();
})
app.listen(1245);
