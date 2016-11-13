if (Hls.isSupported()) {
	console.log("HLS supported!!!");
	var hls = new Hls();
	var video = document.getElementById('hlsembplay');
	var source = video.getAttribute("data-src");
	
	// bind them together
	hls.attachMedia(video);
	
	// MEDIA_ATTACHED event is fired by hls object once MediaSource is ready
	hls.on(Hls.Events.MEDIA_ATTACHED, function () {
		console.log("Video and hls.js are now bound together!");
		hls.loadSource(source);
		
		hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
			console.log("Manifest loaded, found " + data.levels.length + " quality level...");
			console.log("TODO: Everything else.");
		});
	});
}
