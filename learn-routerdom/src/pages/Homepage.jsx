import { Link } from 'react-router-dom'

const Homepage = () =>{
    return(
        <div>
            <h1>Home page</h1>
           
<Link to="/begin/authUser" style={{margin: '1rem 1rem', display: 'inline-block'}}>Start work</Link> 
<Link to="/signup" style={{margin: '1rem 1rem', display: 'inline-block'}}>Sign Up</Link> 


        </div>
    )
}

export {Homepage}