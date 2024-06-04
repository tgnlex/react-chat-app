type Route = {
  id: number, 
  url: string, 
  name: string
}

const routes: Route[] = [
  {id: 1, url: "/", name: "Home"},
  {id: 2, url: "/chat", name: "Chat"},
  {id: 3, url: "/profile", name: 'Profile'},
  {id: 4, url: "/register", name: 'Register'},
]

export {routes};
export type {Route};