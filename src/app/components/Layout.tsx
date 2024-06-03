import type {PropsWithChildren } from "react";
import {Sidebar} from './sidebar.tsx';
import { Row } from "./ui/row.tsx";
import {routes} from '../../routes.ts';
// JSX
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