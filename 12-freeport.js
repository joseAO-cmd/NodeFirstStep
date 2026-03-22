const net = require('node:net')

// Para que elija un puerto automaticamente si el que queremos esta ocupado

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') { // error cuando un puerto ya se esta usando
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
