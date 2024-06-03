import {createBrowserRouter} from "react-router-dom";
import {Home} from './app/Home';
import {Chat} from './app/Chat';
import {Register} from './app/Register';

const router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: '/chat', element: <Chat />},
  { path: "/profile", element: <Home />, },
  { path: "/register", element: <Register />},
]);

export {router};