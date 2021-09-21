## 03-branch-and-merge
1. What does git clean do?  
Perintah git clean digunakan untuk menghapus file yang tidak diinginkan dari working directory. Git clean akan menghapus untracked files dari working tree.
  
2. What do the -d and -f flags for git clean do?  
-d akan menghapus untracked directory.  
-f akan menghapus untracked files dari directory yang sekarang selain untracked folder atau file yang dispesified oleh .gitignore.  
Secara default, git clean -f akan beroperasi pada semua untracked files dalam current directory. Selain itu, nilai <path> dapat diteruskan dengan opsi -f yang akan menghapus file tertentu.

Jika ingin menghapus untracked directory, dapat menggunakan opsi -d yang memberi tahu git clean untuk melakukannya, karena secara default akan mengabaikan directory.

  
3. What git command creates a branch?  
Menggunakan git branch <branch name>
  
4. What is the difference between a fast-forward and recursive merge?  

 
   
5. What git command changes to another branch?  
Menggunakan git checkout <branch name>  
   
6. How do you remove modified or deleted files from the working directory?  
Menggunakan git reset --hard
  
7. What git command deletes a branch?  
Menggunakan git branch -d <branch name>  
  
8. What does the git diff command do?  

  
9. How do you remove files from the staging area?  
Menggunakan git reset HEAD <file name>   

10. How do merge conflicts happen?  

  