Pseudocode fizz-buzz:    
1. BEGIN   
2. STORE "n" AS INTEGER WITH ANY VALUE 
3. IF "n" LESS THAN 1   
    DISPLAY "The minimum value is 1"  
   ELSE   
        STORE "number" as INTEGER WITH 1   
        WHILE "number" LESS THAN EQUALS "n"  
            IF "number" MODULUS BY 3 EQUALS 0 AND "number" MODULUS BY 5 EQUAL 0  
                DISPLAY "FizzBuzz"  
            ELSE IF "number" MODULUS BY 3 EQUALS 0   
                DISPLAY "Fizz"  
            ELSE IF "number" MODULUS BY 5 EQUALS 0  
                DISPLAY "Buzz"  
            ELSE  
                DISPLAY "number"  
            SET "number" WITH "number" PLUS 1  
        END WHILE  
4. END  
