// Solo en archivos Es Modules se puede usar el Await sin necesidad de funciones async

import { readFile } from 'node:fs/promises'

import pc from 'picocolors'

console.log(pc.cyanBright('Leyendo el primer archivo'))

const text = await readFile('./infoNode.txt', 'utf-8')

console.log(text)

console.log('Haciendo cosas mientras tanto')

console.log('Leyendo el segundo archivo')
const textSecond = await readFile('./infoNode.txt', 'utf-8')

console.log(textSecond)
