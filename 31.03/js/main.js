const message = {
    time:new Date(),
    text : 'Hello!',
    author : 'Olya',
}

const form = document.forms[0];
// const input = document.querySelector('.message_input');


form.addEventListener('submit', function (event) { 
    const message = { 
        time: new Date(),
        text : this.elements.inp.value, // inp - название ИМЕНИ INPUT , где мы вводим текст 
        author : 'Olya',
}

    fetch('http://192.168.0.200:3000/messages', { 
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json()) 
        .then(msg => {
            console.log(msg);
        })

    event.preventDefault(); 
})



setInterval(() => {   
    fetch('http://192.168.0.200:3000/messages' , { 
        method: 'GET',
        body: JSON.stringify(message),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(gtms => {
              console.log(gtms);

        })
}, 5000)