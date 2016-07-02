var compression = require('compression')
var express = require('express')

var port = process.env.PORT
var app = express()
app.use(compression())
app.use(express.static(__dirname + '/static'))
app.listen(port, function () {
  console.log('listening on port ' + port)
})
