import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold">404</h1><br></br><br></br><br></br>
      <p className="text-lg mt-2">Oops! The page you're looking for doesn't exist, or is not ready yet!</p><br></br><br></br><br></br><br></br><br></br>
      <h2><Link to="/info" className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900">
        Go Home
      </Link></h2>
    </div>
  );
}
