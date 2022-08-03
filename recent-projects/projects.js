// Hacer una llamada GET a 
// https://jsonplaceholder.typicode.com/posts/1 para la 
// página individual del proyecto, y pintar dentro la información


function getPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())    
    .then(posts => {
        let postData = "";

        let recentProjects = posts.slice(0, 3);

        for (let project of recentProjects) {
            postData += `
                <h1>Simplify</h1>
                <p>${project.title}</p>
                <p>Completed on 2/2/22</p>
                <img src="../images/recent-projects/${project.id}.jpg" alt="Post photo">
                <p>${project.body}</p>
            `;

            document.getElementById("post").innerHTML = postData;
        }
    });
};

getPost();
