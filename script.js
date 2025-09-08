document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // biar halaman tidak reload

    const nama = form.querySelector('input[placeholder="Nama"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const pesan = form.querySelector('textarea[placeholder="Pesan"]').value;

    if (nama && email && pesan) {
      alert("Terima kasih, " + nama + "! Pesan kamu sudah terkirim ✅");
      form.reset(); // kosongkan form setelah terkirim
    } else {
      alert("Harap isi semua field sebelum mengirim 🚀");
    }
  });
});
