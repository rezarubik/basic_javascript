var tanya = true;
while (tanya) {
    // todo membangkitka bilangan random untuk komputer
    comp = Math.random();
    if (comp <= 0.1) {
        comp = 1;
    } else if (comp > 0.1 && comp <= 0.2) {
        comp = 2;
    } else if (comp > 0.2 && comp <= 3) {
        comp = 3;
    } else if (comp > 0.3 && comp <= 4) {
        comp = 4;
    } else if (comp > 0.4 && comp <= 0.5) {
        comp = 5;
    } else if (comp > 0.5 && comp <= 0.6) {
        comp = 6;
    } else if (comp > 0.6 && comp <= 0.7) {
        comp = 7;
    } else if (comp > 0.7 && comp <= 0.8) {
        comp = 8;
    } else if (comp > 0.8 && comp <= 0.9) {
        comp = 9;
    } else if (comp > 0.9 && comp <= 1) {
        comp = 10;
    }
    // todo kesempatan
    for (var n = 3; n > 0; n--) {
        alert('Kamu memiliki ' + n + ' kesempatan.');
        // todo menangkap pilihan player
        var p = prompt('Masukkan Angka 1-10: ');
        // todo rules
        if (p == comp) {
            alert('Selamat Anda Menang!');
            n = 0;
        } else if (p > comp && p <= 10) {
            alert('Angka yang Anda masukkan terlalu besar');
        } else if (p < comp && p > 0) {
            alert('Angka yang Anda masukkan terlalu kecil');
        }
        if (p > 10) {
            alert('Anda memasukkan angka yang salah');
        } else if (p > 0 && p <= 10) {} else {
            alert('Anda memasukkan angka yang salah');
        }
    }
    if (n == 0) {
        alert('Nyama kamu sudah habis \n Dan jawabannya adalah: ' + comp);
    }
    tanya = confirm('Ingin tebak lagi?');
}
alert('Terima kasih sudah bermain :)');