const fs = require('fs');
const { formatear } = require('../utils/formatoRut');

let generateDoc = (params) => {
    return new Promise((resolve, reject) => {
        let { RUT: rut, NUMBER: number, EMAIL: mail, RENT: rent } = params;

        let data = `Rut: ${formatear(rut)}\nNumber: ${number}\nEmail: ${mail}\nRent: $${rent}`;

        fs.writeFile(`../renta/renta.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`renta.txt`)
        });
    });
}

module.exports = {
    generateDoc
}