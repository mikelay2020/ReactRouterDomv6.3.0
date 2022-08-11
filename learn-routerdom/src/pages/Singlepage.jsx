import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const Singlepage = () => {

    const {id} = useParams()
    const [post, Setpost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => Setpost(data))
    }, [id])

  return (
    <div>
       {post && (
        <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        </>
       )}
    </div>
  )
}

export  {Singlepage}