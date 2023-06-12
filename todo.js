function getTodoData()
{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayWithTodoData(data))
}
getTodoData();
function displayWithTodoData(toDoData)
{
    const mainContainer = document.getElementById('main-container');
    for(to of toDoData)
    {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>ID : ${to.id}</h1>
        <p> Title : ${to.title}</p>
        <h5> Completed : ${to.completed}</h5>
        `
        mainContainer.appendChild(div);
    }
}