import { useState, useEffect } from "react";
import type {FetchProps} from '../../types/fetchTypes.tsx';
import {fetcher} from '../../utils/fetcher.tsx';


function Fetch(props: FetchProps) {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetcher(props.url, props.method, props.opts)
    .then((response) => {
      console.log(response);
      setItems(response)
    })
  })
  return items;
}

export {Fetch};