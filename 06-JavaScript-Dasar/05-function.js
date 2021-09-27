/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
    if(salary < 5000000){
        return 0;
    }else if(5000000 <= salary && salary < 10000000){
        return ((5 / 100) * salary);
    }else if(10000000 <= salary && salary < 20000000){
        return ((1 / 100)* salary);
    }else if(20000000 <= salary){
        return ((2 / 100) * salary);
    }
}

console.log(taxCalc(4500000));
console.log(taxCalc(5000000));
console.log(taxCalc(20000000));


/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height, weight) {
    let BMI = weight/(height * height) * 10000;

    if(BMI < 18.5){
        return "under weight";
    }else if(18.5 < BMI && BMI < 24.9){
        return "normal";
    }else if(25 < BMI && BMI < 29.9){
        return "over weight";
    }else if(30 < BMI && BMI < 34.9){
        return "obese";
    }else if(35 < BMI){
        return "extremely obese";
    } else {
        return "Masukkan tinggi dan berat badan yang tepat"
    }
}

console.log(checkBMI(170, 80));
console.log(checkBMI(160, 80));


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) {
    var splitSentence = sentence.toLowerCase().split(' ');
    for (var i = 0; i < splitSentence.length; i++) {
        splitSentence[i] = splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1);     
    }
    return splitSentence.join(' '); 
}

console.log(convToUpperCase("halo bandung"));
console.log(convToUpperCase("helloworldwide"));


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
    let object = {};
    if(word.includes(" ")){
        return "kata tidak boleh dipisah";
    } 
    else {
        for(let i = 0; i<word.length; i++){
            let char = word[i];
            if(object[char]){
                object[char]++;
            }
            else{
                object[char] = 1;
            }
        }
        for(let i = 0; i<word.length; i++){
            let char = word[i];
            if(object[char]==1){
                return word[i];
            }
        }
        return "";
    }
}

console.log(firstNonRepeatedChar("hello world"));
console.log(firstNonRepeatedChar("alloha"));
console.log(firstNonRepeatedChar("wooohoowh"));