function generateCertificate() {

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let date = document.getElementById("date").value;

    // Auto Serial Number
    let serial = "ASC-" + Date.now();

    // Make Verification Link
    let link = "https://skillsboy474.github.io/apexskillscolleg/verify.html"
        + "?n=" + encodeURIComponent(name)
        + "&c=" + encodeURIComponent(course)
        + "&d=" + encodeURIComponent(date)
        + "&s=" + serial;

    // Show Link
    document.getElementById("result").innerHTML =
        "<b>Verification Link:</b><br>" + link;

    // Generate QR
    let qr = new QRious({
        element: document.getElementById("qr"),
        size: 200,
        value: link
    });
}
