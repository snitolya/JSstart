/*Задача
Дана строка, содержащая полное имя файла 
(например, 'c:\WebServers\home\testsite\www\myfile.txt'). 
Выделите из этой строки имя файла без расширения.)*/

/*let str = 'c:\\WebServers\\home\\testsite\\www\\myfile.txt';
let lastIndex = str.lastIndexOf('\\');
let dotIndex = str.lastIndexOf('.');
let fileName = str.slice(lastIndex+1, dotIndex);
console.log (fileName)*/

/*Найти количество чисел в массиве, которые делятся на 3, но не делятся на 7.*/

/*let arr =[];
for (let i=1; i<=1000000; i++){
  if(i % 3 === 0 && i % 7 !==0 ){
  arr.push(i);
}

console.log(arr.length);*/


/*Найдите сумму и произведение элементов массива.

let arr =[1,3,5, 3452354 , 233 , 234, 1];
let s = 0;
let p=1;
for ( let i=0 ; i < arr.length; i++){
  s += arr[i]; //s=s+arr[i] 
  p*=arr[i];
}
console.log(s,p); 
/*


/*Найти наибольший элемент массива.
let arr =[1,3,5, 3452354 , 233 , 234, 1];
let max = arr.pop();
for ( let i=0 ; i < arr.length; i++){
  if (max> arr [i]){
    max=arr[i]
    max= arr[i];
  }
}
console.log(max);*/


/*Найти наименьший , наибольший и сумму наиб и наим .
let arr =[1,3,5, 3452354 , 233 , 234, 1];
let max = arr.pop();
let min = max;
for ( let i=0 ; i < arr.length; i++){
  if (max< arr [i]){
  max= arr[i];
   } else if (min> arr [i]){

    min=arr[i];
    
    }

} let sum = max+ min;
console.log(max, min,sum);*/


/*В данной строке найти количество цифр

let str = 'asdasdasdadsads12123312asdfasdfadsfa'
let b =Number.isInteger('4');
let arr = str.split('');
let s=0;
for ( let i=0 ; i < arr.length; i++){
  if (Number.isInteger(+arr[i])){
    s+=+(arr[i]);
  }
}
console.log(s);*/


/*Дана строка */
let str = 'минск брест москва';
let words = str.split(' ');
console.log('Words:', words);
for ( let i=0 ; i < words.length; i++){
  let word = words[i];
  word = word[0].toUpperCase() + word.slice(1);
   words[i]=word;
}
console.log('Words:', words);
str=words.join(' ');
console.log(str);



