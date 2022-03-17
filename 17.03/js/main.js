/* <script>
fetch("https://randomuser.me/api/?page={}")
.then ((response) => response.json())
.then((data)=>{
  console.log(data);
  const p = document.body.querySelector('p');
  p.textContent=data.info.page;
  const ul = document.body.querySelector('ul');
  ul.innerHTML='';
  data.results.forEach(user=>{
  document.body.querySelector('p');
  })
  const img = document.createElement('img');
  img.src = "https://randomuser.me/api/portraits/women/84.jpg";
  document.body.append(img);

  const email = document.createElement('email');
  email = email.value;
  document.body.append(email);

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


