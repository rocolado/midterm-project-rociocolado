/* Llamada GET a posts por ID 1 */
const getPostSimplify = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())    
    .then(post => createHTML("Simplify", post, "2/2/22"));
};

/* Llamada GET a posts por ID 2 */
const getPostDashcoin = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((response) => response.json())    
    .then(post => createHTML("Dashcoin", post, "7/2/22"));
};

/* Llamada GET a posts por ID 3 */
const getPostVectorify = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/3")
    .then((response) => response.json())    
    .then(post => createHTML("Vectorify", post, "16/1/22"));
};


/* Función para crear contenido HTML dentro de los div con ID post */ 
const createHTML = (h1, post, date) => {
    let postData = `
        <h1>${h1}</h1>
        <p>${post.title}</p>
        <p>${date}</p>
        <img src="../images/recent-projects/${post.id}.jpg" alt="Post photo">
        <p>${post.body}</p>
        `;

    document.getElementById("post").innerHTML = postData;
};


