// Datos de los archivos del sistema
import fs from 'node:fs'

const stats = fs.statSync('./infoNode.txt')

console.log(

  stats.isFile(),
  stats.size()
)
