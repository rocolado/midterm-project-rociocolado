// Añadir el menú hamburguesa en mobile

function getPostsHome() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())    
    .then(posts => {
        let postData = "";

        let recentProjects = posts.slice(0, 3);

        for (let project of recentProjects) {
            postData += `
            <div class="container">
                <img src="../images/recent-projects/${project.id}.jpg" alt="Post photo">
                <p class="recent-project-title">${project.title}</p>
                <p class="recent-project-body">${project.body}</p>

                <a href="recent-projects/project-${project.id}.html" class="link-learn-more" id="learn-more-${project.id}">Learn More</a>
            </div>
            `;

            document.getElementById("projects").innerHTML = postData;
        }
    });
};

getPostsHome();