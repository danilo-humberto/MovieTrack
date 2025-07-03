import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./views/home";
import CreateMovie from "./views/CreateMovie";
import MovieDetails from "./views/movieDetails";
import EditMovie from "./views/EditMovie";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateMovie />} />
        <Route path="/edit" element={<EditMovie />} />
        <Route path="/details" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default App;
