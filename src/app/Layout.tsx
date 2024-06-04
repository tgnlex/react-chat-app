import type {PropsWithChildren } from "react";
import {Sidebar} from './components/layout/Sidebar.tsx';
import { Row } from "./components/ui/Row.tsx";
import {routes} from '../routes.ts';
import { Header } from "./components/layout/Header.tsx";
const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>
        <Row>
          <Sidebar routes={routes} />
          <>
            {props.children}
          </>
        </Row>
      </main>
    </>
  )  
}
export {Layout};