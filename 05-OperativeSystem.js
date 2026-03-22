//  Forma de importar librerias de node
const os = require('node:os')

console.log('Nombre del sistema operativo', os.platform())
console.log('cpu', os.cpus())

console.log('uptime ', os.uptime() / 60 / 60)
