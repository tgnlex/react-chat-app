import { Row } from "./components/ui/row";
import {Sidebar} from './components/sidebar.tsx';
import {routes} from '../routes.ts';

function Main() {
  return (
    <>
    <header>

    </header>
    <Row>
      <Sidebar routes={routes} />
      <main>Main</main>
    </Row>
  </>
  )
}

export {Main};