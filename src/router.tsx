import {createBrowserRouter} from "react-router-dom";
import {Main} from './app/Main.tsx';

const router = createBrowserRouter([
  { path: "/", element: <Main />, },
]);


export {router};