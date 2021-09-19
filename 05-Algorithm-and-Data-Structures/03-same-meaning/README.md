Pseudocode same-meaning:  
1. BEGIN
2. STORE "word" WITH ANY VALUE
3. STORE "lengthWord" as INTEGER WITH THE NUMBER LETTERS OF "word" 
4. STORE "countRight" as INTEGER WITH "lengthWord" MINUS 1  
5. STORE "countLeft" as INTEGER WITH 0 
6. STORE "output" as BOOLEAN 
7. WHILE "countRight" MORE THAN EQUAL 0 AND "countLeft" LESS THAN "lengthWord" 
        IF "word" INDEX "countLeft" EQUALS "word" INDEX "countRight" 
            SET "output" WITH TRUE
            SET "countLeft" WITH "countLeft" PLUS 1 
            SET "countRight" WITH "countRight" MINUS 1
        ELSE 
            SET "output" WITH FALSE
    END WHILE
8. DISPLAY "output" 
9. END