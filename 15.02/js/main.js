
/*Метод - свойство
this - указатель / контекст выполнения
Массивы - тип данных , который позволяет хранить много элементов и позволяет к ним обращатся
Функция - объект
типы данных (12) - MAp, Function , Sumbol , string , set ,nan ,null , underfined , boolean....
map - пройдется по всем элементам 
  

Удалить в массиве все числа, которые повторяются более двух раз.
const arr = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8 ]
console.log(arr);
let toDelete = []; 
for (let i = 0; i < arr.length; i++) {
  let q = arr.filter(item => { 
    return item === arr[i];
  }).length;
  
  if (q === 3) toDelete.push(arr[i]); 
}
toDelete.forEach(item => { 
  arr.splice(arr.indexOf(item), 1);
});
console.log(arr);


const arr = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8 ]
let res = []; 
arr.forEach(element =>{
    if(!(arr.filter(e=> e===element).length >2)){
        res.push(element)
    };
  
})
console.log(res);


Задача 9
Строка состоит из слов, разделенных одним или несколькими пробелами и знаками препинания.
const str = 'Объектно-ориентированное   программирование (ООП) —   методология программирования, основанная на   представлении программы в виде совокупности    объектов, каждый из которых является   экземпляром определённого класса, а классы    образуют иерархию наследования'
Во всех подзадачах маленькие и больше буквы считать одинаковыми
+Найдите слово наибольшей длины.
Определить какая буква в строке встречается чаще всего
Вывести в алфавитном порядке все слова, содержащие наибольшее количество гласных букв
Найти все слова, в которые буква «а» входит не менее двух раз
Вывести текст, составленный из первых букв всех слов содержащих букву «и».
Вывести слова, в которых нет повторяющихся букв

const str = 'Объектно-ориентированное   программирование (ООП) —   методология программирования, основанная на   представлении программы в виде совокупности    объектов, каждый из которых является   экземпляром определённого класса, а классы    образуют иерархию наследования'.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
str.replaceAll(',',' ').replaceAll('  ',' ');

let maxWord ='';
words.forEach(word => {
    if(word.length >maxWord.length)
    return maxWord
})

console.log(str); */


let admin = {
    name: "Вася",
    age: 46,
    isAdmin:true,
};
let clone ={};

for( let key in admin){
    clone[key]=admin[key];
}
 clone.age = 58;

 console.log(admin);
console.log(clone);// независимая копия объекта Admin



let user ={
    name : 'John',
}
Object.defineProperty(user,'age',
{

    value:70,
    writable:false,
})
user.age = 84; //свой-во writable - false - поэтому свойство не переприсвоилось
console.log(user)




let user ={
  age : 1,
}
Object.defineProperty(user,'age',
{
    value:65,
    configurable:false,
})
Object.defineProperty(user,'name',
{
    value:"John",
    configurable:false,
})
delete user.name; 
console.log(user)