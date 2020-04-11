const http = require('http')
const server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
  res.end('<h1>I think it is better to use the Express, or not?</h1>')
})

const port = 3456
server.listen(port, function() {
  console.log(`Listening to port ${port}`)
})