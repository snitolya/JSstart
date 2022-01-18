
/*Выведите на экран 10 раз фразу "You are welcome!"*/

let s = 'You are welcome!';
for(let i = 1 ; i<=10 ; i++){
    console.log(s);
}

let n = 1 ;
while ( n <= 10){
    console.log(s);
    n++;
}

/*Вывести на экран ряд чисел 1001,  1004,  1007,  ... 1025*/

let a = '';
for(let i=1001 ; i<=1025 ; i=i+3){
  console.log(i);
}

/*Выведите  на экран строки (в последней строке n звездочек):
*
**
***
****
*****
*/

let stars = '*';
for (i=1; i<=7; i++){
  console.log(stars);
  stars = stars + '*';
}


/*Выведите на экран строки вида:
*******
****
*******
****
*******
****
(всего n строк, звездочек или 7, или 4 по очереди)
*/

let small = '****';
let big = '*******';

for (let n=1; n<=8; n++){
    if (n % 2 == 0 ){
          console.log(big)
} else{
  console.log(small)
}
}


/*Выведите на экран числа 1.2, 1.4, 1.6, ..., 2.8.*/

for(let i=1.2 ; i<=2.81 ; i=i+0.2){
  console.log(i);
}


/*Выведите на экран таблицу умножения для чисел от 1 до 10.*/

for (let p=1; p<=10; p++){
    for (let n=1; n<=10; n++){
        let m = p*n;
        console.log(`${p} x ${n} =${m}`);
    }
    console.log('-------------');
}

/*Вывести на экран n единиц, затем 2n двоек, затем 3n троек.*/
let h=11;
for ( let x=1; x<=h; x++){
  let s = String(x);
for(let i = 1; i<=x*h; i++){
   s = s + String(x);
}
console.log(s);
}


/*Найдите сумму 1+1/2+1/3+…+1/n.*/
let d=0;
for (let b=1; b<=800; b++){
  d=d+1/b;
}
console.log(d);


/*Найти сумму чисел от 1000 до 9999 такие, которые делятся на 3.*/
let v = 0;
for(let r=1000 ; r<=9999; r++){
  if (r % 3 == 0 ){
    v= v + r;
}
}
console.log(v);

















