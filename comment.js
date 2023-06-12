function getComments()
{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(x => displayComments(x))
}
 getComments();
function displayComments(data)
{
    const commentsContainer = document.getElementById('comments-container');
    for(com of data)
    {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1> ID : ${com.id}</h1>
        <h2> Name : ${com.name}</h2>
        <p> Email : ${com.email}</p>
        <p> Comment : ${com.body}</p>
        `
        commentsContainer.appendChild(div);
    }
}