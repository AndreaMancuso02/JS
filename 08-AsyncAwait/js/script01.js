
async function getUsers(){   
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json();
        return users;
 
    } catch (error) {
        console.error("Non riesco a recuperare i dati", error);
        throw error;
    }
}

async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json();
        return posts;
}


async function main() {
    const users = await getUsers();
    
    const posts = await getPosts();

    console.log(users);
    console.log(posts);
}

main();


