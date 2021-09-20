## 01-the-basics
1. Create a folder called git-basic: mkdir git-basic  
2. cd into the git-basic folder: cd git-basic  
3. Create a file called first.txt: touch first.txt  
4. Initialize an empty git repository: git init .  
5. Add first.txt to the staging area: git add first.txt    
6. Commit with the message "adding first.txt": git commit -m "adding first.txt"  
7. Check out your commit with git log: git log  
8. Create another file called second.txt: touch second.txt  
9. Add second.txt to the staging area: git add  second.txt  
10. Commit with the message "adding second.txt": git commit -m "adding second.txt"  
12. Remove the first.txt file: rm first.txt  
13. Add this change to the staging area: git add .  
14. Commit with the message "removing first.txt": git commit -m "removing first.txt"  
15. Check out your commits using git log: git log  

Notes :
Push git-basic to github repository:  
git remote add origin https://github.com/deviayulestari/git-basic.git  
git push -u origin master  

git-basic repository: https://github.com/deviayulestari/git-basic  

Screenshot the CLI :  
https://drive.google.com/file/d/1riTE0bfOk6MX8rM_7Sj-XdA74_lnNKVr/view?usp=sharing  
https://drive.google.com/file/d/1oHmKqpAJuPI2XN3ZqEnoCZiWCfpN2aN_/view?usp=sharing  
https://drive.google.com/file/d/1BaC2xlbs1pev0lzoKYRSo9IZxXyGg3YH/view?usp=sharing  

<img width="512" alt="01-git-basic" src="https://user-images.githubusercontent.com/55142624/134018421-1b772850-032e-4fc2-b091-f85dcbdee3a9.png">
<img width="515" alt="01-git-basic-2" src="https://user-images.githubusercontent.com/55142624/134018424-4b375bc7-c4f9-4237-9609-04d80af4825e.png">
<img width="491" alt="push-01-git-basic" src="https://user-images.githubusercontent.com/55142624/134018427-caf24bd8-0fd5-4cd6-9485-c8eaa0bb04d3.png">
