function loadusers2()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display(data))
}

function display(data){
    const ul = document.getElementById('user-list')
    for(user of data)
    {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}