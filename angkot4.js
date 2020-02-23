var jumlahAngkot = 10,
    angkotBeroperasi = 7,
    angkotLembur = 9,
    noAngkot = 1;
for (noAngkot; noAngkot <= 10; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    } else if (noAngkot === angkotLembur) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi dengan baik');
    }
}