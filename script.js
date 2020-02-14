var angka = prompt('masukkan sebuah angka');
if (angka % 2 === 0) {
    alert('Angka ' + angka + ' merupakan bilangan genap');
} else {
    alert('Angka ' + angka + ' merupakan bilangan ganjil');
}
// ? alert untuk menampilkan pop up biasa
// ? prompt untuk menampilkan pop up inputan
// ? confirm untuk menampilkan pop up konfirmasi
// alert('Selamat datang');
// var cobaLagi = true;

// while (cobaLagi) {
//     var nama = prompt('masukkan nama');
//     alert('Halo ' + nama + ', selamat datang!');
//     // todo mengecek apakah variabel cobaLagi ingin diklik ok atau tidak.
//     cobaLagi = confirm('ingin coba lagi?');
//     // * jika masih coba lagi, maka akan terus dilakukan perulangan
// }
// if (cobaLagi === false) {
//     alert('user menekan tombol CANCEL');
//     alert('terima kasih..');
// }