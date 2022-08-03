// Hacer una llamada GET a 
// https://jsonplaceholder.typicode.com/posts para 
// pedir la información os de l3 primeros posts y pintarla 
// en la sección de “Recent projects”.

// Añadir el menú hamburguesa en mobile

function getPostsHome() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())    
    .then(posts => {
        let postData = "";

        let recentProjects = posts.slice(0, 3);

        for (let project of recentProjects) {
            postData += `
            <div>
                <img src="../images/recent-projects/${project.id}.jpg" alt="Post photo">
                <p>${project.title}</p>
                <p>${project.body}</p>

                <a href="" id="learn-more-${project.id}">Learn More</a>
            </div>
            `;

            document.getElementById("projects").innerHTML = postData;
        }
    });
};

getPostsHome();