var s = '';
for (var i = 0; i < 5; i++) { // todo ini i untuk membuat barisnya
    for (var j = 0; j <= i; j++) { // todo ini j untuk mencetak bintangnya
        s += '*';
    }
    s += '\n';
}
console.log(s);
// todo Hasil
// *
// **
// ***
// ****
// *****

// ? Tipe kedua
var s2 = '';
for (var k = 5; k > 0; k--) { // todo ini i untuk membuat barisnya
    for (var l = 0; l < k; l++) { // todo ini j untuk mencetak bintangnya
        s2 += '*';
    }
    s2 += '\n';
}
console.log(s2);
// todo Hasil
// *****
// ****
// ***
// **
// *