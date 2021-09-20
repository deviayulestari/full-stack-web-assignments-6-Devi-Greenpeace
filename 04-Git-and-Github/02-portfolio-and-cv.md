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
touch google.txt  
git add google.txt  
git commit -m "add google.txt"  
touch tokopedia.txt  
git add tokopedia.txt  
git commit -m "add tokopedia.txt"  
touch gojek.txt  
git add gojek.txt  
git commit -m "add gojek.txt"  
  
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
https://drive.google.com/file/d/1ymKH894jSHqBvl91TJ808kxIl3_iATxH/view?usp=sharing  
https://drive.google.com/file/d/1esNycJEwYORLM477ffcj2ijh2YNQlWga/view?usp=sharing  
https://drive.google.com/file/d/1CXBzJcDTt31IMKTbR1pSlDzf0CDl86u7/view?usp=sharing  
https://drive.google.com/file/d/1yNpdOgN26DpYBwrwJod4az90-Y8B0fy4/view?usp=sharing  
<img width="461" alt="02-portfolio-and-cv-1" src="https://user-images.githubusercontent.com/55142624/134034659-540c4791-0761-48be-a5fe-480c05fa3753.png">  
<img width="467" alt="02-portfolio-and-cv-2" src="https://user-images.githubusercontent.com/55142624/134034665-bf91a405-2a37-499c-a5d7-e7bcfbdf0bc8.png">  
<img width="466" alt="02-portfolio-and-cv-3" src="https://user-images.githubusercontent.com/55142624/134034666-0cf301cd-aee7-44d8-8b1c-9359a02beaed.png">  
<img width="511" alt="02-portfolio-and-cv-4" src="https://user-images.githubusercontent.com/55142624/134034667-ea0af778-4e80-479e-bb9f-dbd8c75f6875.png">  
