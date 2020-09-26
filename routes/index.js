var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'HLS Embplayer' });
});

router.get('/hlsembplay', function(req, res, next) {
	var autoplay = false;
	if ( req.query.hasOwnProperty("autoplay") ) {
		autoplay = true;
	}
    res.render('play', { title: 'HLS Embplayer',  pro: req.query.src, auto: autoplay });
});

router.get('/hlsembplay/embed', function(req, res, next) {
	const url = require('url');
	var playSource = url.format({
								    protocol: req.protocol,
								    hostname: req.hostname,
								    port: process.env.PORT,
								    pathname: 'hlsembplay',
								    query: {src: req.query.src}
								});
	var embedHTML = '<iframe src="' + playSource + '"></iframe>';
	res.status(200).json({embed_html: embedHTML});
});

module.exports = router;
