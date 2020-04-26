    const fs = require('fs');
    const colors = require('colors');

    let listarTabla = (base, limite = 10) => {

        console.log('==================='.green);
        console.log(`Tabla de ${base}`.green);
        console.log('==================='.green);

        for (i = 1; i <= limite; i++) {
            console.log(`${i} * ${base} = ${i * base}`);
        }

    }


    let crearArchivo = (base, limite = 10) => {

        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject(`El valor introducido para la base .. ${base} no es un numero`);
                return;
            }
            if (!Number(limite)) {
                reject(`El valor introducido para el límite .. ${limite} no es un numero`);
                return;
            }

            let data = '';

            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}-hasta${limite}.txt`, data, (err) => {
                if (err) reject(err)
                else resolve(`tabla-${base}-hasta${limite}.txt`);
            });
        });
    }

    module.exports = {
        crearArchivo,
        listarTabla
    }