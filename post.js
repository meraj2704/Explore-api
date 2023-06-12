
function getPostData()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => enterData(data))
}
getPostData();
function enterData(datas)
{
    console.log(datas);
    const postContainer = document.getElementById('post-container');
    for(dat of datas)
    {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <h4> User- ${dat.userId}</h4>
        <h5> Post : title - ${dat.title}</h5>
        <p> Description : ${dat.body}</p>
        <h2> ID : ${dat.id}</h2>
        `
        postContainer.appendChild(postDiv);
    }
}