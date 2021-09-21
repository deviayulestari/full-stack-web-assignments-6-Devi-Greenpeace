## 04-more-advanced
1. What is the difference between git reset and git revert. When would you use one over the other?  
Git reset akan membatalkan perubahan dimana kondisi file sudah stagged namun belum commited, commit terakhir/terbaru akan hilang/terhapus. Sedangkan Git revert akan membatalkan semua perubahan yang ada tanpa menghapus commit terakhir sehingga Git Revert lebih aman digunakan daripada Git Reset.
Git Reset dapat digunakan saat ingin melakukan perubahan ke suatu file yang sudah ada di stagged dan ingin menghapus commit yang ada disetelahnya. Sedangkan Git Revert dapat digunakan saat ingin melakukan perubahan ke suatu file tanpa menghapus commit yang ada setelahnya.


  
2. What is the difference between git merge and git rebase. When would you use one over the other?  
Git merge berfungsi untuk meleburkan dua state dari dua branch. Dalam git merge, branch sumber akan dibuatkan sebuah commit baru khusus untuk menyatakan bahwa telah terjadi merging dengan branch lain. Sedangkan Git rebase berfungsi untuk memindahkan seluruh sejarah commit dari sebuah branch untuk digabung ke ujung (HEAD) branch lain. Perbedaannya adalah Git merge akan tetap ada history dari setiap cabangnya sedangkan git rebase history akan disatukan dengan commit baru dan menghilangkan commit dari cabang sehingga commit tidak dapat dijangkau lagi. Penggunaannya jika melakukan Project dengan beberapa orang dapat menggunakan git merge agar history setiap commit lebih bisa dipahami sesama anggota team. Jika melakukan project sendiri dapat menggunakan git rebase agar historynya lebih jelas.     

  
3. What is the difference between git stash pop and git stash apply. When would you use one over the other?  
Perbedaan git stash pop dan git stash apply adalah jika menggunakan git stash pop, menerapkan simpanan teratas dan stash akan hilang/terhapus dari stack. Sedangkan jika menggunakan git stash apply, stash yang baru saja di-restore ke sumber tidak akan dihapus dari stack. Penggunaannya saat ingin menggunakan kembali suatu simpanan bisa menggunakan git stash apply karena simpanan tidak terhapus di stack, tetapi hal itu akan hanya memenuhi simpanan saja jadi lebih baik menggunakan git stash pop.    
  
4. What kinds of things can you do in interactive mode when rebasing?  
Pada interactive mode bisa memodifikasi riwayat commit yang sudah ada, mengubah individual commit pada process tanpa harus memindahkan semua commit pada base yang baru, dan dapat dapat membersihkan history dengan menghapus dan mengubah sequence dari commit yang sudah ada.   
