function validasiSubmit() {
    // Mendapatkan waktu saat ini
    var currentTime = new Date();
    var hours = currentTime.getHours();

    // Validasi waktu submit
    if (hours <= 10) {
        document.getElementById("output").innerHTML = "Anda Keren";
    } else if (hours > 10 && hours <= 11) {
        document.getElementById("output").innerHTML = "Poin Anda minus 10";
        
        // Cek alasan submit
        var alasan = prompt("Mengapa Anda submit setelah pukul 10?");

        if (alasan.toLowerCase() === "lupa") {
            document.getElementById("output").innerHTML += "<br>Nilai 0";
        } else {
            document.getElementById("output").innerHTML += "<br>Nilai akan dikurangi 30";
        }
    } else {
        document.getElementById("output").innerHTML = "Anda tidak mengerjakan tugas";
    }

    // Menampilkan waktu submit
    document.getElementById("output").innerHTML += "<br>Anda submit tugas pukul " + hours + ":00";
}

