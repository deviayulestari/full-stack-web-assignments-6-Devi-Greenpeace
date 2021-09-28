/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// Perbedaannya adalah:
/// - Type Error
/// Type Error merupakan kesalahan ketika suatu operasi tidak dapat dilakukan, biasanya ketika suatu nilai bukan dari tipe yang diharapkan.
/// contohnya ketika suatu argumen yang diteruskan ke suatu fungsi tidak sesuai dengan tipe yang diharapkan oleh fungsi tersebut; atau
/// ketika mencoba mengubah nilai yang tidak dapat diubah; atau ketika mencoba menggunakan nilai dengan cara yang inappropriate.
/// - Reference Error
/// Reference Error merupakan kesalahan ketika mencoba gunakan variabel yang belum dideklarasikan. 
/// contohnya ketika menggunakan const dan let, mereka dipindahkan scopenya dari global ke local ketika mencoba mengaksesnya terjadi kesalahan referensi.
/// - Range Error
/// Range Error merupakan kesalahan ketika mencoba mengassign angka yang tidak dalam range yang ditentukan/diprogramkan. 
/// contohnya saat mendeklarasikan objek dengan panjang tertentu dan saat memberikan panjang yang tidak sesuai dengan panjang yang dideklarasikan.
/// - Syntax Error
/// Syntax Error merupakan kesalahan ketika kesalahan saat mencoba menafsirkan kode yang tidak valid secara sintaks.
/// terjadi ketika mesin JavaScript menemukan token atau urutan token yang tidak sesuai dengan sintaks bahasa saat mengurai kode.


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// error, salaryWithVar undifined dan salaryWithConst tidak bisa diakses sebelum inisialisasi
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// termasuk ke reference error karena permasalahan ada pada referensi pengaksesan variabel
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi
/// karena variabel dideklarasi dibawah sesudah console.log maka program akan mengeksekusi console.log duluan 
/// maka variabel yang di deklarasikan tersebut perlu di hoisting atau diangkat/dipindahkan ke paling atas scope sebelum console.log agar tidak terjadi error.

// Analisis terhadap setiap baris code
console.log(salaryWithVar) //menampilkan variabel salaryWithVar
console.log(salaryWithConst) //menampilkan variabel salaryWithConst

var salaryWithVar = 15000000; //mendeklarasikan variabel salaryWithVar dengan tipe var 
const salaryWithConst = 15000000; //mendeklarasikan variabel salaryWithConst dengan tipe const 
