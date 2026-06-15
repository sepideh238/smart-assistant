import { Link } from 'react-router-dom';

export default function Compare() {
  return (
    <div>
      <h1>Compare Page</h1>

      <Link to="/result"><button>Go To Result</button></Link>
      <br />
      <Link to="/"><button>Go To Search</button></Link> {/* اصلاح شده */}
    </div>
  );
}
