const uploadButton = document.getElementById('upload');
const imageInput = document.getElementById('image');
const imagePreviewElement = document.getElementById('image-preview');




function FileUpload(img, file) {
	var reader = new FileReader();  
	var xhr = new XMLHttpRequest();
	this.xhr = xhr;

	var self = this;
	this.xhr.upload.addEventListener("progress", function(e) {
		if (e.lengthComputable) {
			var percentage = Math.round((e.loaded * 100) / e.total);
			console.log(percentage);
		}
	}, false);

	xhr.upload.addEventListener("load", function(e) {
		console.log("load", e);
	}, false);

	xhr.open("POST", "https://api.cloudinary.com/v1_1/ireaderinokun/image/upload");
	
	// xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');

	reader.onload = function(evt) {


		var formData = new FormData();
		formData.append('file', evt.target.result)


		formData.append('api_key', '519173518131728');
	    formData.append('timestamp', Date.now() / 1000);
	    formData.append('upload_preset', 'bluebeanieme');

		xhr.send(formData);
	};
	reader.readAsBinaryString(file);
}




imageInput.addEventListener('change', function(e) {

	console.log( this.files[0] );

	FileUpload(imagePreviewElement, this.files[0])


})