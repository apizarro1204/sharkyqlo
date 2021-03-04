const codigo1 = { 'Codigo': '3010', 'Estado': 'Ok', 'url': '/img/cupon1.png' };
const codigo2 = { 'Codigo': '3020 ', 'Estado': 'Ok', 'url': '/img/cupon2.png' };
const codigo3 = { 'Codigo': '3030', 'Estado': 'Ok', 'url': '/img/cupon3.png' };

function cargarData(req, res) {
    var codigo = req.body.codigo;
    var result = PasarPorTalca(codigo);
    res.render('imagen.html', { title: 'La Media Imagen', ruta : result });
}

function PasarPorTalca(cupon) {
    switch (cupon) {
        case '3010':
            return codigo1.url;
            break;
        case '3020':
            return codigo2.url;
            break;
        case '3030':
            return codigo3.url;
            break;
        default:
            return 'Codigo ingresado no existe';

    }

}

module.exports = { cargarData };