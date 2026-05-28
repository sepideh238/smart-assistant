import { Link } from 'react-router-dom';

export default function Result() {
  return (
    <div>
      <h1>Result Page</h1>

      <Link to="/"><button>Go To Search</button></Link> {/* اصلاح شده */}
      <br />
      <Link to="/compare"><button>Go To Compare</button></Link>
    </div>
  );
}
