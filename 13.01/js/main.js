/*Дана строка. Вывести первые три символа и последний три символа

let s = 'Дана строка.Вывести первый, последний и средний (если он есть)) символы.';
let str1 = s.slice(0, 3);
console.log(str1);


Дана строка.Вывести первый, последний и средний (если он есть)) символы.

let s = 'Дана строка.Вывести первый, последний и средний (если он есть)) символы.';
let f = s.slice(0, 1);
console.log(f);
f = s.slice(-1); /*s.length -1 
console.log(f);
if ( s.length % 2 != 0){

    let n = (s.length -1)/2;
    console.log(s);
}

Дана строка. Если она начинается на 'abc', то заменить их на 'www', иначе добавить в конец строки 'zzz'.


 s= 'abcsdfhlhnlf';
if (s.startsWith ('abc')) {
    s = s.replace ('abc','www');
}else{
  s= s +'zzz';
}
console.log(s);


s.lengths
s.startsWith
s.replaces
replaceAll
trim 
sliceindexOF
s.include


Дана строка. Определите, какой символ в ней встречается раньше: 'x' или 'y'. Если какого-то из символов нет, вывести сообщение об этом.*/


let s = 'Xey World!';
if (s.indexOf('x') > s.indexOf('y') ){
  console.log('y');
}else if (s.indexOf('y') > s.indexOf('x')){
  console.log('x');
}else{
  console.log('Таких символов нет');
}


let s = ' asdfasf       asdfsdf        asdf ';
while (s.includes(' ')){
  s=s.replaceAll(' ', ' ')
}
console.log(s);













