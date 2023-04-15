import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/Home"));
const NoMatch = lazy(() => import("./pages/NotMatch"));
const Detail = lazy(() => import("./pages/Detail"));
const Event = lazy(() => import("./pages/Event"));

export const Router = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/employee/:id" element={<Detail />} />
            <Route path="/event" element={<Event />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
