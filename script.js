
// LATIHAN 1 - Mengubah teks dengan DOM
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";


// LATIHAN 2 - Event Click
const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});


// LATIHAN 3 - Mengubah kelas dan gaya CSS
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});


// LATIHAN 4 - Event Input dan Penghitung Karakter

const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});


// LATIHAN 5 - Validasi Form Pendaftaran

const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";

    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";

    } else if (
        usiaInput === "" ||
        !Number.isInteger(usia) ||
        usia < 17 ||
        usia > 100
    ) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";

    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset();
    }
});



// LATIHAN 6 - To-do List

const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {

    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");

    // Tombol tandai selesai
    const selesai = document.createElement("button");
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");

        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    // Tombol hapus tugas
    const hapus = document.createElement("button");
    hapus.type = "button";
    hapus.textContent = "Hapus";
    hapus.classList.add("hapusTugas");

    hapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Tugas berhasil dihapus.";
    });

    // Memasukkan elemen ke daftar
    label.textContent = teks + " ";
    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});


// MINI PROJECT - Form Pendaftaran Workshop

// Mengambil elemen HTML
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");

const hitungNama = document.getElementById("hitungNama");
const pilihanSesi = document.getElementById("pilihanSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");

// 1. Penghitung karakter nama
namaWorkshop.addEventListener("input", function () {
    hitungNama.textContent = namaWorkshop.value.length;
});

// 2. Menampilkan sesi yang dipilih
sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value === "") {
        pilihanSesi.textContent = "Sesi yang dipilih: Belum ada";
    } else {
        pilihanSesi.textContent =
            "Sesi yang dipilih: " + sesiWorkshop.value;
    }
});


// Validasi form pendaftaran workshop
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanWorkshop.textContent = "Nama wajib diisi.";
        pesanWorkshop.style.color = "red";

    } else if (nama.length < 3) {
        pesanWorkshop.textContent = "Nama minimal harus 3 karakter.";
        pesanWorkshop.style.color = "red";

    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent = "Email tidak valid.";
        pesanWorkshop.style.color = "red";

    } else if (sesi === "") {
        pesanWorkshop.textContent = "Silakan pilih sesi workshop.";
        pesanWorkshop.style.color = "red";

    } else {
        pesanWorkshop.textContent =
            "Pendaftaran berhasil! Terima kasih, " + nama +
            ". Anda terdaftar pada " + sesi + ".";

        pesanWorkshop.style.color = "green";
    }
});


// 4. Tombol reset form
formWorkshop.addEventListener("reset", function () {
    hitungNama.textContent = "0";

    pilihanSesi.textContent =
        "Sesi yang dipilih: Belum ada";

    pesanWorkshop.textContent = "";
});


// EKSPERIMEN MANDIRI 4
// Menyembunyikan dan menampilkan paragraf

const teksToggle = document.getElementById("teksToggle");
const tombolToggle = document.getElementById("tombolToggle");

tombolToggle.addEventListener("click", function () {

    teksToggle.classList.toggle("sembunyi");

    if (teksToggle.classList.contains("sembunyi")) {
        tombolToggle.textContent = "Tampilkan Paragraf";
    } else {
        tombolToggle.textContent = "Sembunyikan Paragraf";
    }

});





