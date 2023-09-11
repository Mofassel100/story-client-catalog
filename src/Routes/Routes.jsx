import { createBrowserRouter } from "react-router-dom";
import AHomePage from "../Admin/Page/AdminHomePage";
import APoetry from "../Admin/Page/PoetryPage";
import AStoryPage from "../Admin/Page/Fiction/StoryPage";
import ANovelPage from "../Admin/Page/Fiction/NovelPage";
import AProse from "../Admin/Page/Essay/Prose";
import ATravelProsePage from "../Admin/Page/Essay/TravelProsePage";
import ATransLationPage from "../Admin/Page/TransLationPage";
import APaintingArt from "../Admin/Page/Art/PaintingArt";
import AMoviePage from "../Admin/Page/Art/MoviePage";
import APhotographPage from "../Admin/Page/Art/PhotographPage";
import AInterview from "../Admin/Page/Interview";
import AMyBook from "../Admin/Page/Books/MyBook";
import Main from "../Share/Main";
import HomePage from "../Page/HomePage";
import Poetry from "../Page/PoetryPage";
import StoryPage from "../Page/Fiction/StoryPage";
import NovelPage from "../Page/Fiction/NovelPage";
import Prose from "../Page/Essay/Prose";
import TravelProsePage from "../Page/Essay/TravelProsePage";
import TransLationPage from "../Page/TransLationPage";
import MoviePage from "../Page/Art/MoviePage";
import PaintingArt from "../Page/Art/PaintingArt";
import PhotographPage from "../Page/Art/PhotographPage";
import Interview from "../Page/Interview";
import MyBook from "../Page/Books/MyBook";
import MainDeshboard from "../Admin/Share/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/poetry",
        element: <Poetry></Poetry>,
      },
      {
        path: "/story",
        element: <StoryPage></StoryPage>,
      },
      {
        path: "/novel",
        element: <NovelPage></NovelPage>,
      },
      {
        path: "/prose",
        element: <Prose></Prose>,
      },
      {
        path: "/travel-prose",
        element: <TravelProsePage></TravelProsePage>,
      },
      {
        path: "/translation",
        element: <TransLationPage></TransLationPage>,
      },
      {
        path: "/movie",
        element: <MoviePage></MoviePage>,
      },
      {
        path: "/painting-art",
        element: <PaintingArt></PaintingArt>,
      },
      {
        path: "/photograph",
        element: <PhotographPage></PhotographPage>,
      },
      {
        path: "/interview",
        element: <Interview></Interview>,
      },
      {
        path: "/my-book",
        element: <MyBook></MyBook>,
      },
    ],
  },
  {
    path: "/deshboard",
    element: <MainDeshboard></MainDeshboard>,
    children: [
      {
        path: "/deshboard",
        element: <AHomePage></AHomePage>,
      },
      {
        path: "/deshboard-poetry",
        element: <APoetry></APoetry>,
      },
      {
        path: "/deshboard-story",
        element: <AStoryPage></AStoryPage>,
      },
      {
        path: "/deshboard-novel",
        element: <ANovelPage></ANovelPage>,
      },
      {
        path: "/deshboard-prose",
        element: <AProse></AProse>,
      },
      {
        path: "/deshboard-travel-prose",
        element: <ATravelProsePage></ATravelProsePage>,
      },
      {
        path: "/deshboard-translattion",
        element: <TransLationPage></TransLationPage>,
      },
      {
        path: "/deshboard-movie",
        element: <AMoviePage></AMoviePage>,
      },
      {
        path: "/deshboard-painting-art",
        element: <APaintingArt></APaintingArt>,
      },
      {
        path: "/deshboard-photograph",
        element: <APhotographPage></APhotographPage>,
      },
      {
        path: "/deshboard-interview",
        element: <AInterview></AInterview>,
      },
      {
        path: "/deshboard-my-book",
        element: <AMyBook></AMyBook>,
      },
      {
        path: "/deshboard-translattion",
        element: <ATransLationPage></ATransLationPage>,
      },
    ],
  },
]);
export default router;
