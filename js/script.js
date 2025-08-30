// input nama
const submitNama = document.getElementById("submitNama");
if (submitNama) {
  submitNama.addEventListener("click", function () {
    const nama = document.getElementById("inputNama").value.trim();
    if (nama) {
      document.getElementById("welcomeText").textContent = `Hi ${nama}, Welcome To Website`;
      document.getElementById("nameModal").style.display = "none";
    } else {
      alert("Nama tidak boleh kosong!");
    }
  });
}

// message us
const form = document.getElementById("messageForm");
if (form) {
  const output = document.getElementById("output");
  const currentTime = document.getElementById("currentTime");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const tglLahir = document.getElementById("tglLahir").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const pesan = document.getElementById("pesan").value.trim();

    const now = new Date();
    const waktuSubmit = now.toLocaleString("id-ID", {
      dateStyle: "full",
      timeStyle: "short",
    });

    output.innerHTML = `
      <p><strong>Nama:</strong> ${nama || "-"} </p>
      <p><strong>Tanggal Lahir:</strong> ${tglLahir || "-"} </p>
      <p><strong>Jenis Kelamin:</strong> ${gender} </p>
      <p><strong>Pesan:</strong> ${pesan || "-"} </p>
    `;

    currentTime.textContent = `Dikirim pada: ${waktuSubmit}`;
  });
}

// hamburger menu
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

if (hamburger && mobileNav) {
  let menuOpen = false;

  hamburger.addEventListener("click", () => {
    menuOpen = !menuOpen;
    mobileNav.classList.toggle("hidden");
    mobileNav.classList.toggle("flex"); // biar muncul flex di mobile
    hamburger.innerHTML = menuOpen
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });
}
