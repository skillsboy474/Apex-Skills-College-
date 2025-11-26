const VERIFY_BASE = 'https://skillsboy474.github.io/Apex-Skills-College-/verify.html';

function generateCertificate() {

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let date = document.getElementById("date").value;

    let serial = "ASC-" + Date.now();

    let link = VERIFY_BASE
        + "?n=" + encodeURIComponent(name)
        + "&c=" + encodeURIComponent(course)
        + "&d=" + encodeURIComponent(date)
        + "&s=" + serial;

    document.getElementById("result").innerHTML =
        "<b>Verification Link:</b><br>" + link;

    let qr = new QRious({
        element: document.getElementById("qr"),
        size: 200,
        value: link
    });
}
