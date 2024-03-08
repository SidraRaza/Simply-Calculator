 val1 = prompt('Enter your first value');
 val2 = prompt('Enter your second value');
 sign = prompt('Enter your operator');
 console.log(val1 +sign + val2)
 if(sign==='+'){
   alert((+val1)+(+val2));
 }
 else if(sign==='-'){
    alert(val1-val2);
 }
 else if(sign==='*'){
    alert(val1*val2);
 }
 else if(sign==='/'){
    alert(val1/val2);
 }
 else if(sign==='%'){
   alert(val1 / val2*100);
}