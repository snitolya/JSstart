
    /*Метод - функция внутри объекта
    this - указатель / контекст выполнения
    Массивы - тип данных , который позволяет хранить много элементов и позволяет к ним обращатся
    Функция - объект
    типы данных (12) - MAp, Function , Sumbol , string , set ,nan ,null , underfined , boolean....
    map - пройдется по всем элементам 
    */
    
/*Используя код примера получите json (Адрес) и преобразуйте объекты
+Отсортируйте все альбомы по заголовку
Найдите количество картинок ширина и высота которых больше 800px
Преобразуйте альбом
Добавьте свойство user куда поместите объект соответствующего автора (id автора == id пользователя)
Замените в массиве images (внутри альбома) цифры на картинки (объекты image) с соответсвующим id
Удалите альбомы в которых меньше 5 картинок
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; 
    const object = JSON.parse(result); 
    // Пишем код домашки ТУТ!!!
    const f = object.albums
    .map(albums=>{
        return {    title: albums.title,
        }  
    })
    .sort((a,b)=>{
        if (a.title>b.title){
        return 1;
        }else if( a.title<b.title){
        return -1;
        } return 0;
    })
console.log(f);  
};
xhr.onerror = function() {
  console.error("Запрос не удался");
};*/



/*Найдите количество картинок ширина и высота которых больше 800px
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; 
    const object = JSON.parse(result); 
    // Пишем код домашки ТУТ!!!
    const f = object.images
    let sort = object.images.filter(images => parseInt(images.width)  > parseInt(800)  && parseInt(images.height) > parseInt(800).length ); 
    
    console.log(sort);
};
 

xhr.onerror = function() {
  console.error("Запрос не удался");
};
//Преобразуйте альбом / Добавьте свойство user куда поместите 
//объект соответствующего автора (id автора == id пользователя)
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; 
    const object = JSON.parse(result); 
    // Пишем код домашки ТУТ!!!
    const f = object
    object.albums.forEach(album => {
     album.user = object.users.find(user=> album.authorId === user.id);
      });
    console.log(f);
};
xhr.onerror = function() {
  console.error("Запрос не удался");
};
//Замените в массиве images (внутри альбома) цифры на картинки
// (объекты image) с соответсвующим id
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; 
    const object = JSON.parse(result); 
    // Пишем код домашки ТУТ!!!
    const f = object
    object.albums.forEach(album =>  {
        album.images = album.images.map(imgId => object.images.find(img=> img.imageId === imgId));
         });
       console.log(f);
   };
    
};
xhr.onerror = function() {
  console.error("Запрос не удался");
};


// - Удалите альбомы в которых меньше 5 картинок

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; 
    const object = JSON.parse(result); 
    // Пишем код домашки ТУТ!!!
    const f = object.albums
    object.albums=object.albums.filter(album => album.images.length >=5); 
    console.log(object);
};


// imagees взять width и преобразовать в число / взять после / и удалить imageID

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 
xhr.send();
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; 
    const object = JSON.parse(result); 
    // Пишем код домашки ТУТ!!!
    const f = object.images 

   
    object.images.forEach(img =>  {
        delete img.imageId;
        img.width = Number.parseInt(img.width);
        img.height = Number.parseInt(img.height);
        img.image = img.image.split('/').pop();

    });

   const res =[];
   object.images.forEach(img =>  {
       if (res.some(i=>i.image === img.image)){
           res.push(img)
       }
   })
   
    console.log(object);
};*/
    

/*const date = new Date();
console.log(date);

const 
date.setDate(date.getDate()-10);
console.log(date.getDate)*/




/*const now = Date.now();
console.log('Now',now );
const dayOfBirth =new Date(1996,2,8);
console.log('dayOfBirth',dayOfBirth.getTime());
const newDate = (now - dayOfBirth.getTime())/1000;
console.log('newDate',newDate );


const now = new Date();
now.setMilliseconds(now.getMilliseconds()+1000000000);
console.log(now);*/


const now = new Date();
console.log(now.getTime());

const newDate = now.getTime() + 1000000000000;
const d = new Date (newDate);
console.log(d);