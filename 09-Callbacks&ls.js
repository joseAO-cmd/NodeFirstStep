const fs = require('node:fs')

fs.readdir('.', (err, files) => { // ->CallBacks
  if (err) {
    console.log('Error al encontrar el directorio: ', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})
