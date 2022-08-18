import { Link } from 'react-router-dom'

const BeginPage = () => {
  return (
    <div>
      <h1>Begin work</h1>
      <Link to="/signin" style={{margin: '1rem 1rem', display: 'inline-block'}}>Sign In</Link>


    </div>
  );
};

export {BeginPage};
