import {Link, useMatch} from 'react-router-dom'

const CustomLink = ({children, to, ...props}) => {
   const mathc = useMatch(to)
        return(
       <Link to={to}
       style={{
        color: mathc ? 'var(--color-active)' : 'white'
       }} 
        {...props}>
        {children}
        </Link>
    )
}

export {CustomLink}