## 05-submit-my-changes
1. Fork repository GitHub https://github.com/impactbyte/tech4impact-students-bio.git menggunakan akun Github kamu:  
Repository : https://github.com/deviayulestari/tech4impact-students-bio     
Screenshot : https://drive.google.com/file/d/1w5SG817J8p1bnqlucwQHkSEYrMdUJMih/view?usp=sharing   
<img width="960" alt="05-submit-my-changes-01(fork)" src="https://user-images.githubusercontent.com/55142624/134127913-79bdab95-9077-48fb-aaa6-d2f70ff8b279.png">  
  

  
2. Clone remote repository dari hasil fork tersebut. Jangan clone dari repository originalnya:  
git clone https://github.com/impactbyte/tech4impact-students-bio.git   
cd tech4impact-students-bio  
git remote -v  

3. Buatlah branch baru dengan nama lengkap kamu. Misalnya david-winalda. Jangan melakukan perubahan pada branch master:  
git branch devi-ayu  

  
4. Checkout ke dalam branch tersebut yang telah kamu buat:  
git checkout devi-ayu
  
5. Buatlah 1 file format .md dengan nama lengkap kamu. Contoh davidwinalda.md:  
touch deviayulestari.md  
  
6. Isi file tersebut davidwinalda.md dengan konten di bawah ini:  
Nama Lengkap: David Winalda  
Umur: 27  
Pesan yang ingin disampaikan: Semangat untuk kamu yang disana sedang berjuang  
nano deviayulestari.md  
screenshot isi file : https://drive.google.com/file/d/1rzZ0OByi3mQ0QpT2zdrGN9EJoo4Na6qB/view?usp=sharing   
<img width="478" alt="05-submit-my-changes-03(isi-file)" src="https://user-images.githubusercontent.com/55142624/134127975-39f0fee0-4f63-4e60-82c7-e3063e6780c7.png">  
cat deviayulestari.md     
  
7. Masukkan file .md tersebut ke dalam staging area:  
git add .  
  
8. Commit dengan memberikan pesan nama file .md kamu:  
git commit -m "add deviayulestari.md"  
  
9. Merge branch yang telah kamu buat ke dalam branch master:  
git checkout master  
git merge devi-ayu  
  
10. Push ke dalam branch master:  
git push -u origin master
  
11. Lakukan pull request dari GitHub Repository yang telah kamu fork untuk digabungkan ke dalam branch master pada GitHub Repository aslinya:  
Link pull request: https://github.com/impactbyte/tech4impact-students-bio/pull/28   
Screenshot: https://drive.google.com/file/d/1_IoOs937X5GqaBfkWKXkcb3cTQCQuWUf/view?usp=sharing  
<img width="960" alt="05-submit-my-changes-11(pull-req)" src="https://user-images.githubusercontent.com/55142624/134128070-2c0f6dde-1373-475c-bd07-5ee2e1dbe893.png">

   

Link tech4impact-students-bio Repository yang sudah di fork: https://github.com/deviayulestari/tech4impact-students-bio   
  
   
Screenshot the CLI:  
https://drive.google.com/file/d/14qXD55mq9Mw0-s31ZdfF4qkrCx4_sZh_/view?usp=sharing  
https://drive.google.com/file/d/1RfArXUlFntV7yUATblZJsWupsRZd9GmF/view?usp=sharing  
<img width="555" alt="05-smc-1" src="https://user-images.githubusercontent.com/55142624/134128155-389c2214-441b-4d7a-8925-277863c6e5a8.png">  
<img width="524" alt="05-smc-2" src="https://user-images.githubusercontent.com/55142624/134128157-3ec72a86-3f65-4430-a418-d065211c1173.png">  

  
Notes: Terdapat beberapa command yang hilang (command no 3-5) saat saya keluar dari nano deviayulestari.md mungkin git bash nya ada error. Tetapi saya menjalankan setiap command persis seperti yang diketikan diatas.
