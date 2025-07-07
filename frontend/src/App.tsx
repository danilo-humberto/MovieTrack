import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./views/home";
import CreateMovie from "./views/CreateMovie";
import MovieDetails from "./views/movieDetails";
import EditMovie from "./views/EditMovie";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
