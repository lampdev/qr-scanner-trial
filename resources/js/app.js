require('./bootstrap');

// get the link element
const captureVideoLink = document.getElementById('capture-video');
// add an event listener for click on the link
captureVideoLink.onclick = function () {
    // set the worker path for qr scanner
    QrScanner.WORKER_PATH = QrScannerWorkerPath;
    // get element to stream video from web camera
    const videoElement = document.getElementById('video-stream');
    // create qr scanner instance
    const qrScanner = new QrScanner(videoElement, result => alert(`decoded qr code: ${result}`));
    // start scanning from the main web-camera
    qrScanner.start();
};

