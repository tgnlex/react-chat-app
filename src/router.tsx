import {createBrowserRouter} from "react-router-dom";
import {Home} from './app/pages/Home';
import {Chat} from './app/pages/Chat';
import {Register} from './app/pages/Register';

const router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: '/chat', element: <Chat />},
  { path: "/profile", element: <Home />, },
  { path: "/register", element: <Register />},
]);

export {router};