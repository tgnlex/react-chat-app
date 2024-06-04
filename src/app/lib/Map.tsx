import type { MapProps } from "../../types/mapTypes";

function Map(props: MapProps) {
  return(
    props.items.map((item) => (
      <li key={item.id}>{item.content}</li>
    ))
  )
}

export {Map};

