//let arr = [5, 97, -58, -50, 68, -41, -22, -7, -64, 88, -51, 13, -13, -11, -50, -80, -13, 100, -70, -40, -98, 3, 20, -30, -30, -9, 46, 39, 89, 86, 38, 77, 64, -69];
/*let newMassive = arr.filter((e,i) => i % 2 == 0);
console.log(newMassive);*/
//Получите новый массив с элементами через 1 по порядку

//Создайте структуру (=объект) с именем student, содержащую поля: фамилия и инициалы, номер группы, успеваемость 
//(массив из пяти элементов). Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию
// среднего балла. Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только
// 4 или 5.


function Student(firstName,lastName,groupNumber,rating){
    this.firstName=firstName;
    this.lastName=lastName;
    this.groupNumber=groupNumber;
    this.rating =rating;
    this.print=function(){
        console.log(`${this.lastName} -${this.groupNumber}`) ;//= (this.lastName + '-' +this.groupNumber)
    };
    this.middleRating = function(){
        return this.rating.reduce((r1,r2) =>r1+r2)/this.rating.length;
    };
    this.isPerfect=function(){
        return this.rating.every(r=> r>=4);
    }
}

const student1=new Student ('Vasya1','Pupkin1',12,[2,3,5,6]);
const student2=new Student ('Vasya2','Pupkin2',3,[2,3,5,6]);
const student3=new Student ('Vasya3','Pupkin3',2,[7,8,4,6]);
const student4=new Student ('Vasya4','Pupkin4',9,[2,3,7,6]);
const student5=new Student ('Vasya5','Pupkin5',10,[2,4,5,6]);
const student6=new Student ('Vasya6','Pupkin6',19,[2,3,5,6]);
const student7=new Student ('Vasya7','Pupkin7',52,[2,3,5,6]);

const students=[student1,student2,student3,student4,student5,student6,student7];
const best = students.filter(s=>s.isPerfect())
best.forEach(s=>s.print())//вызываем метод принт ,он выводит красиво имя студентов
console.log(best);
students[0].print();

const sortedStudents=students.sort((s1,s2)=>s1.middleRating()-s2.middleRating());
console.log(sortedStudents);


