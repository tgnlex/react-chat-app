import type {Route} from './types/route';

const routes: Route[] = [
  {id: 1, url: "/", name: "Home"},
  {id: 2, url: "/chat", name: "Chat"},
  {id: 3, url: "/profile", name: 'Profile'}
]

export {routes};
export type {Route};