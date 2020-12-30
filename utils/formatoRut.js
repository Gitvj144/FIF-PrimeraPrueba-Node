let formatear = (rut) => {

    let texto = rut.trim().replace(/[. -]/g, '').toUpperCase();
    let cuerpo = texto.slice(0, -1);
    let verificador = texto.substr(-1);

    return `${cuerpo}-${verificador}`;
}

module.exports = {
    formatear
}