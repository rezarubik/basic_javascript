// todo basic function
// function jumlahDuaVolumeKubus(a, b) {
//     var volumeA, volumeB, total;
//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     total = volumeA + volumeB;
//     return total;
// }
// console.log(jumlahDuaVolumeKubus(8, 3));
// console.log(jumlahDuaVolumeKubus(12, 15));

// todo menggunakan inputan user
// function tambah(a, b) {
//     return a + b;
// }

// var a = parseInt(prompt('Masukkan nilai 1: '));
// var b = parseInt(prompt('Masukkan nilai 2: '));
// var hasil = tambah(a, b);
// console.log('Parameter dan argumen biasa \n Nilai 1 = ' + a + ', nilai 2 = ' + b + '. Nilai 1 + Nilai 2 = ' + hasil);

// todo memanggil function pada argumen
// function kali(p, q) {
//     return p * q;
// }
// var nilai1 = parseInt(prompt('Masukkan Nilai 1: '));
// var nilai2 = parseInt(prompt('Masukkan Nilai 2: '))
// var hasilKali = kali(tambah(nilai1, nilai2), tambah(nilai1, nilai2));
// console.log('Memanggil Fungsi didalam argumen \n Nilai 1 = ' + nilai1 + ' Nilai 2 = ' + nilai2 +
//     ' Hasil = ' + hasilKali);

// todo pseudo variable (variable sementara) pada javascript
function tambahPseudo() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}
var coba = tambahPseudo(1, 2, 3, 4, 5);
console.log(coba);