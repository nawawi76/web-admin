function validasiSubmit() {
    // Mendapatkan waktu saat ini
    let currentTime = new Date();
    let hours = currentTime.getHours();

    // Validasi waktu submit
    if (hours <= 10) {
        alert("Anda Keren");
    } else if (hours > 10 && hours <= 11) {
        alert("Poin Anda minus 10");
    }
        else {
            alert("Anda tidak mengerjakan tugas");
        }
        // Cek alasan submit
        let alasan = prompt("Mengapa Anda submit setelah pukul 10?");

        if (alasan.toLowerCase() === "lupa") {
            alert("Nilai 0");
        } else {
            alert("Nilai akan dikurangi 30");
        }

    // Menampilkan waktu submit
    document.getElementById("output").innerHTML += "<br>Anda submit tugas pukul " + hours + ":00";
}

