import type { MapProps } from "../../types/mapTypes";

function Map(props: MapProps) {
  return(
    props.items.map((item) => (
      <li key={item.id}>
        <h4>{item.content.sender}</h4>
        <time>{item.content.date}</time>
        <p>{item.content.body}</p>
      </li>
    ))
  )
}

export {Map};

