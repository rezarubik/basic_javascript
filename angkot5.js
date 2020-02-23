var jumlahAngkot = 10,
    angkotBeroperasi = 6,
    angkotTidakBeroperasi = 7,
    angkotLembur = 8,
    noAngkot = 1;
for (noAngkot; noAngkot <= 10; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    } else if (noAngkot === angkotTidakBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak dapat beroperasi.');
    } else if (noAngkot === angkotLembur || noAngkot === angkotLembur + 2) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak dapat beroperasi');
    }
}
// todo 1-6 beroperasi dengan baik
// todo 7 sedang tidak dapat beroperasi
// todo 8 lembur
// todo 9 sedang tidak dapat beroperasi
// todo 10 sedang lembur