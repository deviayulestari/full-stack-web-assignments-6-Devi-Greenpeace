/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for(let i=2; i<100; i++) {
    let isPrima = true;
    
    for (let j = 2; j < i; j++) {
        if(i%j==0){
            isPrima = false;
            break;  
        }
    }
    if(isPrima==true){
        console.log(i+",");
    }
}


   
/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime = 50;

/// EDIT HERE
let num = 2;
while (primeCounter < 50) {
    let isPrime = true;
    
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        fiftiethPrime = num;
        primeCounter++;
    }

    num++;
}

console.log(fiftiethPrime);



/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
//do { .... } while (....)
let index = 0;
do {
    if(index % 2 != 0){
        fiftiethOdd = index;
        oddCounter++;
    }
    index++;
} while (oddCounter < 50);

console.log(fiftiethOdd);