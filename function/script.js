function jumlahDuaVolumeKubus(a, b) {
    var volumeA, volumeB, total;
    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;
    return total;
}
console.log(jumlahDuaVolumeKubus(8, 3));
console.log(jumlahDuaVolumeKubus(12, 15));