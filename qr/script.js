const qrInput = document.getElementById("qrInput");
const imageBox = document.getElementById("imageBox");
const qrImage = document.getElementById("qrImage");

function generateQr() {
    qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrInput.value;
}
