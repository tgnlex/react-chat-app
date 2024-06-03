import {BrowserRouter} from "react-router-dom";
import {Route, /** useParams, useRouteMatch */} from 'react-router-dom'
import {Main} from './home/Main.tsx';
const ClientRouter = () => {
  return (
    <BrowserRouter>
      <Route element={<Main/>} path="/" />
    </BrowserRouter>
  )
}

export {ClientRouter};