// 1. Crear una aplicación que devuelva la fecha actual sumando 10 días y en el siguiente formato
// “dddd”

const moment = require('moment')
console.log(moment().add(10, 'days').format('dddd'))

// ● Paso 1: Importar en una constante el paquete Yargs.

// SEGUNDA PARTE

// ● Paso 2: Inicializar el método “command” para el paso de parámetros.
// ● Paso 3: Definir del comando con el primer parámetro el cual será “saludo”.
// ● Paso 4: Definir la descripción del comando “saludo” como segundo parámetro del método
// “command”.
// ● Paso 5: Definir el objeto para la configuración del constructor del comando.
// ● Paso 6: Declarar que se esperará recibir un argumento llamado “nombre”.
// ● Paso 7: Definir la descripción de este argumento.
// ● Paso 8: Declarar que este argumento es requerido con un true en la propiedad “demand”.

// ● Paso 9: Declarar el alias del argumento nombre, el cual será “n”. Esto sirve para simplificar la
// delación de un argumento recortando su mención a solo 1 letra o siglas.
// ● Paso 10: Crear la función callback la cual recibe como parámetro el objeto args que contendrá
// los argumentos como propiedades. A su vez la función mandará un mensaje por consola
// saludando con el nombre recibido como argumento.

// Concatenar el método command con el método “help” y la propiedad argv

//definir interface
const yargs = require('yargs')

yargs
  .command({
    command: 'saludo',
    describe: 'Saludo',
    builder: {
      nombre: {
        describe: 'Nombre',
        demandOption: true,
        alias: 'n'
      }
    },
    handler: (argv) => {
      console.log(`¡Saludos cordiales ${argv.nombre}, espero que tengas un excelente día!`)
    }
  })
  .help().argv
