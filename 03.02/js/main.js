
    /*Метод - функция внутри объекта
    this - указатель / контекст выполнения
    Массивы - тип данных , который позволяет хранить много элементов и позволяет к ним обращатся
    Функция - объект
    типы данных (12) - MAp, Function , Sumbol , string , set ,nan ,null , underfined , boolean....
    map - пройдется по всем элементам 
    */
    

/*const request = new XMLHttpRequest();
 
request.open('GET', 'https://jsonplaceholder.typicode.com/users');


 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here
    const f = object
    .map(user=>{
        return {
            //name: user.name,
            //city: user.address.city,
            //street: user.address.street,
               
        email : user.email,
        phone : user.phone.replaceAll('.','-').replaceAll('x','-').replaceAll(' ',''),
     }

    })
    .filter(user=>user.phone.includes('0'))
    .map( user=>{
        const atPosition= user.email.indexOf('@');
        user.email=user.email.slice(atPosition+1);
        return user;
    })
    console.log(f);
    }
 
request.send();//делаем запрос 
console.log('Done');



    
const request = new XMLHttpRequest();
 
request.open('GET', 'https://jsonplaceholder.typicode.com/users');


 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here
    const f = object
    .map(user=> +user.address.geo.lat + +user.address.geo.lng)
    .reduce ((a,b)=> a + b)

    console.log(f);
}
 
request.send();//делаем запрос 
console.log('Done');*/


const request = new XMLHttpRequest();
 
request.open('GET', 'https://jsonplaceholder.typicode.com/photos');


 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here
    const f = object
    .map(o=> o.thumbnailUrl)
        .filter(str =>{
            const lastNumber = +str.slice(-1);
            return lastNumber % 2 === 0
        })
    
  
    console.log(f);
}
request.send();//делаем запрос 
console.log('Done');
    
    
