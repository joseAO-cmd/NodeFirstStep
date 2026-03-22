const http = require('node:http')

const { findAvailablePort } = require('./12-freeport.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`)
  //    Forma de ver el puerto en el que se esta corriendo el backend
  })
})

//  En el Navegador no se miran las respuestas del backend ya que no llegan hasta ahi
