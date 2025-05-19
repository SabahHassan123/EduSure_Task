import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Level Up Your Skills</h1>
      <p className="text-xl mb-6">
        Learn new skills and advance your career with top courses.
      </p>
      <Link
        to="/courses"
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
      >
        Browse Courses
      </Link>
    </div>
  );
};

export default Home;
