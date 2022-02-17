/*function deepClone(object){
    const clone ={};
    for (const objectKey in clone){
        if( clone[objectKey] instanceof Object){
            clone[objectKey]=deepClone(clone[objectKey]

        }else
        clone[objectKey]=clone[objectKey]
    }
}
return clone;*/


// Guest есть name
// User > age, city 
// AuthUser>password,email
//Admin >isAdmin

let guest = new Object();
guest.name = "Ivan";
console.log(guest);

let user = new Object();
user.age = 20;
user.city = "Brest";
Object.setPrototypeOf(user,guest);
console.log(user);

let authUser = new Object();
authUser.password = 458796;
authUser.email = 'maslop@bk.ru';
Object.setPrototypeOf(authUser,user);
console.log(authUser);

//Равносильно этому
/*function AuthUser(password,email){
    this.password = password;
    this.email = email;
    }
AuthUser.prototype=user;
const AuthUser=new AuthUser('pass','email');*/


let admin = new Object();
admin.isAdmin = true;
Object.setPrototypeOf(admin,authUser);
console.log(admin);

//Равносильно этому
/*const admin = Object.create(authUser);
admin.isAdmin = true;*/