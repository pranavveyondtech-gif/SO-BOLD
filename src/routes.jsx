import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PageNotFound from "./pages/PageNotFound";
import NewsList from "./pages/news/NewsList";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Carrers from "./pages/Carrers";
import About from "./pages/About";
import NewsLayout from "./layouts/NewsLayout";
import { NewsListLoader } from "./loaders/NewsListLoader";
import ErrorElementPage from "./pages/ErrorElementPage";
import { categoryLoader } from "./loaders/categoryloader";
import Post from "./pages/Post";
import { PostLoader } from "./loaders/PostLoader";
import StartProject from "./pages/StartProject";
import Home from "./pages/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: App,
      errorElement: <ErrorElementPage />,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "news",
          Component: NewsLayout,
          loader: categoryLoader,
          errorElement: <ErrorElementPage />,
          children: [
            {
              path: ":id?",
              loader: NewsListLoader,
              Component: NewsList,
            },
          ],
        },
        {
          path: "post/:postid",
          loader: PostLoader,
          Component: Post,
        },
        {
          path: "services",
          Component: Services,
        },
        {
          path: "work",
          Component: Work,
        },
        {
          path: "about",
          Component: About,
        },
        {
          path: "carrers",
          Component: Carrers,
        },
        {
          path: "start-project",
          Component: StartProject,
        },
        {
          path: "*",
          Component: PageNotFound,
        },
      ],
    },
  ],
  {
    basename: "/SO-BOLD",
  },
);

export default router;
