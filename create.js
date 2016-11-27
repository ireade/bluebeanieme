const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const beanie = document.getElementById('beanie');

const image = document.getElementById('image');
image.src = window.location.href.split('?img=')[1];




let coordinates = {
	left: {},
	right: {}
}

let imageDimentions = {};







function drawImage() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	const newWidth = 300;
	const newHeight = (image.height * newWidth) / image.width;

	imageDimentions.width = 300;
	imageDimentions.height = newHeight;

	canvas.width = newWidth;
	canvas.height = newHeight;

	ctx.drawImage(image, 0, 0, newWidth, newHeight);

}

setTimeout(function() {
	drawImage();
}, 1000)



function drawBeanie() {

	drawImage();

	const imageWidth = coordinates.right.x - coordinates.left.x + 20;
	ctx.drawImage(beanie, coordinates.left.x, coordinates.left.y - imageWidth, imageWidth, imageWidth);



	ctx.lineWidth = "15";
	ctx.strokeStyle = "#29a2ef";
	ctx.rect(0, 0, imageDimentions.width, imageDimentions.height);
	ctx.stroke();

}


function addRect(coords) {
	ctx.lineWidth = "2";
	ctx.strokeStyle = "red";
	ctx.rect(coords.x - 10, coords.y - 10, 20, 20);
	ctx.stroke();
}






let times = 0;
canvas.addEventListener('click', function(e) {

	times++;

	if (times === 3) times = 1;

	const coords = {
		x: e.offsetX,
		y: e.offsetY
	}

	addRect(coords);

	switch (times) {
		case 1:
			coordinates.left = coords;
			break;
		case 2:
			coordinates.right = coords;
			drawBeanie();
			break;
		default:
			break;
	}

})



///

function moveBeanie(e) {

	const direction = e.target.dataset.direction;

	switch(direction) {
		case 'left':
			coordinates.left.x --
			coordinates.right.x --
			break;
		case 'right':
			coordinates.left.x ++
			coordinates.right.x ++
			break;
		case 'down':
			coordinates.left.y ++
			coordinates.right.y ++
			break;
		case 'up':
			coordinates.left.y --
			coordinates.right.y --
			break;
		default:
			break;
	}

	drawBeanie();

}


const moveBeanieButtons = Array.from( document.querySelectorAll('.btn-move-beanie') );
moveBeanieButtons.forEach(moveBeanieButton => {
	moveBeanieButton.addEventListener('click', moveBeanie)
})




function exportImage() {
	const canvas = document.getElementById('canvas');
	var exportedImage = canvas.toDataURL();
	window.open(exportedImage);
}
document.getElementById('export').addEventListener('click', exportImage);


function resetCanvas() {
	times = 0;
	drawImage()
}
document.getElementById('reset').addEventListener('click', resetCanvas);




