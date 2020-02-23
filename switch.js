var item = prompt('Masukkan makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch (item) {
    case 'nasi': // todo apabila dia sesuai nilainya, maka akan turun kebawwah terus sampai ketemu aksinya. Cara ini lebih efektif dibandingkan diberi break satu per satu
    case 'daging':
    case 'susu':
        alert('Makanan / minuman SEHAT');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('Makanan / minuman TIDAK SEHAT!')
        break;
    default:
        alert('Makanan / minuman yang Anda masukkan tidak terdapat didalam contoh !');
        break;
}