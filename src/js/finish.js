console.log(  )

const finalImage = sessionStorage.getItem('bluebeanieme');
const downloadButton = document.getElementById('download');

document.querySelector('.result img').src = finalImage
downloadButton.href = finalImage;