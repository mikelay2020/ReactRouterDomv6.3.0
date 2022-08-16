import { Link } from 'react-router-dom'

const Homepage = () =>{
    return(
        <div>
            <h1>Home page</h1>
           
<Link to="/begin/new" style={{margin: '1rem 1rem', display: 'inline-block'}}>Start work</Link> 


        </div>
    )
}

export {Homepage}