import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { MovieList } from "./pages/MovieList";
import { MovieCard } from "./pages/MovieCard";
import { PageNotFound } from "./pages/PageNotFound";




const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const NoHeaderLayout = () => { 
  return <Outlet />;
 }

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Header */}
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={<MovieList movieCategory="now_playing" />}
          />
          <Route
            path="/popular"
            element={<MovieList movieCategory="popular" />}
          />
          <Route
            path="/top-rated"
            element={<MovieList movieCategory="top_rated" />}
          />
          <Route
            path="/upcomning"
            element={<MovieList movieCategory="upcomning" />}
          />
        </Route>

        {/* Routes without Header */}
        <Route element={<NoHeaderLayout />}>
          <Route path="/movie/:id" element={<MovieCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};


// const apiKey = import.meta.env.VITE_TMDB_API_KEY