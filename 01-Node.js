

console.log(globalThis)
//Es una variable global, y siempre se va poder tener acceso a ella


//De donde sale console? y cualquier variable determinada

globalThis.console.log('Hola Mundo')






//Forma antigua de importar
const {sum} =require('./02-moduleExport')

console.log(sum(2,3))