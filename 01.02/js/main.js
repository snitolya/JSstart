/*Задача 1
Описать объект, представляющий треугольник. 
Предусмотреть методы для создания объектов, вычисления 
площади и периметра
function Triangle(side1,side2,side3){
    this.side1=side1;
    this.side2=side2;
    this.side3=side3;
    this.perimeter=function(){
      return side1+side2+side3;
};
this.square=function(){
    let partPerimeter=(side1+side2+side3)/2;
    console.log(partPerimeter);
    return Math.sqrt(partPerimeter * ((partPerimeter-side1) * (partPerimeter-side2) * (partPerimeter-side3)));
};
}
let triangle1= new Triangle (8,4,6);
let p = triangle1.perimeter();
let s = triangle1.square();
console.log(p);
console.log(s);*/



/*Задача 2
Создайте структуру с именем train, содержащую поля:
название пункта назначения, номер поезда, время отправления.
Ввести данные в массив из пяти элементов типа train
Упорядочить элементы по номерам поездов.
Добавить возможность вывода информации о поезде, номер 
которого введен пользователем.
Добавить возможность сортировки массив по пункту назначения,
 (* причем поезда с одинаковыми пунктами назначения должны 
быть упорядочены по времени отправления)


function Train(destination,trainNumber,departureTime){
    this.destination=destination;
    this.trainNumber=trainNumber;
    this.departureTime=departureTime;
}


const train1 = new Train('Wrozlaw',28,2300);
const train2 = new Train('Drezden',3,1100);
const train3 = new Train('Lublin',9,1800);
const train4 = new Train('Budapesht',15,1740);
const train5 = new Train('Yaroslavl',7,1200);

const trains = [train1,train2,train3,train4,train5];

const sorted = trains.sort((t1,t2)=> t1.trainNumber-t2.trainNumber);

const requestNumber=8;
const requestTrain = trains.find(t=>t.trainNumber===requestNumber)
const sortedByDestination = trains.sort((t1,t2)=>{
    if(t1.destination>t2.destination){
        return 1;
    }else if (t1.destination < t2.destination){
        return -1;
}
return 0;
})

console.log(sorted);
console.log( requestTrain);//выводит т.к. нет номера 8 у меня поезда
console.log(sortedByDestination);*/


//Описать класс «домашняя библиотека». 
//Книга 
//-Автор , название ,год , кол-во страниц
//поиска книги по какому-либо признаку (например, по автору или по году издания),
// добавления книг в библиотеку, удаления книг из нее по году, сортировки книг (по авторам и кол-ву страниц).


function Book(book,author,title,year,numberOfPages){
    this.book=book;
    this.author=author;
    this.title=title;
    this.year=year;
    this.numberOfPages=numberOfPages;
}

const book1 = new Book ( 'book1', 'author1',' title1' , 1954 , 2106);
const book2 = new Book ( 'book2', 'author2', 'title2' , 2006 , 484);
const book3 = new Book ( 'book3', 'author3', 'title3' , 2020 , 35);
const book4 = new Book ( 'book4', 'author4', 'title4' , 1992 , 706);
const book5 = new Book ( 'book5', 'author5', 'title5' , 2012 , 270);

const books= [book1,book2,book3,book4,book5];
const au = 'author5';
const sortedBooks=books.find(b=>b.author==='author5');
console.log(sortedBooks);

books.push (new Book ( 'book6', 'author6',' title6' , 1984 , 126));

const iBook = books.findIndex(b=>b.year === 2020 );
console.log(iBook);

delete books[iBook];
console.log(books);

const sortedAuthor = books.sort((b1,b2)=> b1.author-b2.author);
console.log(sortedAuthor);
const sortedPages = books.sort((b1,b2)=> b1.numberOfPages-b2.numberOfPages);
console.log(sortedPages);



//Описать домашняя библиотека.
// Книга
// - Автор
// - Название
// - Год
// - Кол-страниц
 
// поиска книги по какому-либо признаку (например, по автору или по году издания),
// добавления книг в библиотеку(массив), удаления книг из нее (по году),
// сортировки книг(по автору и кол-ву страниц)
 
//https://pastebin.com/np2n2heQ
 
function Book(author, title, year, pages){
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
    this.print = function (){
        console.log(`Author: ${this.author}: '${this.title}' - ${this.pages}, ${this.year}`);
    };
}
 
function Library(books=[]){
    this.books = books;
    this.add = function (book){
        this.books.push(book);
    };
    this.show = function (){
        this.books.forEach(b=> b.print())
        console.log('--------');
    };
    this.findByYear = function (year){
        return this.books.find( book => book.year === year);
    };
    this.sortByAuthor = function (){
        this.books.sort( (b1, b2) => {
            if(b1.author > b2.author){
                return 1;
            } else if(b1.author < b2.author){
                return  -1;
            }
            return 0;
        })
    };
    this.sortByPages = function (){
        this.books.sort( (b1, b2) => b1.pages - b2.pages);
    };
    this.deleteAllByYear = function (year){
        this.books = this.books.filter( b=> b.year !== year )
    }
 
}
 
const book1 = new Book('Author1', 'title1', 2000, 120);
const book2 = new Book('Author2', 'title2', 2000, 90);
const books = [book2, book1];
 
 
const library = new Library(books)
const book3 = new Book('Author3', 'title3', 2001, 100);
library.add(book3);
const finded = library.findByYear(2003);
library.show();
library.deleteAllByYear(2000);
library.show();
 



