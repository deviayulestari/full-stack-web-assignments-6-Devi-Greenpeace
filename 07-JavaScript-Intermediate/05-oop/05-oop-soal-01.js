// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// Akan menampilkan f1 bertipe data object yang berisi "fun1": function fun1 dan "fun2": function fun2 
// dan f2 bertipe data object namun objectnya kosong.

// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// Berbeda, fun1 object nya ada isinya sedangkan fun2 object kosong.

// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
// Kode menampilkan hasil yang berbeda karena pada penulisan f1 menggunakan function() sedangkan f2 menggunakan 
// arrow function sehingga this pada f1 akan menunjuk pada objek instannya yaitu obj saat kode dibaca pada scopenya dan 
// pada f2 this tidak menunjuk ke kode apa pun karena arrow function tidak memiliki this yang merujuk ke dirinya maupun ke objek instannya.

const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();
  