Pseudocode Thermometer :  
1. BEGIN
2. STORE “temperature” AS INTEGER WITH ANY VALUE  
3. STORE “temperatureType” AS STRING WITH ANY VALUE  
4. STORE “result” AS INTEGER  
5. IF "temperatureType" EQUALS fahrenheit  
        &nbsp;&nbsp;&nbsp;&nbsp;CALCULATE (“temperature” MINUS 32) TIMES (5 DIVIDED 9)  
        &nbsp;&nbsp;&nbsp;&nbsp;SET “result” WITH VALUE CALCULATION RESULT  
    &nbsp;&nbsp;ELSE IF "temperatureType" EQUALS kelvin    
        &nbsp;&nbsp;&nbsp;&nbsp;CALCULATE “temperature” MINUS 273.15    
        &nbsp;&nbsp;&nbsp;&nbsp;SET “result” WITH VALUE CALCULATION RESULT   
    &nbsp;&nbsp;ELSE IF "temperatureType" EQUALS celcius    
        &nbsp;&nbsp;&nbsp;&nbsp;SET “result” WITH “temperature”    
    &nbsp;&nbsp;ELSE  
        &nbsp;&nbsp;&nbsp;&nbsp;DISPLAY "Temperature type not available. Only fahrenheit, kelvin and celsius are available."    
6. DISPLAY “result”  
