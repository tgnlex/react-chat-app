import {Link} from 'react-router-dom';
import type {Route} from '../../../routes.ts'
type Props = {
  routes: Route[]
}
function Sidebar(props: Props) {
  return (
    <nav id="sidebar">
      <menu id="menu">
        <h3 id="heading">Menu</h3>
        {props.routes.map((route) => (
          <li className="item">
            <Link 
              id={`${route.name}-link`} key={route.id} 
              className={"link"}
              to={route.url}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  )
}

export {Sidebar};