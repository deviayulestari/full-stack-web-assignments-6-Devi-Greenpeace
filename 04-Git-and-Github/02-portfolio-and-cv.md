## 02-portfolio-and-cv
1. membuat sebuah folder kosong dengan namamu sendiri :  
mkdir devi-ayu  
  
2. membuat sebuah file dengan nama README.md, isi file tersebut dengan kalimat
"Halo perkenalkan aku halaman utama":   
touch README.md  
nano README.md  
cat README.md  
  
3. insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan commit dengan pesan
"Inisialisasi Git Repository":  
git init .  
git add .  
git commit -m "Inisialisasi Git Repository"  
    
4. buat branch baru dengan nama cv, hal ini berguna agar histori kita tidak tercampur:  
git branch cv  
  
5. pindah branch kedalam cv, kemudian buat file dengan nama cv.txt dan isi file tersebut dengan kalimat "Ini adalah file CV":  
git checkout cv  
touch cv.txt  
nano cv.txt  
cat cv.txt  
  
6. kemudian dokumentasikan menggunakan commit dengan pesan "Inisialisasi CV":  
git add .  
git commit -m "Inisialisasi CV"  
   
7. tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan commit:  
nano cv.txt  
git add cv.txt  
git commit -m "menambahkan perusahaan pertama"  
nano cv.txt  
git add cv.txt  
git commit -m "menambahkan perusahaan kedua"  
nano cv.txt  
git add cv.txt  
git commit -m "menambahkan perusahaan ketiga"  
  
8. kembali ke branch master:  
git checkout master
   
9. ubah file README.md menjadi  
"Halo perkenalkan aku halaman utama  
  
Ini adalah update pertama pada branch master"  
jangan lupa untuk mendokumentasikannya menggunakan commit dengan pesan "update master pertama":  
nano README.md  
cat README.md  
git add .  
git commit -m "update master pertama"  
  
10. gabungkan branch cv kedalam branch master menggunakan perintah git merge:  
git merge cv  
  
11. unggah Git Repository tersebut kedalam GitHub:  
git remote add origin https://github.com/deviayulestari/devi-ayu.git  
git push -u origin master  
  
  

devi-ayu repository: https://github.com/deviayulestari/devi-ayu  

Screenshot the CLI :  
https://drive.google.com/file/d/194rS5NIAzBIUFOywjn2RCO725QX7iTte/view?usp=sharing  
https://drive.google.com/file/d/1XZGk2KhlPX06kIY8BaG5810BlR6Xky4D/view?usp=sharing  
https://drive.google.com/file/d/1G9OQpEMr38bRO9OUCN3O_ij3lzsVcf_j/view?usp=sharing  
https://drive.google.com/file/d/1YjnJOQKnsxq7WjqOj3E4ofvSZeZP4Sck/view?usp=sharing  
<img width="425" alt="02-portfolio-and-cv-1" src="https://user-images.githubusercontent.com/55142624/134182918-94a14e00-3492-4731-aeb5-5a453aed578b.png">  
<img width="458" alt="02-portfolio-and-cv-2" src="https://user-images.githubusercontent.com/55142624/134182928-e6fcdd61-0c21-471c-9c58-ca7e6eef8459.png">  
<img width="445" alt="02-portfolio-and-cv-3" src="https://user-images.githubusercontent.com/55142624/134182935-50165647-6a4d-41fb-ac47-526cf33ecde3.png">  
Git log --graph  
<img width="554" alt="02-portfolio-and-cv-4" src="https://user-images.githubusercontent.com/55142624/134182938-b160f9e2-b752-43f8-a139-f2e7136f6df5.png">  

