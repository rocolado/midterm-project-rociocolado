// Hacer una llamada GET a 
// https://jsonplaceholder.typicode.com/posts/1 para la 
// página individual del proyecto, y pintar dentro la información

function getPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(post => {
        let postData = `
        <h1>Simplify</h1>
        <p>${post.title}</p>
        <p>Completed on 2/2/22</p>
        <img src="../images/recent-projects/1.jpg" alt="Simplify photo">
        <p>${post.body}</p>
        `;

        document.getElementById("post").innerHTML = postData;
    });
};

getPost();