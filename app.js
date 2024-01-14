
//  1 uy ishi - - - - -- - 

let berilganSon = prompt("Butun son kiriting:");
berilganSon = Number(berilganSon);

if (isNaN(berilganSon)) {
    alert("Siz son kiritmadingiz yoki noto'g'ri kiritdingiz. Iltimos, butun son kiriting.");
} else {
    if (berilganSon > 0) {
        berilganSon = berilganSon + 1;
        alert("Musbat son: " + berilganSon);
    } else {
        berilganSon = -berilganSon;
        alert("Manfiy son: " + berilganSon);
    }
}

// 2 - uy ishi --   -- - - 

let birinchiSon= prompt("Birinchi butun sonni kiriting:");
let ikkinchiSon = prompt("Ikkinchi butun sonni kiriting:");

birinchiSon = Number(birinchiSon);
ikkinchiSon = Number(ikkinchiSon); 

if (isNaN(birinchiSon) || isNaN(ikkinchiSon)) {
    alert("Siz son kiritmadingiz yoki noto'g'ri kiritdingiz. Iltimos, butun sonlarni qaytadan kiriting.");
} else {
    let kattaSon;
    if (birinchiSon > ikkinchiSon) {
        kattaSon = birinchiSon;
    } else if (ikkinchiSon > birinchiSon) {
        kattaSon = ikkinchiSon;
    } else {
        alert("Sonlar o'zaro teng: " + birinchiSon);
 
    }

    if (kattaSon !== undefined) {
        alert("Katta son: " + kattaSon);
    }
}

// 3 - uy ishi

// let birinchiSon = prompt("Birinchi butun sonni kiriting:");
// let ikkinchiSon = prompt("Ikkinchi butun sonni kiriting:");
// let uchinchiSon = prompt("Uchinchi butun sonni kiriting:");

// birinchiSon = Number(birinchiSon); 
// ikkinchiSon = Number(ikkinchiSon); 
// uchinchiSon = Number(uchinchiSon); 

// if (isNaN(birinchiSon) || isNaN(ikkinchiSon) || isNaN(uchinchiSon)) {
//     alert("Siz son kiritmadingiz yoki noto'g'ri kiritdingiz. Iltimos, butun sonlarni qaytadan kiriting.");
// } else {
//     let kichikSon = Math.min(birinchiSon, ikkinchiSon, uchinchiSon);
//     alert("Eng kichik son: " + kichikSon);
// }


// 4 - uy ishi

let kiritilganOy = prompt("Iltimos, bir oy raqamini kiriting (0 dan 11 gacha):");
kiritilganOy = Number(kiritilganOy);

if (isNaN(kiritilganOy) || kiritilganOy < 0 || kiritilganOy > 11) {
    alert("Noto'g'ri qiymat kiritildi. Iltimos, to'g'ri raqam kiriting.");
} else {
    let kublarSoni = kiritilganOy ** 3;
    alert(kiritilganOy + " oyda " + kublarSoni + " ta kub bor.");
}

