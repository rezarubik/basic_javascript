var tanya = true;
while (tanya) {
    // todo menangkap pilihan player
    var player = prompt('Pilih salah satu: gajah, semut, orang');
    // todo menangkap pilihan computer
    // todo membangkitkan bilangan random
    var computer = Math.random();
    if (computer < 0.34) {
        computer = "gajah";
    } else if (computer >= 0.34 && computer <= 0.67) {
        computer = "orang";
    } else {
        computer = "semut";
    }
    // todo menentukan rules
    var hasil = '';
    if (player == computer) {
        hasil = 'SERI!';
    } else if (player == 'gajah') {
        // if (computer == 'orang') {
        //     hasil = 'MENANG!';
        // } else if (computer == 'semut') {
        //     hasil = 'KALAH!';
        // }
        // * bisa juga dengan menggunakan ternary seperti berikut
        hasil = (computer == 'orang') ? 'MENANG!' : 'KALAH!'; // * kalau computer milih orang, maka menang, jika milih semut maka kalah playernya
    } else if (player == 'orang') {
        // if (computer == 'gajah') {
        //     hasil = 'KALAH!';
        // } else if (computer == 'semut') {
        //     hasil = 'MENANG!';
        // }
        hasil = (computer == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'memasukkan pilihan yang salah';
    }
    // todo menampilkan hasil
    alert('Kamu memilih: ' + player + ' dan komputer memilih: ' + computer + '\nMaka hasilnya: Kamu ' + hasil);
    tanya = confirm('Apakah Kamu ingin bermain lagi?');
}
alert('Terima kasih sudah bermain :)');