const express = require('express');
const router = express.Router();
const cargar = require('../controllers/cargar');


router.get('/', function (req, res){
    res.render('index.html', { title: 'First Website'});
});

router.get('/contact', function (req, res){
    res.render('contact.html', {title: 'Contact Page'});
});

router.get('/help', function (req, res){
    res.render('help.html', {title: 'Help Page'});
});

router.get('/about', function (req, res){
    res.render('about.html', {title: 'About Us'});
});

router.get('/code', function (req, res){
    res.render('code.html', {title: 'Código'});
});

router.post('/cargaImagen',cargar.cargarData);

router.get('/imagen', function (req, res){
    res.render('imagen.html', {title: 'Imagen'});
});




module.exports = router;