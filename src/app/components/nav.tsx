import {Link} from 'react-router-dom';
import {routes, type Routes} from '../../routes.ts'

function Navbar(customRoutes: Routes) {
  const navRoutes: Routes = customRoutes || routes;
  return (
    <nav id="sidebar">
      <menu>
        {navRoutes.map((route) => (
          <li className="menu-item">
            <Link id={`${route.name}-link`} key={route.id} to={route.url}>
              {route.name}
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  )
}

export {Navbar};