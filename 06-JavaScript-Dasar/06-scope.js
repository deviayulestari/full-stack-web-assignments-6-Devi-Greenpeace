/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// Ada 2 yaitu Global scope dan Local scope
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// Global scope merupakan scope yang variabelnya dibuat untuk dapat diakses dimanapun dalam suatu program/file. Agar menjadi Global Scope, suatu variabel harus dideklarasikan diluar Blocks.
/// Local scope berarti kita mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping. Maka variabel hanya bisa diakses didalam blocks saja dan tidak bisa diakses diluar blocks.
/// *Blocks adalah code yang berada didalam curly braces {} contoh penggunaan block adalah pada conditional, function, dan  looping.
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
let sentence = "Hello World!"; //ini adalah variable yang berada di global scope
function sayHello(){ 
    let letter = "Devi!";  //ini adalah variable yang berada di local scope
    return "Hello " + letter;
}

console.log(sentence); //variabel pada global scope bisa diakses dimana saja termasuk di console.log
console.log(letter); //akan undifined karena variabel pada local scope tidak bisa diakses diluar scopenya

/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - apa yang akan tampil didalam comsole.log ? 
/// Program ini akan menampilkan first name dari nama yang diinput di console.log dengan function printFirsName dan parameter name.
/// Program ini diinputkan nama Mariah Carey dan akan menampilkan first name-nya yaitu Mariah.
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
/// Pada awal program dideklarasikan name yang berisi John Watson, namun kenapa saat program dijalankan tidak menampilkan John? itu karena 
/// function printFirstName memproses name yang ada pada local scope yaitu name yang menjadi parameter function tersebut, maka nilai name yang
/// dikembalikan pun adalah name yang menjadi parameter. Saat diinputkan Mariah Carey di console.log maka akan mengembalikan nilai Mariah dan 
/// yang akan tampil di console adalah Mariah.
/// Variable name yang berisi John Watson berada pada global scope jika mencoba console.log(name) akan menampilkan John Watson karena dia tetap bisa 
/// dipanggil tetapi tidak menjalankan function karena name pada function hanya bisa dijalankan dengan parameter name pada function
/// pada function printFirstName terdapat parameter name sehingga name pada global scope tersebut tergantikan dengan name yang menjadi parameter pada local scope.

// Analisis terhadap setiap baris code
const name = "John Watson"; //mendeklarasikan variable bernama name bertipe data const dan berisi "John Watson"

function printFirstName(name) { //function dengan nama printFirstName dengan parameter name
  return name.split(" ")[0]; //mengembalikan nilai dari variable name yang displit dengan " " dan mengambil nilai paling awal dari hasil split tersebut.
}

console.log(printFirstName("Mariah Carey")); //akan menampilkan first name dari "Mariah Carey" yaitu "Mariah" dengan memanggil function printFirstName dan parameter "Mariah Carey"
