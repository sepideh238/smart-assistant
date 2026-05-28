import { Link } from 'react-router-dom';

export default function Search() {
  
    return (
      <div>
      <h1>Search Page</h1>

      <Link to="/result">
      <button>Go To Result</button></Link>
      <br />
      <Link to="/compare"><button>Go To Compare</button></Link>
    </div>
    );
  }