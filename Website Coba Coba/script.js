document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(Terima kasih, ${name}. Pesan Anda telah dikirim!);
        this.reset();
    } else {
        alert("Harap isi semua bidang.");
    }
});