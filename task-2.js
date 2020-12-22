
function inputValue(params){
const {mtk, bahasaIndonesia, bahasaInggris,  ipa} = params;


        if (mtk == null || typeof(mtk) != 'number') {
            console.log('Nilai matematika harus number dan tidak boleh kosong');
        } else if (bahasaIndonesia == null || typeof(bahasaIndonesia) != 'number') {
            console.log('Nilai bahasa indonesia harus number dan tidak boleh kosong');
        } else if (bahasaInggris == null || typeof(bahasaInggris) != 'number') {
            console.log('Nilai bahasa inggris harus number dan tidak boleh kosong');
        }  else if (ipa == null || typeof(ipa) != 'number') {
            console.log('Nilai bahasa ipa harus number dan tidak boleh kosong');
        } else {
            const mean = ((mtk + bahasaIndonesia + bahasaInggris + ipa) / 4 );
            console.log(`Rata-rata = ${mean}`);
            checkGrade(mean);
        }


}

function checkGrade(mean) {
        if (mean >= 90 && mean <=100) {
            console.log('Grade = A');
        } else if (mean >= 80 && mean <= 89) {
            console.log('Grade = B');
        } else if (mean >= 70 && mean <= 79) {
            console.log('Grade = C');
        } else if (mean >= 60 && mean <= 69) {
            console.log('Grade = D');
        } else if (mean >= 0 && mean <= 59) {
            console.log('Grade = E');
        }
}

inputValue({
    mtk: 80,
    bahasaIndonesia: 98,
    bahasaInggris: 94,
    ipa: 61
})
