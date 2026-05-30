import { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  // const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    //const movieData = fetch();
  }, []);

  return (
    <div className="bg-black/90">
      <Navbar />
      <Outlet />
    </div>
  );
}
