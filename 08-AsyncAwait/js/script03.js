//Chiamate in Parallelo con metodo Promise.all

async function chiamaParallelo() {
    
    const [users, posts, todos] = await Promise.allSettled([
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/todos").then(res => {return res.json()})
    ])

    return {users, posts, todos}
}

async function main() {
    const objs = await chiamaParallelo();
    console.log(objs.users);
    console.log(objs.posts);
    console.log(objs.todos);
    console.log(objs);
    
    
}

main();