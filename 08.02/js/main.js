
    /*Метод - функция внутри объекта
    this - указатель / контекст выполнения
    Массивы - тип данных , который позволяет хранить много элементов и позволяет к ним обращатся
    Функция - объект
    типы данных (12) - MAp, Function , Sumbol , string , set ,nan ,null , underfined , boolean....
    map - пройдется по всем элементам 
    */
    
/*Задача 1
Получите по адресу https://jsonplaceholder.typicode.com/users массив объектов
+Преобразуйте их в массив объектов вида
  [
      {
          id: 1, // соответсвующий id из JSON
          name: 'FIRSTNAME', //Возьмите только имя (часть строки до первого пробела), сделайте все буквы заглавными
          phone: 'номер телефона', // Удалите все кроме цифр
          location: {
              street: 'Улица',
              index: 'Почтовый индекс',
              number: 'Номер suite' // Оставьте только цифры ("suite": "Apt. 950" => number: 950 (число))
          }
      },
      ....
  ]
- Полученный массив преобразуйте заменив phone на сумму ТОЛЬКО четных цифр из этого же свойства
+Отсортируйте массив по name
+-Удалите из массив всех в номере дома которых есть цифра 1
Разделите индекс всех на 2 и округлите результат до целого вверх
Выведите результат
const request = new XMLHttpRequest();
 
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here
    const f = object
    .map(user=>{
        return {
            id : user.id,
            name: user.name.split(' ')[0].toUpperCase(),
            phone : user.phone.replaceAll('.','').replaceAll('x','').replaceAll(' ','').replaceAll('-','').replaceAll('(','').replaceAll(')','').split('').filter(e=>e%2===0).reduce((a,b)=>+a+ +b),
            location:{
            street : user.address.street,
            index : user.address.zipcode.replaceAll('-',''),
            number : user.address.suite.split(' ')[1], // обрезали строку до пробела
        }
        
     }
    })
    .sort((a,b)=>(a.name>b.name) ? 1:-1) //работает , остортировала по алфавиту
     //const f = object.filter(user=>!user.address.suite.includes('1')) - удаление 1 из дома 
     /*object.forEach(user, i =>{
         const index = user.address.suite.indexOf('1')
         if( index != -1){
             delete object[i] //
         }
         console.log(object);
     })*/

     /*object.forEach(user, i =>{
     let code = user.address.zipcode.replaceAll('-','');
     code = Math.ceil(Number.parseInt(code)/2);
     user.address.zipcode=code;
    })
     console.log(object);
    }; 

  
    console.log(f);
    }
 
request.send();//делаем запрос 
console.log('Done');
*/







/*
Задача 2
Получите по адресу https://jsonplaceholder.typicode.com/posts массив объектов
Удалите из массив все элементы title который больше 25 символов - через фильтр 
Каждуй первую букву слова из свойства body сделайте заглавной
Отсортируйте массив по длине body
Удалите из всех элементов свойство userId
Выведите результат
Преобразуйте результат в JSON строку и вывидите*/


/*const request = new XMLHttpRequest();
 
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here
    const f = object
    .map(post=>{
        return {
            title : post.title,
            userId: post.userId,
            id: post.id,
            body: post.body.charAt(0).toUpperCase().slice(1).toLowerCase(),
   
     }
    })  
    .sort((a,b)=>(a.length>b.length)) 

//Каждуй первую букву слова из свойства body сделайте заглавной
     object.forEach(post, i =>{
     post.body = post.body
     .split('')
     .map(word=>word[0]..toUpperCase()+ word.slice(1))
     .join(' ')
      .split('\n')
      .map(word=>word[0]..toUpperCase()+ word.slice(1))
     .join(' ')
    })
     console.log(object);
    }; 


 
     //delete object.userId  
  
    console.log(f);
    }
 
request.send();//делаем запрос 
console.log('Done');*/




/*
const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/comments');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here

    //const f = object.filter(comment=>comment.email)
  
    const f = object
    .map(comment=>{
        return {
            email: comment.email,
            
        }
        
    })
   

    console.log(f);
    }
 
request.send();//делаем запрос 
console.log('Done');



//192.168.0.200:3000/1

const request = new XMLHttpRequest();
request.open('GET', 'http://192.168.0.200:3000/1');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here

    //const f = object.filter(comment=>comment.email)
  
    const f = object.users
    .map(users=>{
        return {
            name: users.name,
            }
        
    })
   
    .sort((a,b)=>{
    if (a.name>b.name){
    return 1;
    }else if( a.name<b.name){
    return -1;
    }
    return 0;
})

object.users.forEach(user =>{
  user.posts=object.posts.filter(post=> post.userId===user.id);
})

    console.log(f);
    }
 
request.send();//делаем запрос 
console.log('Done');






const request = new XMLHttpRequest();
request.open('GET', 'http://192.168.0.200:3000/1');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here

    const f = object.users
  
  

object.users.forEach(user =>{
user.posts=object.posts.filter(post=> post.userId===user.id);
})

    console.log(object);
    }
 
request.send();//делаем запрос 
console.log('Done');*/









const request = new XMLHttpRequest();
request.open('GET', 'http://192.168.0.200:3000/1');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here

    const f = object.users
  
 
object.posts.forEach(post =>{
post.user=object.users.find(user=>user.id===post.userId);
})




    console.log(object);
    }
 
request.send();//делаем запрос 
console.log('Done');
