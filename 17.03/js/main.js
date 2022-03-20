/* <script>
let currentPage = 1;
function loadNextUser(page){
fetch("https://randomuser.me/api/?page=${page}6results=10")
.then ((response) => response.json())
.then((data)=>{
  console.log(data);
  const p = document.body.querySelector('p');
  p.textContent=data.info.page;
  const ul = document.body.querySelector('ul');
  ul.innerHTML='';
  data.results.forEach(user=>{
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = user.picture.medium;
  const span = document.createElement('span');
  span.textContent = `${user.name.first} ${user.name.last}`
  li.append(img);
  li.append(span);
  li.append(li);
 })
 })
 }
 
 loadUsers(currentPage);
 const buttonNext = document.body.querySelectorAll('button')[1];
 console.lpg(buttonNext);
 buttonNext.addEventListener('click', ()=>{
    currentPage++;
     loadUsers(currentPage);
     })

//   const email = document.createElement('email');
//   email = email.value;
//   document.body.append(email);

})
</script> */

const form = document.forms[0];
form.addEventListener('submit', (e) =>{
    e.preventDefault();











    
})

fetch('http://192.168.0.200:3000/form',
{
    method : 'POST',
    headers: {"Content-Type": "application"},
    body: JSON.stringify({name:'', age:35})
})
.then((response) =>{
    console.log(response)
    return response.text()
})
.then(text =>{
    console.log(text)
   
    const email = document.body.querySelector('#inputEmail3').value;
    email.innerHTML = '';

    const password = document.body.querySelector('#inputPassword3').value;
    password.innerHTML = '';



    
   
})


