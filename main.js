function checkCats(tuti, nining) {
    // Salin array catsTuti dan hapus usia kucing pertama dan dua kucing terakhir
    const correctedTuti = [...tuti];
    correctedTuti.shift();
    correctedTuti.pop();
    correctedTuti.pop();

    // Menggabungkan data Tuti yang sudah dikoreksi dengan data Nining
    const combinedData = correctedTuti.concat(nining);

    // Loop combinedData dan cek apakah kucing dewasa atau kitten
    for (let i = 0; i < combinedData.length; i++) {
        const age = combinedData[i];
        const ownerNumber = i + 1;
        if (age >= 3) {
            console.log(`Kucing Nomor ${ownerNumber} adalah Kucing Dewasa, dan berusia ${age} tahun`);
        } else {
            console.log(`Kucing Nomor ${ownerNumber} masih anak-anak`);
        }
    }
};

// Data uji 1
const Tuti1 = [3, 5, 2, 12, 7];
const Nining1 = [4, 1, 15, 8, 3];

// test
console.log("Data Uji 1:");
checkCats(Tuti1, Nining1);

// Data uji 2
const Tuti2 = [9, 16, 6, 8, 3];
const Nining2 = [10, 5, 6, 1, 4];

// test 
console.log("\nData Uji 2:");
checkCats(Tuti2, Nining2);