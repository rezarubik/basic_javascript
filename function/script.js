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
// function tambahPseudo() {
//     var hasil = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }
// var coba = tambahPseudo(1, 2, 3, 4, 5);
// console.log(coba);

// todo refactoring sederhana -> membuat program menjadi efisien
// function jumlahDuaVolumeKubus(a, b) {
//     return a * a * a + b * b * b;
// }
// var nilai1 = parseInt(prompt('Masukkan nilai 1 = '));
// var nilai2 = parseInt(prompt('Masukkan nilai 2 = '));
// console.log(jumlahDuaVolumeKubus(nilai1, nilai2));

// todo variabel scope (lingkup variabel)
// * block scope dan functoin scope (javascript)

// todo Rekursif
// * Base case = kondisi akhir dari rekursif yang menghasilkan nilai.
// * Semua looping bisa dibuat rekursif, tapi tidak sebaliknya.
// * Implementasi Rekursif
// * 1. Menggantikan looping
// * 2. Fibonacci
// * 3. Pencarian dan penelusuran pada struktur data list dan tre
// * 4. Bahasa pemrograman yang tidak memiliki pengulangan seperti Haskel, Erlang, Prolog, dll
// * function cetakAngka(n) {
//     // * Base Case
//     if (n === 0) {
//         return;
//     }
//     // * End Base Case
//     console.log(n);
//     cetakAngka(n - 1);
// }
// cetakAngka(10);
// console.log(cetakAngka(10));
// ? Contoh rekursif pada faktorial
// function faktroial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * faktroial(n - 1);
// }
// console.log(faktroial(5));
// ! End Rekursif

// todo Declaration dan Expression
// ? Contoh function declaration -> bisa panggil dulu baru deklarasi atau sebaliknya
// function tampilPesan(nama) {
//     console.log('Halo ' + nama + '.');
// }
// tampilPesan('Function Declarations');
// ? Contoh function expression -> harus deklarasi dulu baru dipanggil
// var tampilPesan = function (nama) {
//     console.log('Halo ' + nama + '.');
// }
// tampilPesan('Function Expression');
// ! End Declaration dan Expression

// todo Array
// * Mempermudah pengelolaan nilai/value/data -> penelusuran dan pencarian
// * Manajemen memori
var myFunc = function () {
    console.log('Hello World!');
}
// ? Contoh penulisan array
var myArr3 = [];
myArr3 = ['teks', 2, false, myFunc, [4, 5, 6]];
// console.log(myArr3[4][1]); // output 5
console.log(myArr3[3]);
// ! End Array