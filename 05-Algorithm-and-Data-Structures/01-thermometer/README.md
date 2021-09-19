Pseudocode Thermometer :  
1. BEGIN
2. STORE “temperature” AS INTEGER WITH ANY VALUE  
3. STORE “temperatureType” AS STRING WITH ANY VALUE  
4. STORE “result” AS INTEGER  
5. IF "temperatureType" EQUALS fahrenheit  
        space&nbsp;CALCULATE (“temperature” MINUS 32) TIMES (5 DIVIDED 9)  
        space&nbsp;SET “result” WITH VALUE CALCULATION RESULT  
    ELSE IF "temperatureType" EQUALS kelvin  
        space&nbsp;CALCULATE “temperature” MINUS 273.15  
        space&nbsp;SET “result” WITH VALUE CALCULATION RESULT 
    ELSE IF "temperatureType" EQUALS celcius  
        space&nbsp;SET “result” WITH “temperature”  
    ELSE
        space&nbsp;DISPLAY "Temperature type not available. Only fahrenheit, kelvin and celsius are available."  
6. DISPLAY “result”  
