const chooseButton = document.getElementById('choose');
const imageInput = document.getElementById('image');


cloudinary.setCloudName('ireaderinokun');


function handleError(error) {
	console.log(error);
}

function handleSuccess(result) {

	chooseButton.setAttribute('disabled', 'disabled');

	const onSuccessElement = document.getElementById('onSuccess');
	const imagePreview = document.getElementById('image-preview');
	const proceedButton = document.getElementById('proceed-btn');

	onSuccessElement.style.display = 'block';
	imagePreview.src = result.secure_url;
	proceedButton.href = `create.html?img=${result.secure_url}`
}


chooseButton.addEventListener('click', function(e) {

	e.preventDefault();

	const options = { upload_preset: 'bluebeanieme' };

	cloudinary.openUploadWidget(options, function(error, result) {
		if (error) return handleError(error);
		handleSuccess(result[0])
	});


})