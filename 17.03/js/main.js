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
form.addEventListener('submit', function (e){
    e.preventDefault();
    const formData = {
        password: this.elements.password.value,
        repeatPassword: this.elements.repeatPassword.value,
        email: this.elements.email.value
    }
    fetch('http://192.168.0.200:3000/form',
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then(json => {
            console.log(json)
            const div = document.body.querySelector('.errors');
            div.textContent = json.message;
            if(json.status === 'success'){
                div.style.color = 'green'
            } else {
                div.style.color = 'red'
            }
        })
})
 
RAW Paste Data
const form = document.forms[0];
form.addEventListener('submit', function (e){
    e.preventDefault();
    const formData = {
        password: this.elements.password.value,
        repeatPassword: this.elements.repeatPassword.value,
        email: this.elements.email.value
    }
    fetch('http://192.168.0.200:3000/form',
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then(json => {
            console.log(json)
            const div = document.body.querySelector('.errors');
            div.textContent = json.message;
            if(json.status === 'success'){
                div.style.color = 'green'
            } else {
                div.style.color = 'red'
            }
        })
})

