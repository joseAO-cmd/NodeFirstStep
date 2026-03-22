const path = require('node:path')

// Forma en que se separa las carpetas
console.log(path.sep)

// Para crear rutas sin preocuparse por el sistema operativo
const filePath = path.join('content', 'subfolder', 'test.text')

console.log(filePath)
