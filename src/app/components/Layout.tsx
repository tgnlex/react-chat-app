import type {PropsWithChildren } from "react";
import {Sidebar} from './Sidebar.tsx';
import { Row } from "./ui/Row.tsx";
import {routes} from '../../routes.ts';
const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <header>

      </header>
      <Row>
        <Sidebar routes={routes} />
        <>
          {props.children}
        </>
      </Row>
    </>
  )  
}
export {Layout};