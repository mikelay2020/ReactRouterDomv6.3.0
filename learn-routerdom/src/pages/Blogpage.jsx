import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Blogpage = () =>{

    const [posts, Setpost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => Setpost(data))
    }, [])

    return(
        <div>
            <h1>Blog</h1>
            {
                posts.map(post =>(
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export {Blogpage}