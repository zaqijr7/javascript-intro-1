
function inputValue(params){
const {mtk, bahasaIndonesia, bahasaInggris,  ipa} = params;


        if (mtk == null || typeof(mtk) != 'number') {
            console.log('Nilai Matematika harus number dan tidak boleh kosong');
        } else if (bahasaIndonesia == null || typeof(bahasaIndonesia) != 'number') {
            console.log('Nilai Bahasa Indonesia harus number dan tidak boleh kosong');
        } else if (bahasaInggris == null || typeof(bahasaInggris) != 'number') {
            console.log('Nilai Bahasa Inggris harus number dan tidak boleh kosong');
        }  else if (ipa == null || typeof(ipa) != 'number') {
            console.log('Nilai IPA harus number dan tidak boleh kosong');
        } else {
            const mean = ((mtk + bahasaIndonesia + bahasaInggris + ipa) / 4 );
            checkGrade(mean);
        }


}

function checkGrade(mean) {
        console.log(`Rata-rata = ${mean}`);
        const floorMean = Math.floor(mean);

        if (floorMean >= 90 && floorMean <=100) {
            console.log('Grade = A');
        } else if (floorMean >= 80 && floorMean <= 89) {
            console.log('Grade = B');
        } else if (floorMean >= 70 && floorMean <= 79) {
            console.log('Grade = C');
        } else if (floorMean >= 60 && floorMean <= 69) {
            console.log('Grade = D');
        } else if (floorMean >= 0 && floorMean <= 59) {
            console.log('Grade = E');
        }
}

inputValue({
    mtk: 81,
    bahasaIndonesia: 89,
    bahasaInggris: 75,
    ipa: 73
})
