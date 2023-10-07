// if, else, nested if
let grade = 80;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 70) {
    if (grade >= 80) {
        console.log("B+");
    } else {
        console.log("B");
    }
} else {
    console.log("C");
}

// switch case
let merekRaket = "Yonex Astrox 88s";
switch (merekRaket) {
    case "Yonex Astrox 88s":
        console.log("Ini adalah Yonex Astrox 88s");
        break;
    case "Li Ning Ignite 7":
        console.log("Ini adalah Li Ning Ignite 7");
        break;
    case "Victor Brave Sword 12":
        console.log("Ini adalah Victor Brave Sword 12");
        break;
    default:
        console.log("Merek raket lainnya");
}

// for statement
for (let angka = 10; angka > 0; angka--) {
    console.log("Hitung mundur:", angka);
}

// while, do while
let nilai = 1;
// while loop
while (nilai < 5) {
    console.log("Nilai saat ini:", nilai);
    nilai++;
}

nilai = 1;
// do while loop
do {
    console.log("Percobaan ke-", nilai);
    nilai++;
} while (nilai < 5);

// function
function luasLingkaran(radius) {
    return 3.14 * radius * radius;
}

let r = 4;
let area = luasLingkaran(r);
console.log("Luas lingkaran dengan radius", r, "adalah:", area);